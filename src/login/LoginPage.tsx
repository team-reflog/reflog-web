import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link as ChakraLink,
    Text,
    VStack
} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

export const LoginPage = () => {
    return (
        <Flex flexDirection={"column"} align={"center"} gap={"30px"}>
            <Heading>로그인</Heading>
                <VStack width={300} gap={"20px"}>
                    <FormControl>
                        <FormLabel>이메일</FormLabel>
                        <Input type={"email"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>비밀번호</FormLabel>
                        <Input type={"password"}/>
                    </FormControl>
                    <Button colorScheme={"teal"} width={"100%"}>로그인</Button>
                </VStack>
                <VStack>
                    <Text>아직 Reflog의 회원이 아니신가요? <ChakraLink as={RouterLink} to={"/join"} color={"teal.500"}>회원가입</ChakraLink>
                    </Text>
                    <Text>아이디, 비밀번호가 기억나지 않는다면, <ChakraLink as={RouterLink} to={"/"} color={"teal.500"}>아이디/비밀번호 찾기</ChakraLink>
                    </Text>
                </VStack>
        </Flex>
    )
}