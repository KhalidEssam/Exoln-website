import { HStack, Text, VStack, Box } from "@chakra-ui/react";
import { AboutServices } from "../../components/service-components/AboutServices";
import { WhoWeSurve } from "@/components/service-components/WhoWeServe";
import { Whyus } from "@/components/home-components/WhyUs";
import { Center, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export const Exonext = () => {

    const Reasons = {
        title: "PROBLEMS WE ADDRESS",
        description: "",
        image: "exonext1.webp",
        Array: [
            {
                title: "Heavy reliance on manual processes and weak automation.",
                description: ""
            },
            {
                title: "Difficulty tracking operations and resources.",
                description: ""
            },
            {
                title: "Data security vulnerabilities and weak cybersecurity.",
                description: ""
            },
            {
                title: "Need for modern websites and applications that enable digital presence and sales.",
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
        >
            < VStack
                position="relative"
                justify="center"
                align="center"
                bgImage={`url(/3.webp)`
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
                    bg={"#FED036"}
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
                        EXONEXT
                    </Text>

                    <Text w={{ base: "80%", md: "40%" }}


                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="500"
                        color="white"
                        lineHeight="1"   // makes letters snug
                    >
                        DIGITAL TRANSFORMATION & TECHNOLOGY DIVISION
                    </Text>
                </Box>
            </VStack>
            <AboutServices  {...{
                title: "ABOUT EXONEXT",
                description: "ExoNext is the digital transformation and technology arm of Exoln, specialized in delivering innovative systems that help businesses automate their operations and shift from traditional methods to intelligent digital solutions.",
                subtitle: "Through our expertise and global partnerships, we provide integrated solutions including ready-made systems, customized development, and system integrations to enhance efficiency and reduce costs.",
                imageUrl: "/exonext.webp",
                color: "#FED036"
            }} />

            <WhoWeSurve Services={[
                {
                    description: "Companies aiming to automate operations and increase efficiency.",
                    overlay: "#FED036"
                },
                {
                    description: "Organizations looking for comprehensive ERP/CRM solutions.",
                    overlay: "#FED036"
                },
                {
                    description: "Small projects requiring modern websites or applications to sell products and services.",
                    overlay: "#FED036"
                }
            ]} />
            <Whyus title={Reasons.title} description={Reasons.description} Array={Reasons.Array} image={Reasons.image} />

        </ VStack>
    );
};