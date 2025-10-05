import { Whyus, type Props } from "@/components/home-components/WhyUs";
import { useTranslation } from "@/hooks/useTranslation";
import { VStack, HStack, Box, Text, Spinner, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";
import { useState, useEffect } from "react";
export const AboutUs = () => {

    const lang = useSelector(selectLanguage);
    const [loading, setLoading] = useState(true);
    const aboutTitle = useTranslation("about.title");

    // Simulate content loading (replace with real API/image load logic)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake loading
        return () => clearTimeout(timer);
    }, []);
    const Values: Props = {
        title: {
            en: "Our Values",
            ar: "قيمنا",
        },
        description: {
            en: "",
            ar: "",
        },
        image: "about1.webp",
        Array: [
            {
                title: {
                    en: "TRUST",
                    ar: "الثقة",
                },
                description: {
                    en: "Building genuine partnerships with clients.",
                    ar: "بناء شراكات حقيقية مع العملاء.",
                },
            },
            {
                title: {
                    en: "QUALITY",
                    ar: "الجودة",
                },
                description: {
                    en: "Delivering measurable impact, not just promises.",
                    ar: "تقديم تأثير ملموس وليس مجرد وعود.",
                },
            },
            {
                title: {
                    en: "CREATIVITY",
                    ar: "الإبداع",
                },
                description: {
                    en: "Crafting solutions that inspire and engage.",
                    ar: "ابتكار حلول تلهم وتبني التفاعل.",
                },
            },
            {
                title: {
                    en: "INTEGRATION",
                    ar: "التكامل",
                },
                description: {
                    en: "Connecting expertise across divisions for holistic value.",
                    ar: "ربط الخبرات بين الأقسام لتقديم قيمة متكاملة.",
                },
            },
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
        <VStack w={"100vw"} mb={8} >
            <HStack
                position="relative"
                top={0}
                width="100%"
                height={"100vh"}
                overflow="hidden"
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgImage: "url(./About.webp)",
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
                    fontFamily={lang === "ar" ? `'Cairo', sans-serif` : `'Montserrat', 'Regular'`}
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
                        textTransform={"uppercase"}
                        lineHeight="1"   // removes vertical padding/spacing
                    // m="0"            // reset margins
                    >
                        {aboutTitle}
                    </Text>
                    <Text
                        fontSize={{ base: "5rem", xl: "8rem" }}
                        fontWeight="bold"
                        color="white"
                        lineHeight="0.82"   // makes letters snug
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

            <VStack mt={{ base: "2rem", lg: "3rem" }} pt={{ base: "2rem", lg: "3rem" }} pb={{ base: "1rem", lg: "2rem" }} w={{ base: "100%", md: "100%" }} bgColor={"#F8F8F8"}>
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
