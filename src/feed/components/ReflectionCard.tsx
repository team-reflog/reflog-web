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


export const ReflectionCard = () => {
    return (
        <Card>
            <CardHeader>
                <Flex gap={"16px"} alignItems={"center"} flexWrap={"wrap"}>
                    <Avatar name='백승윤' src={profileImage}/>
                    <Box>
                        <Heading size={"sm"}>백승윤</Heading>
                        <Text>우아한테크캠프 6기</Text>
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
                    <div>
                        <Heading size={"sm"}>오늘의 기분은 어떠셨나요?</Heading>
                        <UnorderedList>
                            <ListItem>배가 부른 날입니다..</ListItem>
                        </UnorderedList>
                    </div>

                    <div>
                        <Heading size={"sm"}>오늘 공부는 어땠나요?</Heading>
                        <UnorderedList>
                            <ListItem>로그인 페이지를 열심히 만들었습니다. 힘드네요.</ListItem>
                            <ListItem>회원가입 페이지도 만들었어요.</ListItem>
                            <ListItem>다른 사람들의 회고를 구경할 수 있는 피드 페이지도 만들었습니다.</ListItem>
                        </UnorderedList>
                    </div>
                </Flex>
            </CardBody>
        </Card>
    )
}