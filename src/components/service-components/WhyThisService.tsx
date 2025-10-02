import { VStack, Stack, Steps, Text } from "@chakra-ui/react";

export type Props = {
    title: string;
    description: string;
    points?: { description: string }[];
    metadata?: { direction: "horizontal" | "vertical"; color: string };
};

const Demo = ({
    steps,
    direction = "horizontal",
    color,
}: {
    steps: { description: string }[];
    direction?: "horizontal" | "vertical";
    color?: string;
}) => {
    return (
        <Steps.Root defaultStep={-1} count={steps.length} color={color}>
            <Steps.List
                flexDir={direction === "horizontal" ? "row" : "column"}
                flexWrap="wrap"
                gap={8}
                justifyContent="space-around"
                alignItems="stretch"
                maxW="100%"
                h="100%"
                maxH={{ base: "100vh", md: direction === "horizontal" ? "none" : "40vh" }}
            >
                {steps.map((step, index) => (
                    <Steps.Item
                        key={index}
                        index={index}
                        flex="1 1 30%"
                        maxW={{ base: "80%", md: direction === "horizontal" ? "17%" : "40%" }}
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
                            <Steps.Indicator color="white" width={"50px"} height={"50px"} bgColor={color} border="none">
                                <Text fontFamily="Agency FB" fontSize="2xl">
                                    {String(index + 1).padStart(2, "0")}
                                </Text>
                            </Steps.Indicator>

                            <Stack pl={4} maxW="100%" textAlign="center" gap={1} flexShrink={0}>
                                <Steps.Description fontSize="lg" color="#707070">
                                    {step.description}
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
    return (
        <VStack
            maxW={"80vw"}
            // w="80%"
            p={{ base: 4, md: 8 }}
            gap={8}
        >
            <Text fontSize="4xl" fontWeight="bold">
                {props.title}
            </Text>

            <Demo
                steps={props.points || []}
                color={props.metadata?.color}
                direction={props.metadata?.direction || "horizontal"}
            />
        </VStack>
    );
};
