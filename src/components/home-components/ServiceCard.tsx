import { selectLanguage } from "@/store/slices/languageSlice";
import { VStack, Text, Box, Link as ChakraLink, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { memo } from "react";

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

export const ServiceCard = memo(({ number, service }: ServiceCardProps) => {
    const lang = useSelector(selectLanguage);

    return (
        <VStack
            position="relative"
            justify="center"
            align="center"
            minW="200px"
            maxW={{ base: "90vw", md: "200px", lg: "250px", "2xl": "300px" }}
            borderRadius="lg"
            overflow="hidden"
            role="group"
        >
            {/* Optimized Background Image */}
            <Box
                position="absolute"
                inset={0}
                zIndex={0}
                transition="transform 0.3s ease"
                _groupHover={{ transform: "scale(1.05)" }}
                willChange="transform"
            >
                <Image
                    src={service.icon}
                    alt={service.title || "Service"}
                    objectFit="cover"
                    objectPosition="center"
                    w="100%"
                    h="100%"
                    loading="lazy"
                    decoding="async"
                // Optional: Add srcSet for responsive images
                // srcSet={`${service.icon}?w=300 300w, ${service.icon}?w=600 600w`}
                // sizes="(max-width: 768px) 90vw, (max-width: 1024px) 200px, (max-width: 1536px) 250px, 300px"
                />
            </Box>

            {/* Overlay */}
            <Box
                position="absolute"
                inset={0}
                bg={service.overlay || "#FC8000"}
                mixBlendMode="multiply"
                zIndex={1}
                pointerEvents="none"
            />

            {/* Content */}
            <ChakraLink
                href={service.href}
                w="100%"
                h="100%"
                _hover={{ textDecoration: "none" }}
                zIndex={2}
                aria-label={`View ${service.title} division`}
            >
                <VStack
                    align="flex-start"
                    justify="space-between"
                    h="100%"
                    p={4}
                    color="white"
                >
                    <Text
                        fontFamily="Agency FB"
                        fontWeight="bold"
                        fontSize="3rem"
                        lineHeight={1}
                        aria-hidden="true"
                    >
                        0{number}
                    </Text>
                    <VStack gap={0} align="flex-start">
                        <Text fontSize="1rem" fontWeight="300" textTransform="uppercase">
                            {lang === "en" ? "Division" : "قسم"}
                        </Text>
                        <Text fontWeight="extrabold" fontSize="2rem" lineHeight={1.2}>
                            {service.title}
                        </Text>
                    </VStack>

                    <Text textAlign="start" fontSize="1.5rem" fontWeight="light" lineHeight={1.4}>
                        {lang === "en" ? service.description.en : service.description.ar}
                    </Text>
                </VStack>
            </ChakraLink>
        </VStack>
    );
}, (prevProps, nextProps) => {
    // Custom comparison for memo
    return (
        prevProps.number === nextProps.number &&
        prevProps.service.icon === nextProps.service.icon &&
        prevProps.service.title === nextProps.service.title &&
        prevProps.service.href === nextProps.service.href
    );
});