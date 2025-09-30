import { HStack, VStack, Text, Image } from "@chakra-ui/react";

type Props = {
    title: string;
    description: string;
    subtitle?: string;
    imageUrl: string;
    color?: string;
};

export const AboutServices = ({ title, description, subtitle, imageUrl, color }: Props) => {
    return (
        <VStack>
            <HStack w={{ base: "90vw", md: "80vw", xl: "90vw" }} justify="space-between" flexDir={{ base: "column", md: "row" }} p={{ base: 4, md: 8 }} gap={4} >
                <VStack p={4} gap={4} align="start" justify="center">
                    <Text as={"h1"} color={color} fontSize={{ base: "2rem", md: "3rem", lg: "4rem", xl: "4rem" }} fontWeight={"bold"} fontFamily={`'Montserrat', 'Regular'`}>
                        {title}
                    </Text>
                    <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem", xl: "1.2rem" }} fontWeight={"500"} lineHeight={"150%"} textAlign={"start"} w={{ base: "90vw", md: "60vw", lg: "50vw", xl: "55vw" }}>
                        {description}
                    </Text>
                    <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem", xl: "1.2rem" }} fontWeight={"500"} lineHeight={"150%"} textAlign={"start"} w={{ base: "90vw", md: "60vw", lg: "50vw", xl: "55vw" }}>
                        {subtitle}
                    </Text>
                </VStack>
                <Image src={(imageUrl ? imageUrl : `/AboutServices.jpg`)} style={{
                    transform: "scaleX(-1)",
                }} alt="About Services" h={{ base: "10rem", xl: "15rem" }} />
            </HStack>
        </VStack>
    );
}