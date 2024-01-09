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
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    return (
        <Flex flexDirection={"column"} align={"center"}>
            <HeaderNavigation/>
            <Box maxWidth={"500px"} mt={"20px"}>
                <Routes>
                    <Route path={"/feed"} element={<FeedPage/>}/>
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
