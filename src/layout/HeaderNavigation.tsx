import {Button, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import {useRecoilState} from "recoil";
import {LoginState, loginState} from "../session/LoginSession";

export const HeaderNavigation = () => {

    const [session, useSession] = useRecoilState<LoginState>(loginState);

    return (
        <Flex
            width={"100%"}
            height={"60px"}
            flexDirection={"column"}
            borderBottom={"1px solid"}
            borderBottomColor={"gray.100"}
            alignItems={"center"}
        >
            <Flex
                alignItems={"center"}
                height={"100%"}
                width={960}
                justifyContent={"space-between"}
            >
                <Flex>
                    <Heading margin={0} padding={0} color={"black"} size={"lg"}><RouterLink to={"/"}>Reflog</RouterLink></Heading>
                    <HStack gap={"20px"} ml={"40px"}>
                        <Text>회고 작성하기</Text>
                        <Text>팀 둘러보기</Text>
                    </HStack>
                </Flex>
                {
                    session.loggedIn ? "로그인 되었습니다" :  <RouterLink to={"/login"}><Button variant={"outline"}>로그인</Button></RouterLink>
                }
            </Flex>
        </Flex>
    )
}