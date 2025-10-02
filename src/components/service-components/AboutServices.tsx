import { selectLanguage } from "@/store/slices/languageSlice";
import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";

type Props = {
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    subtitle?: { en: string; ar: string };
    imageUrl?: string;
    color?: string;
};

export const AboutServices = ({ title, description, subtitle, imageUrl, color }: Props) => {
    const lang = useSelector(selectLanguage)
    return (
        <VStack>
            <HStack w={{ base: "90vw", md: "80vw", xl: "90vw" }} justify="space-between" flexDir={{ base: "column", md: "row" }} p={{ base: 4, md: 8 }} gap={4} >
                <VStack p={4} gap={4} align="start" justify="center">
                    <Text as={"h1"} color={color} fontSize={{ base: "2rem", md: "3rem", lg: "4rem", xl: "4rem" }} fontWeight={"bold"} fontFamily={lang === "ar" ? `'Cairo', sans-serif` : `'Montserrat', 'Regular'`}>
                        {lang === "en" ? title.en : title.ar}
                    </Text>
                    <Text
                        fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem", xl: "1.2rem" }}
                        fontWeight={"500"}
                        lineHeight={"150%"}
                        textAlign={"start"}
                        w={{ base: "90vw", md: "60vw", lg: "50vw", xl: "55vw" }}
                    >
                        <Text
                            as="span"
                            color={color}
                            fontWeight="bold"
                        >
                            {lang === "en" ? title.en.split(" ")[1] : title.ar.split(" ")[1]}{" "}
                        </Text>
                        {lang === "en" ? description.en : description.ar}
                    </Text>

                    <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem", xl: "1.2rem" }} fontWeight={"500"} lineHeight={"150%"} textAlign={"start"} w={{ base: "90vw", md: "60vw", lg: "50vw", xl: "55vw" }}>
                        {subtitle && (lang === "en" ? subtitle.en : subtitle.ar)}
                    </Text>
                </VStack>
                <Image src={(imageUrl ? imageUrl : `/AboutServices.webp`)} style={{
                    transform: lang === "ar" ? "scaleX(1)" : "scaleX(-1)",
                }} alt="About Services" h={{ base: "10rem", xl: "15rem" }} />
            </HStack>
        </VStack>
    );
}