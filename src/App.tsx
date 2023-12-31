import React from 'react';
import {LoginPage} from "./login/LoginPage";
import {Box, Button, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import {Link as RouterLink, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Flex flexDirection={"column"} align={"center"}>
            <Flex
                width={"100%"}
                height={"60px"}
                flexDirection={"column"}
                borderBottom={"1px solid"}
                borderBottomColor={"#f5f5f5"}
                alignItems={"center"}
            >
                <Flex alignItems={"center"} height={"100%"} width={960} justifyContent={"space-between"}>
                    <Flex>
                        <Heading margin={0} padding={0} color={"black"}>Reflog</Heading>
                        <HStack gap={"20px"} ml={"40px"}>
                            <Text>회고 작성하기</Text>
                            <Text>팀 둘러보기</Text>
                        </HStack>
                    </Flex>
                    <RouterLink to={"/login"}><Button variant={"outline"}>로그인</Button></RouterLink>
                </Flex>
            </Flex>

            <Box width={960} mt={"60px"}>
                <Routes>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Routes>
            </Box>
        </Flex>
    );
}

export default App;
