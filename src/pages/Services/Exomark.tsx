import { HStack, Text, VStack, Box } from "@chakra-ui/react";

export const Exomark = () => {
    return (
        < VStack
            position="relative"
            justify="center"
            align="center"
            bgImage={`url(/2.png)`
            }
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            w={{ base: "90vw", md: "100vw" }}
            h="50VH"
            overflow="hidden" // ensures overlay respects border radius
        >
            {/* Overlay */}
            < HStack
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg={"#DC0800"}
                mixBlendMode="multiply"
                opacity={1}
            />
                <Box
                    w={{ base: "100%", md: "100%" }}
                    fontFamily={`'Montserrat', 'Regular'`}
                    textAlign="start"
                    marginInlineStart="10%"
                    zIndex={1}
                    mt={{ base: "8rem", md: "12rem" }}
                    mb={{ base: "5rem", md: 0 }}
                >
                    <Text
                        fontSize={{ base: "5rem", xl: "6rem" }}
                        fontWeight="semibold"
                        color="white"
                        lineHeight="1"   // removes vertical padding/spacing
                        m="0"
                    >
                        EXOMARK
                    </Text>

                    <Text
                        fontSize={{ base: "2rem", xl: "2rem" }}
                        fontWeight="bold"
                        color="white"
                        lineHeight="0.62"   // makes letters snug
                        ml="-3"            // reset margins
                    >
                        MARKETING & CREATIVE DIVISION
                    </Text>
                </Box>
        </VStack>
    );
};