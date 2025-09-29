import { VStack, HStack, Box, Text } from "@chakra-ui/react";

export const AboutUs = () => {
    return (
        <VStack w={"100vw"}>
            <HStack
                position="relative"
                top={0}
                width="100%"
                height={{ md: "150vh", lg: "120vh" }}
                overflow="hidden"
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgImage: "url(./About.png)",
                    bgSize: "cover",
                    bgPos: "center",
                    zIndex: 0, // background
                }}
            >
                <Box
                    className="overlay"
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="blackAlpha.600" // or your glaze color
                    zIndex={1}
                />
                <Box
                    w={{ base: "100%", md: "50%" }}
                    fontFamily={`'Montserrat', 'Regular'`}
                    textAlign="start"
                    marginInlineStart="10%"
                    zIndex={2}
                    mt={{ base: "8rem", md: "12rem" }}
                    mb={{ base: "5rem", md: 0 }}
                >
                    <Text
                        fontSize={{ base: "2rem", xl: "2rem" }}
                        fontWeight="semibold"
                        color="white"
                        lineHeight="1"   // removes vertical padding/spacing
                        m="0"            // reset margins
                    >
                        ABOUT
                    </Text>

                    <Text
                        fontSize={{ base: "5rem", xl: "8rem" }}
                        fontWeight="bold"
                        color="white"
                        lineHeight="0.62"   // makes letters snug
                        ml="-3"            // reset margins
                    >
                        EXOLN
                    </Text>
                </Box>

            </HStack>
        </VStack>
    )
}
