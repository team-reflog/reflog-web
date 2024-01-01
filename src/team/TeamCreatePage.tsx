import {
    Button, Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input, Textarea, useToast,
    VStack
} from "@chakra-ui/react";
import {DaySelectButton} from "./components/DaySelectButton";
import React, {useState} from "react";
import {TEAM_URL} from "../api/constants";
import {ApiClient} from "../lib/api/ApiClient";
import {useNavigate} from "react-router-dom";


export interface TeamCreateForm {
    name: string,
    description: string,
    reflectionDays: string[]
}

export const TeamCreatePage = () => {

    const toast = useToast();
    const navigate = useNavigate();

    const [form, setForm] = useState<TeamCreateForm>({
        name: "",
        description: "",
        reflectionDays: []
    })

    const onTeamCreateButtonClicked = () => {
        ApiClient.post<TeamCreateForm>(TEAM_URL, form)
            .then(response => {
                toast({
                    title: "팀 생성",
                    description: "팀 생성에 성공하였습니다.",
                    status: "success",
                    position: "bottom-right",
                    isClosable: true,
                })
                navigate("/teams")
            })
            .catch(() => {
            });
    }

    const daysInfo = [
        {value: 'MONDAY', text: '월'},
        {value: 'TUESDAY', text: '화'},
        {value: 'WEDNESDAY', text: '수'},
        {value: 'THURSDAY', text: '목'},
        {value: 'FRIDAY', text: '금'},
        {value: 'SATURDAY', text: '토'},
        {value: 'SUNDAY', text: '일'},
    ]

    const addDay = (day: string) => {
        setForm(prev => ({
            ...prev,
            reflectionDays: [...prev.reflectionDays, day]
        }))
    }

    const removeDay = (day: string) => {
        setForm(prev => ({
            ...prev,
            reflectionDays: prev.reflectionDays.filter(e => e !== day)
        }))
    }

    const onFormChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onFormTextAreaChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <Flex flexDirection={"column"} align={"center"} gap={"30px"}>
            <Heading>팀 생성</Heading>
            <VStack width={300} gap={"20px"}>
                <FormControl isRequired>
                    <FormLabel>팀 이름</FormLabel>
                    <Input
                        type={"name"}
                        placeholder={"팀 이름"}
                        name={"name"}
                        value={form.name}
                        onChange={onFormChanged}
                    />
                    <FormHelperText>사용자들이 식별할 수 있는, 팀을 대표하는 이름입니다.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>회고 요일(중복 선택 가능)</FormLabel>
                    <Flex gap={"12px"} wrap={"wrap"}>
                        {
                            daysInfo.map(day => <DaySelectButton text={day.text} value={day.value} adder={addDay}
                                                                 remover={removeDay}/>)
                        }
                    </Flex>
                    <FormHelperText>회고를 진행할 요일들을 선택해 주세요.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>팀 설명</FormLabel>
                    <Textarea
                        placeholder={"팀 설명을 입력해 주세요."}
                        name={"description"}
                        value={form.description}
                        onChange={onFormTextAreaChanged}
                    />
                    <FormHelperText>팀에 대한 간략한 소개를 입력해 주세요.</FormHelperText>
                </FormControl>
                <Button colorScheme={"teal"} width={"100%"} onClick={onTeamCreateButtonClicked}>팀 생성</Button>
            </VStack>
        </Flex>
    )
}