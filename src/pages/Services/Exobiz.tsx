import { useState, useEffect } from "react";
import { VStack, HStack, Box, Text, Spinner, Center } from "@chakra-ui/react";
import { AboutServices } from "@/components/service-components/AboutServices";
import { WhoWeSurve } from "@/components/service-components/WhoWeServe";
import { Whyus } from "@/components/home-components/WhyUs";
import { WhyThisService } from "@/components/service-components/WhyThisService";
import { WhatYouGet } from "@/components/service-components/WhatYouGet";

export const Exobiz = () => {
    const [loading, setLoading] = useState(true);

    // Simulate content loading (replace with real API/image load logic)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake loading
        return () => clearTimeout(timer);
    }, []);

    const AboutExobiz = {
        title: "ABOUT EXOBIZ",
        description:
            "ExoBiz is the corporate consulting and business development arm of Exoln. We enable companies and institutions to reorganize their structures, develop policies and procedures, and enhance operational efficiency for sustainable growth.",
        subtitle:
            "We are not just consultants producing paperwork and theoretical opinions. At ExoBiz, we believe our clients’ success is our success. From the moment we step in, our focus is on practical, actionable solutions that directly impact performance and results.",
        imageUrl: "/exobiz.webp",
        color: "#FC8000",
    };

    const Reasons = {
        title: "PROBLEMS WE ADDRESS",
        description:
            "ExoBiz specializes in solving complex organizational challenges that hinder growth and efficiency. Our expertise includes:",
        image: "exobiz1.webp",
        Array: [
            { title: "Lack of organizational structure or unclear hierarchy.", description: "" },
            { title: "Weak operational policies and procedures.", description: "" },
            { title: "Overlapping roles and difficulties in performance tracking.", description: "" },
            { title: "Absence of effective performance measurement indicators.", description: "" },
        ],
    };

    const WhysService = {
        title: "WHY CHOOSE EXOBIZ?",
        description: "",
        points: [
            { description: "Extensive, diverse experience, always updated to match evolving regulations and systems." },
            { description: "Integrated consulting that can include technical solutions via ExoNext, bridging theory with practice." },
            { description: "We never leave clients with “paper solutions” — we build together a practical, working reality." },
            { description: "Flexible approach, adapting to each client’s needs instead of one-size-fits-all packages." },
        ],
    };
    const WhysService1 = {
        title: "how we work",
        description: "",
        points: [
            { description: "We start with deep discovery sessions to fully understand the client’s reality." },
            { description: "We analyze the situation carefully and design clear, practical solutions." },
            { description: "We avoid unnecessary services, focusing only on what adds real value." },
            { description: "We don’t push “bundles” — we provide honest, responsible advice." },
            { description: "We stay with the client from consultation to implementation, sharing in their success." },
        ],
    };

    if (loading) {
        return (
            <Center w="100vw" h="100vh" bg="white">
                <Spinner size="xl" color="orange.400" />
            </Center>
        );
    }

    return (
        <VStack w={"100vw"} mb={8} gap={16}>
            {/* Hero Section */}
            <VStack
                position="relative"
                justify="center"
                align="center"
                bgImage="url(/4.webp)"
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                w={{ base: "100vw" }}
                h="100vh"
                overflow="hidden"
            >
                {/* Overlay */}
                <HStack
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="#FC8000"
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
                    <Text fontSize={{ base: "2.5rem", xl: "4rem" }} fontWeight="semibold" color="white" lineHeight="1" m="0">
                        EXOBIZ
                    </Text>

                    <Text
                        w={{ base: "80%", md: "40%" }}
                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="500"
                        color="white"
                        lineHeight="1"
                    >
                        BUSINESS CONSULTING & ORGANIZATIONAL DEVELOPMENT DIVISION
                    </Text>
                </Box>
            </VStack>

            {/* Other Sections */}
            <AboutServices {...AboutExobiz} />
            <WhoWeSurve
                Services={[
                    {
                        description: "Startups that need to establish structures and policies from scratch.",
                        overlay: "#FC8000",
                    },
                    {
                        description: "Medium-sized enterprises seeking restructuring or efficiency improvement.",
                        overlay: "#FC8000",
                    },
                    {
                        description: "Large organizations requiring specialized business development consulting.",
                        overlay: "#FC8000",
                    },
                ]}
            />
            <Whyus {...Reasons} />
            <WhatYouGet {...WhysService1} metadata={{ direction: "horizontal", color: "#FC8000" }} />

            <WhyThisService {...WhysService} metadata={{ direction: "horizontal", color: "#FC8000" }} />
        </VStack>
    );
};
