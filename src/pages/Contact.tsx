
import { useTranslation } from "@/hooks/useTranslation";
import { selectLanguage } from "@/store/slices/languageSlice";
import { VStack, HStack, Box, Text, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Contact = () => {
    const lang = useSelector(selectLanguage)
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
                }}
            >
                <Box
                    fontFamily={lang === "ar" ? `'Cairo', sans-serif` : `'Montserrat', 'Regular'`}
                    w={{ base: "100%", md: "50%" }}
                    textAlign={"start"} p={16} zIndex={1} mt={{ base: "4rem", md: "5rem" }} mb={{ base: "5rem", md: 0 }}>
                    <Text
                        fontSize={{ base: "1.5rem", xl: "2.5rem", md: "2rem" }}
                        fontWeight="bold"
                        color="white"
                        textAlign="start"
                    >
                        {useTranslation("contact.title")}
                    </Text>
                    <Text fontSize={{ base: "1rem", xl: "1.5rem", md: "1.5rem" }} fontWeight={"400"} color={"white"}> {useTranslation("contact.subtitle")}</Text>
                    <HStack
                        justifyContent="space-between"
                        flexWrap="wrap"
                        color="white"
                        mt={8}
                    >
                        <Input
                            type="text"
                            bg="transparent"
                            p={4}
                            color="white"
                            placeholder={useTranslation("contact.Name")}
                            _placeholder={{ color: "white", opacity: 1 }}
                            width={{ base: "100%", md: "49%" }}
                            height="2.5rem"
                            mt={4}
                            border="2px solid white"
                            borderRadius="4xl"
                        />

                        <Input
                            type="email"
                            bg="transparent"
                            p={4}
                            color="white"
                            placeholder={useTranslation("contact.email")}
                            _placeholder={{ color: "white", opacity: 1 }}
                            width={{ base: "100%", md: "49%" }}
                            height="2.5rem"
                            mt={4}
                            border="2px solid white"
                            borderRadius="4xl"
                        />

                        <Input
                            type="text"
                            bg="transparent"
                            p={4}
                            color="white"
                            placeholder={useTranslation("contact.company")}
                            _placeholder={{ color: "white", opacity: 1 }}
                            width={{ base: "100%", md: "49%" }}
                            height="2.5rem"
                            mt={4}
                            border="2px solid white"
                            borderRadius="4xl"
                        />

                        <Input
                            type="number"
                            bg="transparent"
                            p={4}
                            color="white"
                            placeholder={useTranslation("contact.phone")}
                            _placeholder={{ color: "white", opacity: 1 }}
                            width={{ base: "100%", md: "49%" }}
                            height="2.5rem"
                            mt={4}
                            border="2px solid white"
                            borderRadius="4xl"
                        />
                    </HStack>

                    <Box as="button"
                        border={"2px solid white"}
                        borderRadius={"4xl"}
                        bg={"transparent"}
                        p={4}
                        mt={4}
                        fontSize={"1rem"}
                        color={"white"}
                        width={{ base: "100%", md: "49%" }}
                        _hover={{ bg: "white", color: "black", transition: "0.3s ease-in-out" }}
                    >
                        {useTranslation("contact.SendMessage")}
                    </Box>

                </Box>
            </HStack>
        </VStack>
    )
}