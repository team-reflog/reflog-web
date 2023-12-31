import {
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Text,
    useToast,
    VStack
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const JoinPage = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const onJoinButtonClicked = () => {
        const examplePromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 1000)
        }).then(() => navigate("/login"));

        toast.promise(examplePromise, {
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
                    <Input type={"email"} placeholder={"이메일"}/>
                    <FormHelperText>메일을 수신받을 수 있는 이메일을 설정해야 합니다.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>비밀번호</FormLabel>
                    <Input type={"password"} placeholder={"비밀번호"}/>
                    <FormHelperText>비밀번호는 특수기호, 영문자, 숫자를 하나씩 포함하여 10자 이상으로 설정해야 합니다.</FormHelperText>
                </FormControl>
                <Button colorScheme={"teal"} width={"100%"} onClick={onJoinButtonClicked}>회원가입</Button>
            </VStack>
        </Flex>
    )
}