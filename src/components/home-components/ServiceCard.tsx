import { VStack, Text, Box } from "@chakra-ui/react";

export type ServiceProps = {
    title: string;
    description: string;
    icon: string;
    overlay: string;
};
type ServiceCardProps = {
    number: number;
    service: ServiceProps;
};

export const ServiceCard = ({ number, service }: ServiceCardProps) => {
    return (
        < VStack
            position="relative"
            justify="center"
            align="center"
            bgImage={`url(${service.icon})`
            }
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            w={{ base: "90vw", md: "300px" }}
            h="300px"
            overflow="hidden" // ensures overlay respects border radius
        >
            {/* Overlay */}
            < Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg={service.overlay || "#FC8000"}
                mixBlendMode="multiply"
                opacity={1}
            />

            {/* Content */}
            < Box
                justifyContent={"space-between"}
                h={"100%"}
                p={4}
                gap={16}
                position="relative" zIndex={1}
                color="white" >
                <VStack textAlign="start" w={"100%"}  justifyContent={"space-between"} alignItems={"flex-start"}>
                    <Text fontFamily={"Agency FB"}
                        opacity={0.4} fontWeight={"bold"} fontSize={"3rem"}> 0{number}</Text>

                    <Text fontWeight={"extrabold"} fontSize={"2rem"} >{service.title}</Text>
                    <Text fontSize={"1.5rem"} fontWeight={"light"}>{service.description}</Text>
                </VStack>
            </Box >
        </VStack >

    );
};
