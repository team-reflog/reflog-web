import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    HStack,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";
import profileImage from "../dummy/images/profile.jpeg";
import {FaUser} from "react-icons/fa";

export const TeamManagePage: React.FC = () => {
    return (
        <Flex flexDirection={"column"} align={"center"} gap={"20px"} mt={"4em"}>
            <Heading>나의 팀</Heading>
            <VStack>
                <Card width={"100%"}>
                    <CardHeader>
                        <Flex gap={"16px"} alignItems={"center"} flexWrap={"wrap"}>
                            <Avatar name={"오랑우탄"} src={profileImage}/>
                            <Box>
                                <Heading size={"sm"}>{"오랑우탄"}</Heading>
                                <Text>{"오랑우탄들이 모인 팀입니다."}</Text>
                                <HStack><FaUser color={"gray"}/><Text color={"gray"}>8/20</Text></HStack>
                            </Box>
                        </Flex>
                    </CardHeader>
                </Card>

                <Card width={"100%"}>
                    <CardHeader>
                        <Flex gap={"16px"} alignItems={"center"} flexWrap={"wrap"}>
                            <Avatar name={"오랑우탄"} src={profileImage}/>
                            <Box>
                                <Heading size={"sm"}>{"우아한테크캠프"}<Badge>관리자</Badge></Heading>
                                <Text>{"우아한 테크캠프 팀입니다."}</Text>
                                <HStack><FaUser color={"gray"}/><Text color={"gray"}>3/10</Text></HStack>
                            </Box>
                        </Flex>
                    </CardHeader>
                </Card>
            </VStack>
            <Button as={Link} to={"/teams/new"} colorScheme={"teal"} variant={"outline"} width={"100%"}>팀 생성하기</Button>
        </Flex>
    )
}