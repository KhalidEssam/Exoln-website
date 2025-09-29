import { HStack, Text, VStack, Box } from "@chakra-ui/react";

export const Exobiz = () => {
    return (
        <VStack
            position="relative"
            justify="center"
            align="center"
            bgImage="url(/4.png)"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            w={{ base: "90vw", md: "100vw" }}
            h="50vh"
            overflow="hidden"
        >
            {/* Overlay */}
            <HStack
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="#FC8000"
                mixBlendMode="multiply"
                opacity={1}
            />

            <Box
                w="100%"
                fontFamily="'Montserrat', sans-serif"
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
                    lineHeight="1"
                    m="0"
                >
                    EXOBIZ
                </Text>

                <Text
                    fontSize={{ base: "1.5rem", xl: "2rem" }}
                    fontWeight="bold"
                    color="white"
                    lineHeight="1.2"
                    m="0"
                >
                    BUSINESS CONSULTING & ORGANIZATIONAL DEVELOPMENT DIVISION
                </Text>
            </Box>
        </VStack>
    );
};
