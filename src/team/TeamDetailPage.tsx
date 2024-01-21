import {
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    List,
    ListItem,
    Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
    Text, Textarea,
    UnorderedList, useDisclosure,
    VStack
} from "@chakra-ui/react";
import {BiPlus} from "react-icons/bi";
import {ChangeEvent, useState} from "react";
import {ApiClient} from "../lib/api/ApiClient";
import {API_DOMAIN} from "../api/constants";
import {useParams} from "react-router-dom";

interface NewTopic {
    teamId: number,
    content: string
}

export const TeamDetailPage = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [newTopic, setNewTopic] = useState<string>("");
    const {id} = useParams();

    const onNewTopicChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewTopic(e.target.value);
    }

    const onNewTopicAddButtonClicked = () => {
        ApiClient.post<NewTopic>(API_DOMAIN + "/topics", {teamId: id, content: newTopic}).then(r => {
            setNewTopic("");
            onClose();
        })
    }

    return (
        <VStack mt={"60px"}>
            <Heading mb={"30px"}>팀 관리</Heading>
            <Flex flexDirection={"column"} gap={"10px"}>
                <Box>
                    <Heading size={"md"}>팀 이름</Heading>
                    <Text>오랑오랑</Text>
                </Box>

                <Box>
                    <Heading size={"md"}>팀 설명</Heading>
                    <Text>오랑우탄들이 모여있는 팀입니다.</Text>
                </Box>

                <Box>
                    <Heading size={"md"}>팀 회고 요일</Heading>
                    <Text>월, 화, 수, 목, 금</Text>
                </Box>

                <Box>
                    <Heading size={"md"}>팀 회고 주제<IconButton onClick={onOpen} size={"xs"} aria-label={"add"} icon={<BiPlus/>} colorScheme={"teal"} variant={"outline"} ml={"10px"}/></Heading>
                    <UnorderedList>
                        <ListItem>오늘의 기분은 어떤가요?</ListItem>
                        <ListItem>오늘은 어떤 일이 있었나요?</ListItem>
                    </UnorderedList>
                </Box>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>회고 주제 추가</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Textarea placeholder={"추가할 회고 주제를 입력해 주세요."} value={newTopic} onChange={onNewTopicChange}></Textarea>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='teal' mr={3} onClick={onNewTopicAddButtonClicked}>
                                추가
                            </Button>
                            <Button variant='ghost' onClick={onClose}>취소</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </VStack>
    )
}