import { useTranslation } from "@/hooks/useTranslation";
import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { SkippingGrid } from "./SkippingGrid";


export const HeroSection = () => {
    return (
        <VStack mt={{ base: "6rem", md: "4rem", lg: "3rem" }} mb={{ base: "6rem", md: "4rem", lg: "3rem" }}>
            <HStack color={"white"} justify={"space-between"} align={"stretch"}
                flexDir={{ base: "column", lg: "row" }}
                width={"95%"} height={"100%"}>
                <VStack style={{ contentVisibility: "auto" }} // 👈 huge perf boost
                    zIndex={1} alignItems={{ base: "center", lg: "flex-start" }} w={{ base: "100%", lg: "45%" }} gap={4}>
                    <Text fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem", xl: "3.5rem" }}
                        fontWeight={"300"}
                        fontFamily={`'Montserrat', 'Regular'`}
                        lineHeight={"100%"}
                        textAlign={{ base: "center", lg: "left" }}
                    >
                        {useTranslation("home.heroSection.title")}
                    </Text>
                    <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem", xl: "1.2rem" }}
                        fontWeight={"300"}
                        lineHeight={"150%"}
                        textAlign={{ base: "center", lg: "left" }}>
                        {useTranslation("home.heroSection.subtitle")}
                    </Text>
                    <Box as="button"
                        border={"2px solid white"}
                        borderRadius={"4xl"}
                        p={4}
                        mt={4}
                        fontSize={"1rem"}
                        fontFamily={`'Montserrat', 'Regular'`}
                        _hover={{
                            bg: "white", color: "black",
                            transition: "0.3s ease-in-out"
                        }}

                    >
                        Get a custom plan
                    </Box>
                </VStack >

                <SkippingGrid />

            </HStack>
        </VStack>
    );
};