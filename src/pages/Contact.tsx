
import { VStack, HStack, Box, Text, Input } from "@chakra-ui/react";

export const Contact = () => {
    return (
        <VStack w={"100vw"}>


            <HStack
                position="relative"
                top={0}
                width="100%"
                height="100vh"
                overflow="hidden"
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgImage: "url(./Contact.webp)",
                    bgSize: "cover",
                    bgPos: "center",
                    // transform: "scaleX(-1)",
                }}
            >
                <Box w={{ base: "100%", md: "50%" }} fontFamily={`'Montserrat', 'Regular'`}
                    textAlign={"start"} p={16} zIndex={1} mt={{ base: "4rem", md: "5rem" }} mb={{ base: "5rem", md: 0 }}>
                    <Text
                        fontSize={{ base: "1.5rem", xl: "2.5rem", md: "2rem" }}
                        fontWeight="bold"
                        color="white"
                        textAlign="start"
                    >
                        CONTACT US
                    </Text>
                    <Text fontSize={{ base: "1rem", xl: "1.5rem", md: "1.5rem" }} fontWeight={"400"} color={"white"}> Behind every success story is a conversation, that started somewhere. Start yours today.</Text>
                    <HStack justifyContent={"space-between"} flexWrap={"wrap"} color={"white"} mt={8}>
                        <Input as={"input"} type="text" bg={"transparent"} p={4} placeholder="Your Name" width={{ base: "100%", md: "49%" }} height={"2.5rem"} mt={4} border={"2px solid white"} borderRadius={"4xl"} />
                        <Input as={"input"} type="email" bg={"transparent"} p={4} placeholder="E-mail" width={{ base: "100%", md: "49%" }} height={"2.5rem"} mt={4} border={"2px solid white"} borderRadius={"4xl"} />
                        <Input as={"input"} type="text" bg={"transparent"} p={4} placeholder="Company Name" width={{ base: "100%", md: "49%" }} height={"2.5rem"} mt={4} border={"2px solid white"} borderRadius={"4xl"} />
                        <Input as={"input"} type="number" bg={"transparent"} p={4} placeholder="Phone Number" width={{ base: "100%", md: "49%" }} height={"2.5rem"} mt={4} border={"2px solid white"} borderRadius={"4xl"} />
                    </HStack>
                    <Box as="button"
                        border={"2px solid white"}
                        borderRadius={"4xl"}
                        p={4}
                        mt={4}
                        fontSize={"1rem"}
                        fontFamily={`'Montserrat', 'Regular'`}
                        color={"white"}
                        width={{ base: "100%", md: "49%" }}
                        _hover={{ bg: "white", color: "black", transition: "0.3s ease-in-out" }}
                    >
                        Submit
                    </Box>

                </Box>
            </HStack>
        </VStack>
    )
}