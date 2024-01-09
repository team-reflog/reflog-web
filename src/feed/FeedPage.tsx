import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Image,
    Text,
    IconButton,
    VStack, MenuButton, Menu, MenuList, MenuItem, UnorderedList, ListItem, HStack
} from "@chakra-ui/react";
import {BiChat, BiLike} from "react-icons/bi";
import {BsThreeDotsVertical} from "react-icons/bs";
import {ReflectionCard} from "./components/ReflectionCard";
import {TeamProfileButton} from "./components/TeamProfileButton";
import React from "react";

export const FeedPage = () => {

    const teamNames = ["우테캠 6기", "Antifragile", ]

    return (
        <Flex flexDirection={"column"} gap={"20px"} paddingX={"10px"}>
                    <HStack gap={"4px"}>
                        <TeamProfileButton name={"나의 회고"} selected={true}/>

                        {teamNames.map(name => (<TeamProfileButton name={name} selected={false}/>))}

                        <Flex
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={"6px"}
                            style={{}}
                        >
                            <Avatar name={"+"} size={"md"} backgroundColor={"gray"}/>
                            <Text fontSize={"11pt"}>팀 생성</Text>
                        </Flex>
                    </HStack>
            <VStack>
                {[1, 2, 3, 4, 5, 6].map(() =>
                    <ReflectionCard/>
                )}
            </VStack>
        </Flex>
    )
}