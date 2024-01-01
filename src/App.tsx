import React from 'react';
import {LoginPage} from "./login/LoginPage";
import {Box, Flex} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import {HeaderNavigation} from "./layout/HeaderNavigation";
import {JoinPage} from "./join/JoinPage";
import {FeedPage} from "./feed/FeedPage";
import {TeamCreatePage} from "./team/TeamCreatePage";
import {Footer} from "./layout/Footer";

const App = () => {
    return (
        <Flex flexDirection={"column"} align={"center"}>
            <HeaderNavigation/>
            <Box width={960} mt={"60px"}>
                <Routes>
                    <Route path={"/"} element={<FeedPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/join"} element={<JoinPage/>}/>
                    <Route path={"/team/new"} element={<TeamCreatePage/>}/>
                </Routes>
            </Box>
            <Footer/>
        </Flex>
    );
}

export default App;
