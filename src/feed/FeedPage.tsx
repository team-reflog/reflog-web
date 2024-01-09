import {
    Button,
    Flex,
    Text,
    VStack, HStack, Alert, AlertIcon
} from "@chakra-ui/react";
import {ReflectionCard} from "./components/ReflectionCard";
import {TeamProfileButton} from "./components/TeamProfileButton";
import React from "react";

export const FeedPage = () => {

    const teamNames = ["우테캠 6기", "Antifragile", "오랑우탄", "asdf", "ASf", "Fqwef"]

    return (
        <Flex flexDirection={"column"} gap={"20px"} paddingX={"20px"} width={"min(100vw, 500px)"} mt={"1.6em"}>
            <HStack gap={"4px"} overflowX={"scroll"} margin={"0px"} whiteSpace={"nowrap"}>
                <TeamProfileButton name={"나의 회고"} selected={true}/>
                {teamNames.map(name => (<TeamProfileButton name={name} selected={false}/>))}
            </HStack>
            <VStack>
                <Alert status={"info"} variant={"left-accent"}>
                    <AlertIcon/>
                    <Flex justifyContent={"space-between"} width={"100%"} alignItems={"center"}>
                        <Text>오늘의 회고를 작성해 주세요.</Text>
                        <Button size={"sm"}>작성하기</Button>
                    </Flex>
                </Alert>
                {[1, 2, 3, 4, 5, 6].map(() =>
                    <ReflectionCard
                     name={"백승윤"}
                     team={"우아한테크캠프 6기"}
                     reflections={[{
                         topic: "오늘 하루는 어땠나요?",
                         content: "힘든 하루였어요..🥺"
                     }]}/>

                )}
            </VStack>
        </Flex>
    )
}