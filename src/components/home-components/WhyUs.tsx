import { VStack, Text, HStack, Circle } from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa"

export interface Props {
    title: string;
    description: string;
    image?: string;
    Array: { title: string; description: string }[]
}

export const Whyus = (Reasons: Props) => {

    return (
        <VStack bgImage={`url(/${Reasons.image ? Reasons.image : "Whyus.jpg"})`} width={"100vw"} bgSize={"cover"} bgPos={"center"}>

            <Text fontWeight={"bold"} fontSize={"2.5rem"} pt={8} color={"white"}
                fontFamily={"Montserrat, sans-serif"}>
                {Reasons.title}
            </Text>

            <Text maxW={"50%"} fontSize={"1.5rem"} textAlign={"center"} fontWeight={"300"} color={"white"}>
                {Reasons.description}
            </Text>

            <HStack  align={"stretch"} color={"white"} flexDir={{ base: "column", md: "row" }} justify={"center"} flexWrap={"wrap"} pb={16}>
                {Reasons.Array.map((reason, index) => (
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
