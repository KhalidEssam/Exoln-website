import { useEffect, useState } from "react";
import { Whyus, type Props } from "@/components/home-components/WhyUs";
import { VStack, HStack, Box, Text, Spinner } from "@chakra-ui/react";

export const AboutUs = () => {
    const [bgReady, setBgReady] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = "./About.png";
        img.onload = () => setBgReady(true);
    }, []);

    const Values: Props = {
        title: "Our Values",
        description: "",
        image: "about.jpg",
        Array: [
            { title: "TRUST", description: "Building genuine partnerships with clients." },
            { title: "QUALITY", description: "Delivering measurable impact, not just promises." },
            { title: "CREATIVITY", description: "Crafting solutions that inspire and engage." },
            { title: "INTEGRATION", description: "Connecting expertise across divisions for holistic value." },
        ],
    };

    return (
        <VStack w="100vw" mb={8}>
            <HStack
                position="relative"
                top={0}
                width="100%"
                height={{ md: "100vh", lg: "100vh" }}
                overflow="hidden"
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgImage: bgReady ? "url(./About.png)" : "none",
                    bgGradient: !bgReady ? "linear(to-b, gray.700, black)" : undefined,
                    bgSize: "cover",
                    bgPos: "center",
                    zIndex: 0,
                    transition: "opacity 0.5s ease-in-out",
                }}
            >
                {/* Optional: tiny spinner until image is ready */}
                {!bgReady && (
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        zIndex={2}
                    >
                        <Spinner size="xl" color="white" />
                    </Box>
                )}

                <Box
                    className="overlay"
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="blackAlpha.600"
                    zIndex={1}
                />

                <Box
                    fontFamily={`'Montserrat', 'Regular'`}
                    textAlign="start"
                    position="absolute"
                    marginInlineStart="10%"
                    zIndex={1}
                    bottom="10vw"
                >
                    <Text
                        fontSize={{ base: "2rem", xl: "2rem" }}
                        fontWeight="semibold"
                        color="white"
                        lineHeight="1"
                        m="0"
                    >
                        ABOUT
                    </Text>

                    <Text
                        fontSize={{ base: "5rem", xl: "8rem" }}
                        fontWeight="bold"
                        color="white"
                        lineHeight="0.62"
                        ml="-3"
                    >
                        EXOLN
                    </Text>
                </Box>
            </HStack>

            {/* Rest of About Section */}
            <Box
                w={{ base: "100%", md: "80%" }}
                mt={{ base: "2rem", lg: "3rem" }}
                color="#707070"
                fontWeight="300"
                lineHeight="1.4"
                textAlign="center"
                mb={{ base: "1rem", lg: "2rem" }}
            >
                <Text
                    color="#3F3D3D"
                    fontSize={{ base: "2rem", md: "2.5rem", lg: "2.5rem" }}
                    fontFamily={`'Montserrat', 'Regular'`}
                    fontWeight="bold"
                >
                    ABOUT US
                </Text>
                <Text
                    fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }}
                    fontWeight="semibold"
                    mt={{ base: "1rem", md: "2rem", lg: "3rem" }}
                >
                    Exoln was founded to be more than just a service provider...
                </Text>
            </Box>

            <VStack
                mt={{ base: "2rem", lg: "3rem" }}
                mb={{ base: "1rem", lg: "2rem" }}
                pt={{ base: "2rem", lg: "3rem" }}
                pb={{ base: "1rem", lg: "2rem" }}
                w="100%"
                bgColor="#F8F8F8"
            >
                <Text
                    color="#3F3D3D"
                    fontSize={{ base: "2rem", md: "2.5rem", lg: "2.5rem" }}
                    fontFamily={`'Montserrat', 'Regular'`}
                    fontWeight="bold"
                >
                    VISION
                </Text>
                <Text
                    color="#707070"
                    fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }}
                    fontWeight="semibold"
                    w={{ base: "90%", md: "60%" }}
                    textAlign="center"
                >
                    To become the trusted partner that empowers businesses...
                </Text>
            </VStack>

            <Whyus {...Values} />

            <VStack mt={{ base: "2rem", lg: "3rem" }} mb={{ base: "1rem", lg: "2rem" }} w="100%">
                <Text
                    color="#3F3D3D"
                    fontSize={{ base: "2rem", md: "2.5rem", lg: "2.5rem" }}
                    fontFamily={`'Montserrat', 'Regular'`}
                    fontWeight="bold"
                >
                    MISSION
                </Text>
                <Text
                    color="#707070"
                    fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }}
                    fontWeight="semibold"
                    w={{ base: "90%", md: "60%" }}
                    textAlign="center"
                >
                    To integrate finance, technology, creativity, and consulting...
                </Text>
            </VStack>
        </VStack>
    );
};
