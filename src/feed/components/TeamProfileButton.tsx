import {Avatar, Flex, Text} from "@chakra-ui/react";
import React from "react";


interface TeamProfileButtonProps {
    name: string,
    selected: boolean
}

export const TeamProfileButton = ({name, selected = true}: TeamProfileButtonProps) => {
    return (
        <Flex
            width={"86px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"6px"}
            style={{cursor: "pointer"}}
            padding={"10px"}
            borderRadius={"6px"}
        >
            <Avatar
                name={name}
                size={"md"}
                style={selected ? {filter: "drop-shadow(0px 0px 6px gray)"} : {}}
                _hover={{filter: "drop-shadow(0px 0px 8px gray)"}}
            />
            <Text fontSize={"11pt"}>{name}</Text>
        </Flex>
    )
}