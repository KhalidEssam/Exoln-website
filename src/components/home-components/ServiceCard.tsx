import { selectLanguage } from "@/store/slices/languageSlice";
import { VStack, Text, Box, Link as ChakraLink } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export type ServiceProps = {
    title?: string;
    description: { en: string; ar: string };
    icon?: string;
    overlay: string;
    href?: string;
};

type ServiceCardProps = {
    number: number;
    service: ServiceProps;
};

export const ServiceCard = ({ number, service }: ServiceCardProps) => {
    const lang = useSelector(selectLanguage);
    return (
        <VStack
            position="relative"
            justify="center"
            align="center"
            minW={"200px"}
            maxW={{ base: "90vw", md: "200px", lg: "250px", "2xl": "300px" }}
            // w={{ base: "90vw", md: "300px" }}
            // h="300px"
            borderRadius="lg"
            overflow="hidden"
            role="group"
        >
            {/* Background Image */}
            <Box
                position="absolute"
                inset={0}
                bgImage={`url(${service.icon})`}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                zIndex={0}
                transition="transform 0.3s ease"
                _groupHover={{ transform: "scale(1.05)" }}
            />

            {/* Overlay */}
            <Box
                position="absolute"
                inset={0}
                bg={service.overlay || "#FC8000"}
                mixBlendMode="multiply"
                zIndex={1}
            />

            {/* Content */}
            <ChakraLink
                href={service.href}
                w="100%"
                h="100%"
                _hover={{ textDecoration: "none" }}
                zIndex={2}
            >
                <VStack
                    align="flex-start"
                    justify="space-between"
                    h="100%"
                    p={4}
                    color="white"
                >
                    <Text fontFamily="Agency FB" opacity={1} fontWeight="bold" fontSize="3rem">
                        0{number}
                    </Text>
                    <VStack gap={0} align="flex-start">
                        <Text fontSize="1rem" fontWeight="300" textTransform="uppercase">
                            {lang === "en" ? "Division" : "قسم"}
                        </Text>
                        <Text fontWeight="extrabold" fontSize="2rem">
                            {service.title}
                        </Text>
                    </VStack>

                    <Text textAlign={"start"} fontSize="1.5rem" fontWeight="light">
                        {lang === "en" ? service.description.en : service.description.ar}
                    </Text>
                </VStack>
            </ChakraLink>
        </VStack>
    );
};
