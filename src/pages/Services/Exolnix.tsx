import { VStack, HStack, Box, Text, Spinner, Center } from "@chakra-ui/react";
import { AboutServices } from "@/components/service-components/AboutServices";
import { WhoWeSurve } from "@/components/service-components/WhoWeServe";
import { Whyus } from "@/components/home-components/WhyUs";
import { useState, useEffect } from "react";

export const Exolnix = () => {
    const [loading, setLoading] = useState(true);

    // Simulate content loading (replace with real API/image load logic)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake loading
        return () => clearTimeout(timer);
    }, []);
    const Reasons = {
        title: "PROBLEMS WE ADDRESS",
        description: "",
        image: "exolink.webp",
        Array: [
            {
                title: "Financial disorder or lack of cashflow visibility.",
                description: ""
            },
            {
                title: "Absence of regular reports for decision-making.",
                description: ""
            },
            {
                title: "Weak monitoring of daily expenses and income.",
                description: ""
            },
            {
                title: "Non-compliance with tax and zakat requirements.",
                description: ""
            },
            {
                title: "Lack of financial planning for upcoming projects.",
                description: ""
            },
            {
                title: "Poor internal accounting performance due to limited hiring capacity.",
                description: ""
            }
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
            bgImage={`url(/1.webp)`
            }
            bgColor={"#F8F8F8"}
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
                    bg={"#1E9241"}
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
                        EXOLNIX
                    </Text>

                    <Text w={{ base: "80%", md: "40%" }}


                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="500"
                        color="white"
                        lineHeight="1"   // makes letters snug
                    >
                        SMART FINANCIAL & ACCOUNTING MANAGEMENT
                    </Text>
                </Box>
            </VStack>

            <AboutServices  {...{
                title: "ABOUT EXOLNIX",
                description: "Exolnix is a specialized unit within the Exoln Group that provides financial and accounting management solutions tailored for entrepreneurs and SMEs. Our approach reflects real market needs, offering clients operational ease and true digital confidence.",
                subtitle: "At Exolnix, we don’t deliver cold, prepackaged programs. We listen carefully, analyze precisely, and provide solutions that empower clients to focus on building their businesses, while we restructure their financial operations into a growth enabler rather than a burden.",
                imageUrl: "/EXOLNIX.webp",
                color: "#1E9241"
            }} />

            <WhoWeSurve Services={[
                {
                    description: "Entrepreneurs starting their ventures who need someone to handle back-office tasks (invoicing, reporting, cashflow, tax, and zakat).",
                    overlay: "#1E9241"
                },
                {
                    description: "SMEs working with limited teams, where the business owner struggles with financial staff lacking analytical and reporting skills.",
                    overlay: "#1E9241"
                },
                {
                    description: "Companies with accounting disarray that require precise restructuring instead of paying high costs to external consultants who add little value.",
                    overlay: "#1E9241"
                },
                {
                    description: "Businesses seeking funding or investors and needing a reliable financial file that reflects their current performance and potential growth.",
                    overlay: "#1E9241"
                }
            ]} />
            <Whyus title={Reasons.title} description={Reasons.description} Array={Reasons.Array} image={Reasons.image} />

        </VStack >
    );
};