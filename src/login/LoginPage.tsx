import {
    Button,
    Flex,
    FormControl, FormLabel,
    Heading,
    Input,
    Link as ChakraLink,
    Text,
    VStack
} from "@chakra-ui/react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {LOGIN_URL} from "../api/constants";
import {useRecoilState} from "recoil";
import {LoginState, loginState, Session} from "../session/LoginSession";
import React, {useState} from "react";

export interface LoginRequest {
    email: string,
    password: string,
}

export const LoginPage = () => {
    const navigate = useNavigate();
    const [, setSession] = useRecoilState<LoginState>(loginState);

    const [form, setForm] = useState<LoginRequest>({
        email: "",
        password: "",
    })

    const onFormChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onLoginButtonClicked = async () => {
        const {data} = await axios.post<LoginRequest, AxiosResponse<Session>>(LOGIN_URL, form)
        setSession({
            loggedIn:true,
            session: data
        });
        navigate("/")
    }

    return (
        <Flex flexDirection={"column"} align={"center"} gap={"30px"}>
            <Heading>로그인</Heading>
            <VStack width={300} gap={"20px"}>
                <FormControl>
                    <FormLabel>이메일</FormLabel>
                    <Input
                        type={"email"}
                        placeholder={"이메일"}
                        name={"email"}
                        value={form.email}
                        onChange={onFormChanged}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>비밀번호</FormLabel>
                    <Input
                        type={"password"}
                        placeholder={"비밀번호"}
                        name={"password"}
                        value={form.password}
                        onChange={onFormChanged}
                    />
                </FormControl>
                <Button colorScheme={"teal"} width={"100%"} onClick={onLoginButtonClicked}>로그인</Button>
            </VStack>
            <VStack>
                <Text>아직 Reflog의 회원이 아니신가요? <ChakraLink as={RouterLink} to={"/join"}
                                                        color={"teal.500"}>회원가입</ChakraLink>
                </Text>
                <Text>아이디, 비밀번호가 기억나지 않는다면, <ChakraLink as={RouterLink} to={"/"} color={"teal.500"}>아이디/비밀번호
                    찾기</ChakraLink>
                </Text>
            </VStack>
        </Flex>
    )
}