import { useTranslation } from "@/hooks/useTranslation";
import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { SkippingGrid } from "./SkippingGrid";


export const HeroSection = () => {
    return (
        <VStack>
            <HStack color={"white"} justify={"space-between"} flexDir={{ base: "column", lg: "row" }} width={"95%"} height={"100%"} align={"stretch"}  >
                <VStack alignItems={{ base: "center", lg: "flex-start" }} w={{ base: "100%", lg: "45%" }} height={"100%"}>
                    <Text fontSize={{ base: "2rem", md: "3rem", lg: "4rem", xl: "4rem" }}
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
                    >
                        Get a custom plan
                    </Box>
                </VStack >

                <SkippingGrid />

            </HStack>
        </VStack>
    );
};