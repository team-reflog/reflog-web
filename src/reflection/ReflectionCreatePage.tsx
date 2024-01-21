import {
    Box,
    Button,
    Flex,
    Text,
    Heading,
    Textarea,
    VStack
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {ApiClient} from "../lib/api/ApiClient";
import {API_DOMAIN, TEAM_URL} from "../api/constants";
import {ReflectionForm} from "./components/ReflectionForm";

export interface TopicData {
    id: number,
    teamId: number,
    content: string
}


export const ReflectionCreatePage = () => {

    const [topics, setTopics] = useState<TopicData[]>([]);

    useEffect(() => {
        ApiClient.get<TopicData[]>(API_DOMAIN + "/topics/today").then(r => setTopics(r.data));
    }, [])

    return (
        <Flex flexDirection={"column"} align={"center"} gap={"30px"} mt={"4em"}>
            <Heading>오늘의 회고</Heading>
            <VStack width={300} gap={"20px"}>
                {
                    topics.map(topic => (
                       <ReflectionForm id={topic.id} content={topic.content} teamId={topic.teamId}/>
                    ))
                }
            </VStack>
        </Flex>
    )
}