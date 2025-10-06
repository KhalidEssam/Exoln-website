import { selectLanguage } from "@/store/slices/languageSlice";
import { VStack, Stack, Steps, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export type Props = {
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    points?: { description: { en: string; ar: string } }[];
    metadata?: { direction: "horizontal" | "vertical"; color: string };
};

const StepComp = ({
    steps,
    direction = "horizontal",
    color,
    lang
}: {
    steps: { description: { en: string; ar: string } }[];
    direction?: "horizontal" | "vertical";
    color?: string;
    lang: string;
}) => {
    return (
        <Steps.Root defaultStep={-1} count={steps.length} color={color}>
            <Steps.List
                dir={lang === "ar" ? "rtl" : "ltr"}
                flexDir={direction === "horizontal" ? "row" : "column"}
                flexWrap="wrap"
                gap={8}
                justifyContent="space-around"
                alignItems="stretch"
                // maxW="90vw"
                maxH={{ base: "auto", md: direction === "horizontal" ? "none" : "60vh" }}
            >
                {steps.map((step, index) => (
                    <Steps.Item
                        key={index}
                        index={index}
                        flex="1 1 43%"
                        // justifyContent={"inline-start"}
                        w={{ base: "80%", md: direction === "horizontal" ? "17%" : "40%" }}
                        // maxW={{ base: "80%", md: direction === "horizontal" ? "22%" : "40%" }}
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
                            <Steps.Indicator order={(lang === "en") ? 0 : 1} color="white" width={"50px"} height={"50px"} bgColor={color} border="none">
                                <Text fontFamily="Agency FB" fontSize="2xl">
                                    {String(index + 1).padStart(2, "0")}
                                </Text>
                            </Steps.Indicator>

                            <Stack w={"100%"} order={direction === "horizontal" ? 1 : 0} pl={4} textAlign="center" gap={1} flexShrink={0}>
                                <Steps.Description fontSize="lg" color="#707070">
                                    {lang === "en" ? step.description.en : step.description.ar}
                                </Steps.Description>
                            </Stack>
                        </Stack>
                    </Steps.Item>
                ))}
            </Steps.List>
        </Steps.Root>
    );
};

export const WhyThisService = (props: Props) => {
    const lang = useSelector(selectLanguage)

    return (
        <VStack
            maxW={"80vw"}
            // w="80%"
            p={{ base: 4, md: 8 }}
            gap={8}
        >
            <Text fontSize="4xl" fontWeight="bold">
                {lang === "en" ? props.title.en : props.title.ar}
            </Text>

            <StepComp
                steps={props.points || []}
                color={props.metadata?.color}
                direction={props.metadata?.direction || "horizontal"}
                lang={lang}
            />
        </VStack>
    );
};
