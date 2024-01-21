import React from 'react';
import {LoginPage} from "./login/LoginPage";
import {Box, Flex} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import {HeaderNavigation} from "./layout/HeaderNavigation";
import {JoinPage} from "./join/JoinPage";
import {FeedPage} from "./feed/FeedPage";
import {TeamCreatePage} from "./team/TeamCreatePage";
import {Footer} from "./layout/Footer";
import {LandingPage} from "./landing/LandingPage";
import {TeamManagePage} from "./team/TeamManagePage";
import {ReflectionCreatePage} from "./reflection/ReflectionCreatePage";
import {TeamDetailPage} from "./team/TeamDetailPage";

const App = () => {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    return (
        <Flex flexDirection={"column"} align={"center"}>
            <HeaderNavigation/>
            <Box maxWidth={"500px"}>
                <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                    <Route path={"/feed"} element={<FeedPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/join"} element={<JoinPage/>}/>
                    <Route path={"/teams"} element={<TeamManagePage/>}/>
                    <Route path={"/teams/new"} element={<TeamCreatePage/>}/>
                    <Route path={"/teams/:id"} element={<TeamDetailPage/>}/>
                    <Route path={"/reflections/new"} element={<ReflectionCreatePage/>}/>
                </Routes>
            </Box>
            <Footer/>
        </Flex>
    );
}

export default App;
