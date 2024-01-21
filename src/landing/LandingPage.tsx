import React, {useLayoutEffect} from "react";
import {Box, Button, Flex, Heading, Text, VStack} from "@chakra-ui/react";
import {ReflectionCard} from "../feed/components/ReflectionCard";
import {useRecoilState} from "recoil";
import {loginState, LoginState} from "../session/LoginSession";
import {useNavigate} from "react-router-dom";
import {Footer} from "../layout/Footer";

export const LandingPage: React.FC = () => {

    const [session] = useRecoilState<LoginState>(loginState);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (session.loggedIn) {
            navigate("/feed");
        }

    }, [navigate, session.loggedIn]);

    return (
        <VStack
            position={"absolute"}
            left={"0"}
        >
            <Flex
                backgroundColor={"twitter.100"}
                width={"100vw"}
                flexDirection={"column"}
                alignItems={"center"}
                paddingY={"4rem"}
                gap={"22px"}
            >

                <VStack gap={"0"}>
                    <Heading>성장하는 팀을 위한</Heading>
                    <Heading>회고 작성 플랫폼</Heading>
                </VStack>
                <VStack gap={"0"}>
                    <Text color={"gray"}>팀원과 함께 하루를 돌아보고</Text>
                    <Text color={"gray"}>함께 목표를 달성하는 경험을 제공합니다.</Text>
                </VStack>
                <Box width={"min(100vw, 350px)"}>
                    <ReflectionCard name={"백승윤"} team={"Team Reflog"}
                                    reflections={[{topic: "오늘 하루는 어땠나요?", content: "기분 좋은 하루에요"}]}/>
                </Box>
                <Button>
                    회고 시작하기
                </Button>
            </Flex>
            <VStack paddingY={"4rem"} gap={"30px"}>
                <Heading>HIHI</Heading>
                <VStack>
                    <Text>대충 뭐라무라 자랑하는말</Text>
                    <Text>대충 뭐라무라 자랑하는말</Text>
                    <Text>대충 뭐라무라 자랑하는말</Text>
                </VStack>
                <Button>대충 뭔가 동작하는 버튼</Button>
            </VStack>

            <Flex
                backgroundColor={"gray.100"}
                width={"100vw"}
                flexDirection={"column"}
                alignItems={"center"}
                paddingY={"4rem"}
                gap={"22px"}
            >

                <VStack gap={"0"}>
                    <Heading>성장하는 팀을 위한</Heading>
                    <Heading>회고 작성 플랫폼</Heading>
                </VStack>
                <VStack gap={"0"}>
                    <Text color={"gray"}>팀원과 함께 하루를 돌아보고</Text>
                    <Text color={"gray"}>함께 목표를 달성하는 경험을 제공합니다.</Text>
                </VStack>
                <Button>
                    회고 시작하기
                </Button>
            </Flex>
            <Footer></Footer>
        </VStack>
    )
}
