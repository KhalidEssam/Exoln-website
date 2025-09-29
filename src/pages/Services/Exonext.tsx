import { HStack, Text, VStack, Box } from "@chakra-ui/react";

export const Exonext = () => {
    return (
        < VStack
            position="relative"
            justify="center"
            align="center"
            bgImage={`url(/3.png)`
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
                bg={"#FED036"}
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
                    fontSize={{ base: "2.5rem", xl: "5rem" }}
                    fontWeight="semibold"
                    color="white"
                    lineHeight="1"   // removes vertical padding/spacing
                    m="0"            // reset margins
                >
                    EXONEXT
                </Text>

                <Text
                    fontSize={{ base: "1.5rem", xl: "2rem" }}
                    fontWeight="bold"
                    color="white"
                    lineHeight="0.62"   // makes letters snug
                    ml="-3"            // reset margins
                >
                    DIGITAL TRANSFORMATION & TECHNOLOGY DIVISION
                </Text>
            </Box>
        </VStack>
    );
};