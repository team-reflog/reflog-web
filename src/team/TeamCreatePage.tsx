import {
    Button, Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input, Textarea,
    VStack
} from "@chakra-ui/react";
import {DaySelectButton} from "./components/DaySelectButton";
import {useState} from "react";

export const TeamCreatePage = () => {

    const daysInfo = [
        {value: 'MONDAY', text: '월'},
        {value: 'TUESDAY', text: '화'},
        {value: 'WEDNESDAY', text: '수'},
        {value: 'THURSDAY', text: '목'},
        {value: 'FRIDAY', text: '금'},
        {value: 'SATURDAY', text: '토'},
        {value: 'SUNDAY', text: '일'},
    ]

    const [days, setDays] = useState<string[]>([]);

    return (
        <Flex flexDirection={"column"} align={"center"} gap={"30px"}>
            <Heading>팀 생성</Heading>
            <VStack width={300} gap={"20px"}>
                <FormControl isRequired>
                    <FormLabel>팀 이름</FormLabel>
                    <Input type={"name"} placeholder={"팀 이름"}/>
                    <FormHelperText>사용자들이 식별할 수 있는, 팀을 대표하는 이름입니다.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>회고 요일(중복 선택 가능)</FormLabel>
                    <Flex gap={"12px"} wrap={"wrap"}>
                        {
                            daysInfo.map(day => <DaySelectButton text={day.text} value={day.value} setCollection={setDays} />)
                        }
                    </Flex>
                    <FormHelperText>회고를 진행할 요일들을 선택해 주세요.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>팀 설명</FormLabel>
                    <Textarea placeholder={"팀 설명을 입력해 주세요."}/>
                    <FormHelperText>팀에 대한 간략한 소개를 입력해 주세요.</FormHelperText>
                </FormControl>
                <Button colorScheme={"teal"} width={"100%"}>회원가입</Button>
            </VStack>
        </Flex>
    )
}