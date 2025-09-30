import { AboutServices } from "@/components/service-components/AboutServices";
import { HStack, Text, VStack, Box } from "@chakra-ui/react";
import { WhoWeSurve } from "@/components/service-components/WhoWeServe";
import { Whyus } from "@/components/home-components/WhyUs";
export const Exobiz = () => {
    const AboutExobiz = {
        title: "ABOUT EXOBIZ",
        description: "ExoBiz is the corporate consulting and business development arm of Exoln. We enable companies and institutions to reorganize their structures, develop policies and procedures, and enhance operational efficiency for sustainable growth.",
        subtitle: "We are not just consultants producing paperwork and theoretical opinions. At ExoBiz, we believe our clients’ success is our success. From the moment we step in, our focus is on practical, actionable solutions that directly impact performance and results.",
        imageUrl: "/EXOBIZ.png",
        color: "#FC8000"
    };

    const Reasons = {
        title: "PROBLEMS WE ADDRESS",
        description: "ExoBiz specializes in solving complex organizational challenges that hinder growth and efficiency. Our expertise includes:",
        image: "exobiz.jpg",
        Array: [
            {
                title: "Lack of organizational structure or unclear hierarchy.",
                description: ""
            },
            {
                title: "Weak operational policies and procedures.",
                description: ""
            },
            {
                title: "Overlapping roles and difficulties in performance tracking.",
                description: ""
            },
            {
                title: "Absence of effective performance measurement indicators.",
                description: ""
            },
        ]
    }
    return (
        <VStack w={"100vw"}
            mb={8}
            gap={16}
        >            <VStack
                position="relative"
                justify="center"
                align="center"
                bgImage="url(/4.png)"
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
                    <Text
                        fontSize={{ base: "2.5rem", xl: "4rem" }}
                        fontWeight="semibold"
                        color="white"
                        lineHeight="1"
                        m="0"
                    >
                        EXOBIZ
                    </Text>

                    <Text w={{ base: "80%", md: "40%" }}


                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="500"
                        color="white"
                        lineHeight="1"   // makes letters snug
                    >
                        BUSINESS CONSULTING & ORGANIZATIONAL DEVELOPMENT DIVISION
                    </Text>
                </Box>

            </VStack>
            <AboutServices  {...AboutExobiz} />

            <WhoWeSurve Services={[
                {
                    description: "Startups that need to establish structures and policies from scratch.",
                    overlay: "#FC8000"
                },
                {
                    description: "Medium-sized enterprises seeking restructuring or efficiency improvement.",
                    overlay: "#FC8000"
                },
                {
                    description: "Large organizations requiring specialized business development consulting.",
                    overlay: "#FC8000"
                }
            ]} />

            <Whyus title={Reasons.title} description={Reasons.description} Array={Reasons.Array} image={Reasons.image} />

        </VStack>
    );
};
