import { VStack, Text, Stack, Steps, Circle } from "@chakra-ui/react";
import { GiCheckMark } from "react-icons/gi";

export type Props = {
    title: string;
    description: string;
    points?: { title?: string; description: string }[];
    metadata?: { direction: "horizontal" | "vertical"; color: string };
};

const Demo = ({
    steps,
    direction = "horizontal",
    color,
}: {
    steps: { title?: string; description: string }[];
    direction?: "horizontal" | "vertical";
    color?: string;
}) => {
    return (
        <Steps.Root defaultStep={10} count={steps.length} color={color}>
            <Steps.List
                flexDir={direction === "horizontal" ? "row" : "column"}
                flexWrap="wrap"
                gap={8}
                justifyContent="space-around"
                alignItems="stretch"
                maxW="100vw"
                h="100%"
                maxH={direction === "horizontal" ? "none" : "50vh"}
            >
                {steps.map((step, index) => (
                    <Steps.Item
                        key={index}
                        index={index}
                        flex="1 1 30%"
                        maxW={direction === "horizontal" ? "17%" : "40%"}
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
                            <Circle size="50px" bg={"transparent"} color="white" display="flex"
                                alignItems="center" justifyContent="center" fontFamily={"Agency FB"}
                                border={"3px solid " + color}>
                                <Steps.Indicator color={color} fontSize={"3rem"} bgColor={"transparent"} border={"none"}>
                                    <GiCheckMark size={"1.5rem"} />
                                </Steps.Indicator>
                            </Circle>


                            <Stack pl={4} p={2} maxW="100%" textAlign="center" gap={1} flexShrink={0}>
                                <Steps.Title fontWeight={"bold"} fontSize="lg" color="#707070">{step.title}</Steps.Title>
                                <Steps.Description fontSize="lg" color="#707070">{step.description}</Steps.Description>
                            </Stack>
                        </Stack>
                    </Steps.Item>
                ))}
            </Steps.List>
        </Steps.Root>
    );
};


export const WhatYouGet = (props: Props) => {
    return (
        <VStack
            w="80%"
            p={{ base: 4, md: 8 }}
            gap={8}
        >
            <Text fontSize="4xl" fontWeight="bold">
                {props.title}
            </Text>

            <Text fontSize="2xl" fontWeight="semibold">
                {props.description}
            </Text>

            <Demo
                steps={props.points || []}
                color={props.metadata?.color}
                direction={props.metadata?.direction || "horizontal"}
            />
        </VStack>
    );
};
