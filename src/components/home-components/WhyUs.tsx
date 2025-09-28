import { VStack, Text, HStack, Circle } from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa"


export const Whyus = () => {
    const Reasons = [
        {
            title: "ONE INTEGRATED ECOSYSTEM",
            description: "Five specialized divisions providing a unified strategy."
        },
        {
            title: "TAILORED SOLUTIONS",
            description: "Custom strategies for your unique challenges."
        },
        {
            title: "MEASURABLE IMPACT",
            description: "Focus on tangible outcomes and clear ROI."
        },
        {
            title: "SEAMLESS COLLABORATION",
            description: "Smooth, transparent partnership throughout."
        },
        {
            title: "TRUSTED PARTNERSHIP",
            description: "Relationships built on reliability and quality."
        }
    ]
    return (
        <VStack bgImage={"url(./Whyus.jpg)"} width={"100vw"} bgSize={"cover"} bgPos={"center"}>

            <Text fontWeight={"bold"} fontSize={"2.5rem"} pt={8} color={"white"}
                fontFamily={"Montserrat, sans-serif"}>
                WHY CHOOSE EXOLN
            </Text>

            <Text maxW={"50%"} fontSize={"1.5rem"} textAlign={"center"} fontWeight={"300"} color={"white"}>
                At Exoln, we redefine partnership by delivering more than just services – we deliver integrated results that drive sustainable growth.
            </Text>

            <HStack align={"stretch"} color={"white"} flexDir={{ base: "column", md: "row" }} justify={"center"} flexWrap={"wrap"} pb={16}>
                {Reasons.map((reason, index) => (
                    <VStack key={index} p={8} m={4} borderRadius={"8px"} boxShadow={"0 4px 6px rgba(0, 0, 0, 0.1)"} maxW={"300px"} minH={"200px"}>

                        <Circle border={"2px solid white"} size={"50px"} bg={"#transparent"} >
                            <FaCheck size={"2rem"} />
                        </Circle>
                        <Text fontWeight={"bold"} fontSize={"1.5rem"} textAlign={"center"}>
                            {reason.title}
                        </Text>
                        <Text fontSize={"1rem"} textAlign={"center"}>
                            {reason.description}
                        </Text>
                    </VStack>
                ))}
            </HStack>

        </VStack>
    )
}
