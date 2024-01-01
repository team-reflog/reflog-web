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
    VStack, MenuButton, Menu, MenuList, MenuItem, UnorderedList, ListItem
} from "@chakra-ui/react";
import {BiChat, BiLike} from "react-icons/bi";
import {BsThreeDotsVertical} from "react-icons/bs";

export const FeedPage = () => {
    return (
        <VStack>
            {[1, 2, 3, 4, 5, 6].map(() =>
                <Card maxW='lg'>
                    <CardHeader>
                        <Flex>
                            <Flex flex={1} gap={"14px"} alignItems={"center"} flexWrap={"wrap"}>
                                <Avatar name='백승윤' src='https://bit.ly/sage-adebayo' />
                                <Box>
                                    <Heading size={"sm"}>백승윤</Heading>
                                    <Text>우아한테크캠프 6기</Text>
                                </Box>
                            </Flex>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                    icon={<BsThreeDotsVertical />}
                                />
                                <MenuList>
                                    <MenuItem>다운로드</MenuItem>
                                    <MenuItem>더 보기</MenuItem>
                                </MenuList>
                            </Menu>

                        </Flex>
                    </CardHeader>
                    <Image
                        objectFit='cover'
                        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Chakra UI'
                    />
                    <CardBody>
                        <Flex flexDirection={"column"} gap={"14px"}>
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
                    <CardFooter
                        justify='space-between'
                        flexWrap='wrap'
                        sx={{
                            '& > button': {
                                minW: '136px',
                            },
                        }}
                    >
                        <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                            Like
                        </Button>
                        <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                            Comment
                        </Button>
                        {/*<Button flex='1' variant='ghost' leftIcon={<BiShare />}>*/}
                        {/*    Share*/}
                        {/*</Button>*/}
                    </CardFooter>
                </Card>
            )}
        </VStack>
    )
}