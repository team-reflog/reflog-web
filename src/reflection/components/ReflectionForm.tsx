import {Box, Button, Text, Textarea} from "@chakra-ui/react";
import React, {useState} from "react";
import {TopicData} from "../ReflectionCreatePage";
import {ApiClient} from "../../lib/api/ApiClient";
import {API_DOMAIN} from "../../api/constants";

interface TopicRequest {
    topicId: number,
    content: string,
}

export const ReflectionForm = (topic: TopicData) => {

    const [reflection, setReflection] = useState<string>("");

    const onSaveClicked = () => {
        ApiClient.post<TopicRequest>(API_DOMAIN + "/reflections", {
            topicId: topic.id,
            content: reflection
        }).then(response => {

        })
    }

    const onTextAreaChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReflection(e.target.value)
    }

    return (
        <Box width={"100%"}>
            <Text mb={"10px"}>{topic.content}</Text>
            <Textarea width={"100%"} value={reflection} onChange={onTextAreaChanged}></Textarea>
            <Button colorScheme={"teal"} width={"100%"} onClick={onSaveClicked}>저장하기</Button>
        </Box>
    )
}