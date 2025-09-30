import { HStack, Text, VStack, Box } from "@chakra-ui/react";
import { AboutServices } from "../../components/service-components/AboutServices";
import { WhoWeSurve } from "@/components/service-components/WhoWeServe";
import { Whyus } from "@/components/home-components/WhyUs";
import { Center, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Exomark = () => {
    const AboutExomark = {
        title: "ABOUT EXOMARK",
        description: "ExoMark is the marketing and creative arm of Exoln, dedicated to building brands and launching impactful campaigns that leave a real mark.",
        subtitle: "We accompany our clients from the search for a clear visual identity, through professional content creation and smart advertising campaigns, to managing their digital presence across platforms.",
        imageUrl: "/EXOMARK.png",
        color: "#DC0800"
    };

    const [loading, setLoading] = useState(true);

    // Simulate content loading (replace with real API/image load logic)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake loading
        return () => clearTimeout(timer);
    }, []);

    const Reasons = {
        title: "PROBLEMS WE ADDRESS",
        description: "",
        image: "exomark.jpg",
        Array: [
            {
                title: "Weak or missing visual identity.",
                description: ""
            },
            {
                title: "Lack of strong presence on digital and social platforms.",
                description: ""
            },
            {
                title: "Marketing campaigns with no clear objectives.",
                description: ""
            },
            {
                title: "Repetitive or unprofessional content.",
                description: ""
            },
        ]
    }
        if (loading) {
            return (
                <Center w="100vw" h="100vh" bg="white">
                    <Spinner size="xl" color="orange.400" />
                </Center>
            );
        }
    
    return (
        <VStack w={"100vw"}
            mb={8}
            gap={16}
        >            < VStack
            position="relative"
            justify="center"
            align="center"
            bgImage={`url(/2.png)`
            }
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            w={{ base: "100vw" }}
            h="100vh"
            overflow="hidden" // ensures overlay respects border radius
        >
                {/* Overlay */}
                < HStack
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg={"#DC0800"}
                    mixBlendMode="multiply"
                    opacity={1}
                />
                <Box
                    w={{ base: "100%", md: "100%" }}
                    fontFamily={`'Montserrat', 'Regular'`}
                    textAlign="start"
                    marginInlineStart="10%"
                    zIndex={1}
                    position={"absolute"}
                    bottom="10vw"
                >
                    <Text
                        fontSize={{ base: "3rem", xl: "4rem" }}
                        fontWeight="semibold"
                        color="white"
                        lineHeight="1"   // removes vertical padding/spacing
                        m="0"
                    >
                        EXOMARK
                    </Text>

                    <Text w={{ base: "80%", md: "40%" }}


                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="500"
                        color="white"
                        lineHeight="1"   // makes letters snug
                    >
                        MARKETING & CREATIVE DIVISION
                    </Text>
                </Box>
            </VStack>
            <AboutServices  {...AboutExomark} />

            <WhoWeSurve Services={[
                {
                    description: "Startups seeking a strong launch and clear identity.",
                    overlay: "#F12D26"
                },
                {
                    description: "Medium and large enterprises in need of effective, creative campaigns.",
                    overlay: "#F12D26"
                },
                {
                    description: "Entrepreneurs and individuals looking to build a unique personal brand.",
                    overlay: "#F12D26"
                },
            ]} />

            <Whyus title={Reasons.title} description={Reasons.description} Array={Reasons.Array} image={Reasons.image} />
        </VStack>
    );
};