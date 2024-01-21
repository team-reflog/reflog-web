import {
    Button,
    Flex,
    Text,
    VStack, HStack, Alert, AlertIcon
} from "@chakra-ui/react";
import {ReflectionCard} from "./components/ReflectionCard";
import {TeamProfileButton} from "./components/TeamProfileButton";
import React, {useEffect, useState} from "react";
import {ApiClient} from "../lib/api/ApiClient";
import {API_DOMAIN} from "../api/constants";
import {Link} from "react-router-dom";

interface TeamData {
    id: number,
    name: string,
    description: string,
    ownerId: number,
    reflectionDays: string[]
}

interface ReflectionData {
    reflectionId: number,
    topicId: number,
    content: string,
}

export const FeedPage = () => {

    const [teams, setTeams] = useState<TeamData[]>([]);
    const [reflections, setReflections] = useState<ReflectionData[]>([]);

    useEffect(() => {
        ApiClient.get(API_DOMAIN + "/teams")
            .then(r => setTeams(r.data));

        ApiClient.get(API_DOMAIN + "/reflections/today")
            .then(r => setReflections(r.data));
    }, []);

    return (
        <Flex flexDirection={"column"} gap={"20px"} paddingX={"20px"} width={"min(100vw, 500px)"} mt={"1.6em"}>
            <HStack gap={"4px"} overflowX={"scroll"} margin={"0px"} whiteSpace={"nowrap"}>
                <TeamProfileButton id={0} name={"나의 회고"} selected={true}/>
                {teams.map(team => (<TeamProfileButton id={team.id} name={team.name} selected={false}/>))}
            </HStack>
            <VStack>
                <Alert status={"info"} variant={"left-accent"}>
                    <AlertIcon/>
                    <Flex justifyContent={"space-between"} width={"100%"} alignItems={"center"}>
                        <Text>오늘의 회고를 작성해 주세요.</Text>
                        <Button as={Link} to={"/reflections/new"} size={"sm"}>작성하기</Button>
                    </Flex>
                </Alert>
                {reflections.map(reflection =>
                    <ReflectionCard
                     name={"백승윤"}
                     team={"우아한테크캠프 6기"}
                     reflections={[{
                         topic: `topic : ${reflection.topicId}`,
                         content: reflection.content
                     }]}/>

                )}
            </VStack>
        </Flex>
    )
}