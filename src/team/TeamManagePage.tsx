import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    HStack,
    Text,
    VStack
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import profileImage from "../dummy/images/profile.jpeg";
import {FaUser} from "react-icons/fa";
import {ApiClient} from "../lib/api/ApiClient";
import {API_DOMAIN} from "../api/constants";

interface TeamData {
    id: number,
    name: string,
    description: string,
    ownerId: number,
    reflectionDays: string[]
}


export const TeamManagePage: React.FC = () => {

    const [teams, setTeams] = useState<TeamData[]>([]);

    useEffect(() => {
        ApiClient.get(API_DOMAIN + "/teams")
            .then(r => setTeams(r.data));
    }, []);


    return (
        <Flex flexDirection={"column"} align={"center"} gap={"20px"} mt={"4em"} paddingX={"20px"}>
            <Heading>나의 팀</Heading>
            <VStack>
                {
                    teams.map(team => (
                        <Card width={"100%"} as={Link} to={`/teams/${team.id}`}>
                            <CardHeader>
                                <Flex gap={"16px"} alignItems={"center"} flexWrap={"wrap"}>
                                    <Avatar name={team.name} src={profileImage}/>
                                    <Box>
                                        <Heading size={"sm"}>{team.name}</Heading>
                                        <Text>{team.description}</Text>
                                        {/*<HStack><FaUser color={"gray"}/><Text color={"gray"}>8/20</Text></HStack>*/}
                                    </Box>
                                </Flex>
                            </CardHeader>
                        </Card>
                    ))
                }
            </VStack>
            <Button as={Link} to={"/teams/new"} colorScheme={"teal"} variant={"outline"} width={"100%"}>팀 생성하기</Button>
        </Flex>
    )
}