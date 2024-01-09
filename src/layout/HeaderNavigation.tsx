import {Button, Flex, Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import {useRecoilState} from "recoil";
import {LoginState, loginState} from "../session/LoginSession";
import {IoMdMenu} from "react-icons/io";

export const HeaderNavigation = () => {

    const [session] = useRecoilState<LoginState>(loginState);

    return (
        <Flex
            width={"100%"}
            height={"60px"}
            flexDirection={"column"}
            borderBottom={"1px solid"}
            borderBottomColor={"gray.100"}
            alignItems={"center"}
            paddingX={"10px"}
        >
            <Flex
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                maxWidth={700}
                justifyContent={"space-between"}
            >
                <Flex>
                    <Heading margin={0} padding={0} color={"black"} size={"lg"}><RouterLink to={"/"}>Reflog</RouterLink></Heading>
                    <HStack gap={"20px"} ml={"40px"}>
                    </HStack>
                </Flex>
                {
                    session.loggedIn ?
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                                icon={<IoMdMenu size={30}/>}
                            />
                            <MenuList>
                                <MenuItem>팀 관리</MenuItem>
                                <MenuItem>마이 페이지</MenuItem>
                            </MenuList>
                        </Menu>
                        :
                        <RouterLink to={"/login"}><Button variant={"outline"}>로그인</Button></RouterLink>
                }
            </Flex>
        </Flex>
    )
}