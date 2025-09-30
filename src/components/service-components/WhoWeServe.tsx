import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { type ServiceProps } from "../home-components/ServiceCard";

type WhoWeSurveProps = {
    Services: ServiceProps[];
};

export const WhoWeSurve = ({ Services }: WhoWeSurveProps) => {
    return (
        <VStack justifyContent="center" alignItems="center" gap={8}>
            <HStack
                w="90%"
                align="stretch"
                color="white"
                flexDir={{ base: "column", md: "row" }}
                justify="space-around"
                flexWrap="wrap"
            >
                {Services.map((service, index) => (
                    <VStack
                        key={index}
                        position="relative"
                        justify="center"
                        align="center"
                        w={{ base: "90vw", md: "300px" }}
                        minH="200px"
                        boxShadow={"0 4px 6px rgba(0, 0, 0, 0.1)"}
                        borderRadius="lg"
                        overflow="hidden"
                        role="group"
                    >
                        {/* Background Image */}
                        <Box
                            position="absolute"
                            inset={0}
                            bgImage={service.icon ? `url(${service.icon})` : "none"}
                            bgSize="cover"
                            bgPos="center"
                            bgRepeat="no-repeat"
                            zIndex={0}
                            transition="transform 0.3s ease"
                            _groupHover={{ transform: "scale(1.05)" }}
                        />
                        {/* Content */}
                        <VStack
                            align="flex-start"
                            justify="space-between"
                            h="100%"
                            p={4}
                            color={"#707070"}
                            zIndex={2}
                        >
                            <Text
                                fontFamily="Agency FB"
                                // opacity={0.4}
                                color={service.overlay}
                                fontWeight="bold"
                                fontSize="3rem"
                            >
                                0{index + 1}
                            </Text>

                            <Text textAlign="left" fontSize="1.2rem" fontWeight="400">
                                {service.description}
                            </Text>
                        </VStack>
                    </VStack>
                ))}
            </HStack>
        </VStack>
    );
};
