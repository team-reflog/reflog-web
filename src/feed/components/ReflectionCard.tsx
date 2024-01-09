import {
    Avatar,
    Box, Button, Card, CardBody, CardFooter,
    CardHeader,
    Flex,
    Heading,
    Image, ListItem,
    Text, UnorderedList
} from "@chakra-ui/react";
import profileImage from '../../dummy/images/profile.jpeg';

interface ReflectionCardProps {
    name: string,
    team: string,
    reflections: Reflection[]
}

interface Reflection {
    topic: string,
    content: string
}

export const ReflectionCard = ({name, team, reflections}:ReflectionCardProps) => {
    return (
        <Card>
            <CardHeader>
                <Flex gap={"16px"} alignItems={"center"} flexWrap={"wrap"}>
                    <Avatar name={name} src={profileImage}/>
                    <Box>
                        <Heading size={"sm"}>{name}</Heading>
                        <Text>{team}</Text>
                        <Text color={"gray.400"}>14분 전</Text>
                    </Box>
                </Flex>
            </CardHeader>
            <Image
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
            />
            <CardBody>
                <Flex flexDirection={"column"} gap={"16px"}>
                    {
                        reflections.map(reflection => (
                            <div>
                                <Heading size={"sm"}>{reflection.topic}</Heading>
                                <Text>{reflection.content}</Text>
                            </div>
                        ))
                    }
                </Flex>
            </CardBody>
        </Card>
    )
}