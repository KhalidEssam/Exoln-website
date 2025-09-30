import { Whyus, type Props } from "@/components/home-components/WhyUs";
import { VStack, HStack, Box, Text } from "@chakra-ui/react";

export const AboutUs = () => {
    const Values: Props = {
        title: "Our Values",
        description: "",
        image: "about.jpg",
        Array: [
            {
                title: "TRUST",
                description: "Building genuine partnerships with clients."
            },
            {
                title: "QUALITY",
                description: "Delivering measurable impact, not just promises."
            },
            {
                title: "CREATIVITY",
                description: "Crafting solutions that inspire and engage."
            },
            {
                title: "INTEGRATION",
                description: "Connecting expertise across divisions for holistic value."
            }]
    }
    return (
        <VStack w={"100vw"} mb={8} >
            <HStack
                position="relative"
                top={0}
                width="100%"
                height={{ md: "100vh", lg: "100vh" }}
                overflow="hidden"
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgImage: "url(./About.png)",
                    bgSize: "cover",
                    bgPos: "center",
                    zIndex: 0, // background
                }}
            >
                <Box
                    className="overlay"
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="blackAlpha.600" // or your glaze color
                    zIndex={1}
                />
                <Box
                    fontFamily={`'Montserrat', 'Regular'`}
                    textAlign="start"
                    position={"absolute"}
                    marginInlineStart="10%"
                    zIndex={1}
                    bottom="10vw"
                >
                    <Text
                        fontSize={{ base: "2rem", xl: "2rem" }}
                        fontWeight="semibold"
                        color="white"
                        lineHeight="1"   // removes vertical padding/spacing
                        m="0"            // reset margins
                    >
                        ABOUT
                    </Text>

                    <Text
                        fontSize={{ base: "5rem", xl: "8rem" }}
                        fontWeight="bold"
                        color="white"
                        lineHeight="0.62"   // makes letters snug
                        ml="-3"            // reset margins
                    >
                        EXOLN
                    </Text>
                </Box>
            </HStack>
            <Box w={{ base: "100%", md: "80%" }} mt={{ base: "2rem", lg: "3rem" }} color={"#707070"} fontWeight={"300"}
                lineHeight={"1.4"} textAlign={"center"} mb={{ base: "1rem", lg: "2rem" }}>

                <Text color={"#3F3D3D"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2.5rem" }} fontFamily={`'Montserrat', 'Regular'`} fontWeight="bold" >
                    ABOUT US
                </Text>
                <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontWeight="semibold" mt={{ base: "1rem", md: "2rem", lg: "3rem" }}>
                    Exoln was founded to be more than just a service provider; it is a comprehensive ecosystem that enables businesses and entrepreneurs to manage their operations efficiently, develop organizational structures, embrace digital transformation, build strong brands, and reach their customers in the most creative and effective ways.
                </Text>
                <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontWeight="semibold" mt={{ base: "1rem", md: "2rem", lg: "3rem" }}>
                    With Exoln, you will find a single partner that combines financial insight, marketing creativity, advanced technology, organizational expertise, and the power of storytelling — offering your business the opportunity for sustainable and balanced growth.
                </Text>
            </Box>

            <VStack mt={{ base: "2rem", lg: "3rem" }} mb={{ base: "1rem", lg: "2rem" }} pt={{ base: "2rem", lg: "3rem" }} pb={{ base: "1rem", lg: "2rem" }} w={{ base: "100%", md: "100%" }} bgColor={"#F8F8F8"}>
                <Text color={"#3F3D3D"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2.5rem" }} fontFamily={`'Montserrat', 'Regular'`} fontWeight="bold" >
                    VISION
                </Text>
                <Text color={"#707070"} fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontWeight="semibold" w={{ base: "90%", md: "60%" }} textAlign={"center"}>
                    To become the trusted partner that empowers businesses with innovative solutions for sustainable growth.
                </Text>
            </VStack>

            <Whyus title={Values.title} description={Values.description} Array={Values.Array} image={Values.image} />


            <VStack mt={{ base: "2rem", lg: "3rem" }} mb={{ base: "1rem", lg: "2rem" }} w={{ base: "100%", md: "100%" }} >
                <Text color={"#3F3D3D"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2.5rem" }} fontFamily={`'Montserrat', 'Regular'`} fontWeight="bold" >
                    MISSION
                </Text>
                <Text color={"#707070"} fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }} fontWeight="semibold" w={{ base: "90%", md: "60%" }} textAlign={"center"}>
                    To integrate finance, technology, creativity, and consulting into one ecosystem that enables clients to focus on growth while we simplify the complexity behind the scenes.                </Text>
            </VStack>
        </VStack >
    )
}
