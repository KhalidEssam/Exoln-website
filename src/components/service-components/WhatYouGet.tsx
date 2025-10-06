import { selectLanguage } from "@/store/slices/languageSlice";
import { VStack, Text, Stack, Steps, Circle } from "@chakra-ui/react";
import { GiCheckMark } from "react-icons/gi";
import { useSelector } from "react-redux";

export type Props = {
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    points?: { description: { en: string; ar: string } }[];
    metadata?: { direction: "horizontal" | "vertical"; color: string };
};
const Demo = ({
    steps,
    direction = "horizontal",
    color,
    lang
}: {
    steps: { title?: string; description: { en: string; ar: string } }[];
    direction?: "horizontal" | "vertical";
    color?: string;
    lang: string;
}) => {
    return (
        <Steps.Root defaultStep={10} count={steps.length} color={color}>
            <Steps.List
                dir={lang === "ar" ? "rtl" : "ltr"}

                flexDir={direction === "horizontal" ? "row" : "column"}
                flexWrap="wrap"
                gap={8}
                justifyContent="space-around"
                alignItems="stretch"
                maxW="100%"
                // h="100%"
                maxH={{ base: "auto", md: direction === "horizontal" ? "none" : "60vh" }}
            >
                {steps.map((step, index) => (
                    <Steps.Item
                        key={index}
                        index={index}
                        flex="1 1 30%"
                        maxW={{ base: "80%", md: direction === "horizontal" ? "22%" : "40%" }}
                        minH="100px"
                        display="flex"
                        h="100%"
                    >
                        <Stack
                            direction={direction === "horizontal" ? "column" : "row"}
                            align="center"
                            gap={3}
                            w="100%"
                            h="100%"
                        >
                            <Circle order={(lang === "en") ? 0 : 1} size="50px" bg={"transparent"} color="white" display="flex"
                                alignItems="center" justifyContent="center" fontFamily={"Agency FB"}
                                border={"3px solid " + color}>
                                <Steps.Indicator color={color} fontSize={"3rem"} bgColor={"transparent"} border={"none"}>
                                    <GiCheckMark size={"1.5rem"} />
                                </Steps.Indicator>
                            </Circle>


                            <Stack order={direction === "horizontal" ? 1 : 0} pl={4} p={2} maxW={{ base: "100%", md: "50%", xl: "60%" }} textAlign="center" gap={1} flexShrink={0}>
                                <Steps.Title fontWeight={"bold"} fontSize="lg" color="#707070">{step.title}</Steps.Title>
                                <Steps.Description fontSize="lg" color="#707070">{lang === "en" ? step.description.en : step.description.ar}</Steps.Description>
                            </Stack>
                        </Stack>
                    </Steps.Item>
                ))}
            </Steps.List>
        </Steps.Root>
    );
};


export const WhatYouGet = (props: Props) => {
    const lang = useSelector(selectLanguage)

    return (
        <VStack
            maxW={"85vw"}
            // w="80%"
            p={{ base: 4, md: 8 }}
            gap={8}
        >
            <Text fontSize="4xl" fontWeight="bold">
                {lang === "en" ? props.title.en : props.title.ar}
            </Text>

            <Text fontSize="2xl" fontWeight="semibold">
                {lang === "en" ? props.description.en : props.description.ar}
            </Text>

            <Demo
                steps={props.points || []}
                color={props.metadata?.color}
                direction={props.metadata?.direction || "horizontal"}
                lang={lang}
            />
        </VStack>
    );
};
