import { VStack, HStack, Box, Text, Spinner, Center } from "@chakra-ui/react";
import { AboutServices } from "../../components/service-components/AboutServices";
import { WhoWeSurve } from "@/components/service-components/WhoWeServe";
import { Whyus } from "@/components/home-components/WhyUs";
import { useState, useEffect } from "react";

export const ExoTale = () => {
    const Reasons = {
        title: "PROBLEMS WE ADDRESS",
        description: "ExoBiz specializes in solving complex organizational challenges that hinder growth and efficiency. Our expertise includes:",
        image: "exotale.jpg",
        Array: [
            {
                title: "Identities without a story or message.",
                description: ""
            },
            {
                title: "Campaigns disconnected from the true spirit of the brand.",
                description: ""
            },
            {
                title: "Difficulty in creating emotional connections with audiences.",
                description: ""
            },
            {
                title: "Lack of a long-term creative strategy.",
                description: ""
            },
        ]
    }
    const [loading, setLoading] = useState(true);

    // Simulate content loading (replace with real API/image load logic)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake loading
        return () => clearTimeout(timer);
    }, []);
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
            bgImage={`url(/5.png)`
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
                    bg={"#9841FD"}
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
                        fontSize={{ base: "2.5rem", xl: "4rem" }}
                        fontWeight="semibold"
                        color="white"
                        lineHeight="1"   // removes vertical padding/spacing
                        m="0"            // reset margins
                    >
                        EXOTALE
                    </Text>

                    <Text w={{ base: "80%", md: "20%" }}


                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="500"
                        color="white"
                        lineHeight="1"   // makes letters snug
                    >
                        BRAND AND CREATIVE STRATEGY DIVISION
                    </Text>
                </Box>
            </VStack>
            <AboutServices  {...{
                title: "ABOUT EXOTALE",
                description: "EXOTALE is the creative strategy and storytelling arm of Exoln. We don’t stop at designing logos or visuals — we craft living narratives that transform brands into inspiring stories, resonating deeply with their audiences.",
                subtitle: "Our mission is to turn every brand into an emotional experience that reflects its values and message, translating them into authentic and impactful communication across all channels.",
                imageUrl: "/EXOTALE.png",
                color: "#9841FD"
            }} />
            <WhoWeSurve Services={[
                {
                    description: "Startups seeking to build their story and identity from the very beginning.",
                    overlay: "#9841FD"
                },
                {
                    description: "Established brands seeking refreshed positioning and narrative.",
                    overlay: "#9841FD"
                },
                {
                    description: "Individuals building personal brands with stories that inspire their audiences.",
                    overlay: "#9841FD"
                },
            ]} />
            <Whyus title={Reasons.title} description={Reasons.description} Array={Reasons.Array} image={Reasons.image} />

        </VStack>
    );
};