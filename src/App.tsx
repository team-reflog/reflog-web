import React from 'react';
import {LoginPage} from "./login/LoginPage";
import {Box, Flex} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import {HeaderNavigation} from "./layout/HeaderNavigation";

const App = () => {
    return (
        <Flex flexDirection={"column"} align={"center"}>
            <HeaderNavigation />
            <Box width={960} mt={"60px"}>
                <Routes>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Routes>
            </Box>
        </Flex>
    );
}

export default App;
