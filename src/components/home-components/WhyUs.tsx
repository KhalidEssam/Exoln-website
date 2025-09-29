import { VStack, Text, HStack, Circle } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";

export interface Props {
    title: string;
    description: string;
    image?: string;
    Array: { title: string; description: string }[];
}

export const Whyus = (Reasons: Props) => {
    const [bgUrl, setBgUrl] = useState<string>("");

    useEffect(() => {
        // pick provided image or fallback
        const url = `/${Reasons.image ? Reasons.image : "Whyus.jpg"}`;
        const img = new Image();
        img.src = url;
        img.onload = () => setBgUrl(url); // only set when fully loaded
    }, [Reasons.image]);

    return (
        <VStack
            width="100vw"
            // minH="0vh"
            bgImage={bgUrl ? `url(${bgUrl})` : "none"}
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            transition="background-image 0.3s ease-in-out"
        >
            {/* Title */}
            <Text
                fontWeight="bold"
                fontSize="2.5rem"
                pt={8}
                color="white"
                fontFamily="Montserrat, sans-serif"
            >
                {Reasons.title}
            </Text>

            {/* Description */}
            <Text
                maxW="50%"
                fontSize="1.5rem"
                textAlign="center"
                fontWeight="300"
                color="white"
            >
                {Reasons.description}
            </Text>

            {/* Reasons List */}
            <HStack
                align="stretch"
                color="white"
                flexDir={{ base: "column", md: "row" }}
                justify="center"
                flexWrap="wrap"
                pb={16}
            >
                {Reasons.Array.map((reason, index) => (
                    <VStack
                        key={index}
                        p={8}
                        m={4}
                        borderRadius="8px"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                        maxW="300px"
                        minH="200px"
                        bg="whiteAlpha.100"
                        backdropFilter="blur(6px)"
                    >
                        <Circle border="2px solid white" size="50px" bg="transparent">
                            <FaCheck size="2rem" />
                        </Circle>
                        <Text fontWeight="bold" fontSize="1.5rem" textAlign="center">
                            {reason.title}
                        </Text>
                        <Text fontSize="1rem" textAlign="center">
                            {reason.description}
                        </Text>
                    </VStack>
                ))}
            </HStack>
        </VStack>
    );
};
