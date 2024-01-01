import {
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    useToast,
    VStack
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {JOIN_URL} from "../api/constants";
import React, {useState} from "react";

export interface UserJoinRequest {
    email: string,
    password: string,
}

export const JoinPage = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const [form, setForm] = useState<UserJoinRequest>({
        email: "",
        password: "",
    })

    const onFormChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onJoinButtonClicked = () => {
        const joinPromise = axios.post<UserJoinRequest>(JOIN_URL, form).then(() => {
            navigate("/login")
        })

        toast.promise(joinPromise, {
            success: {
                title: '회원가입이 완료되었습니다',
                description: '이제 로그인하여 Reflog 서비스를 사용할 수 있습니다!',
                position: "bottom-right",
                isClosable: true,
            },
            error: {
                title: '회원가입 실패',
                description: '회원가입에 실패하였습니다.',
                position: "bottom-right",
                isClosable: true,
            },
            loading: {
                title: '회원가입 진행중...',
                description: '회원가입 진행중입니다. 잠시만 기다려 주세요.',
                position: "bottom-right",
            },
        });
    }

    return (
        <Flex flexDirection={"column"} align={"center"} gap={"30px"}>
            <Heading>회원가입</Heading>
            <VStack width={300} gap={"20px"}>
                <FormControl isRequired>
                    <FormLabel>이메일</FormLabel>
                    <Input
                        type={"email"}
                        placeholder={"이메일"}
                        name={"email"}
                        value={form.email}
                        onChange={onFormChanged}
                    />
                    <FormHelperText>메일을 수신받을 수 있는 이메일을 설정해야 합니다.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>비밀번호</FormLabel>
                    <Input
                        type={"password"}
                        placeholder={"비밀번호"}
                        name={"password"}
                        value={form.password}
                        onChange={onFormChanged}
                    />
                    <FormHelperText>비밀번호는 특수기호, 영문자, 숫자를 하나씩 포함하여 10자 이상으로 설정해야 합니다.</FormHelperText>
                </FormControl>
                <Button colorScheme={"teal"} width={"100%"} onClick={onJoinButtonClicked}>회원가입</Button>
            </VStack>
        </Flex>
    )
}