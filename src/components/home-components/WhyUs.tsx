import { VStack, Text, HStack, Circle, Box, Spinner } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";

export interface Props {
    title: { en: string, ar: string };
    description: { en: string, ar: string };
    image?: string;
    Array: { title: { en: string; ar: string }; description: { en: string; ar: string } }[];
}

export const Whyus = (Reasons: Props) => {
    const lang = useSelector(selectLanguage)
    const [bgUrl, setBgUrl] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `/${Reasons.image ? Reasons.image : "Whyus.webp"}`;
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setBgUrl(url);
            setLoading(false);
        };
        img.onerror = () => {
            setLoading(false); // fallback to gradient
        };
    }, [Reasons.image]);

    return (
        <VStack
            position="relative"
            width="100vw"
            style={{ contentVisibility: "auto" }} // 👈 huge perf boost
            minH="0vh"
            justify="center"
            align="center"
            bgImage={bgUrl ? `url(${bgUrl})` : "none"}
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            transition="background-image 0.5s ease-in-out"
            _before={{
                content: '""',
                position: "absolute",
                inset: 0,
                bgGradient: bgUrl
                    ? "linear(to-b, blackAlpha.600, blackAlpha.800)"
                    : "linear(to-b, gray.700, black)",
                zIndex: 0,
            }}
        >
            {/* Loading indicator while bg is fetching */}
            {loading && (
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex={2}
                >
                    <Spinner size="xl" color="white" />
                </Box>
            )}

            {/* Title */}
            <Text
                fontWeight="bold"
                fontSize="2.5rem"
                pt={8}
                color="white"
                fontFamily={ lang === "ar" ? "Cairo, sans-serif" : "Montserrat, sans-serif"}
                zIndex={1}
            >
                {lang === "ar" ? Reasons.title.ar : Reasons.title.en}
            </Text>

            {/* Description */}
            <Text
                maxW="50%"
                fontSize="1.5rem"
                textAlign="center"
                fontWeight="300"
                color="white"
                zIndex={1}
            >
                {lang === "ar" ? Reasons.description.ar : Reasons.description.en}
            </Text>

            {/* Reasons List */}
            <HStack
                align="stretch"
                color="white"
                flexDir={{ base: "column", md: "row" }}
                justify="center"
                flexWrap="wrap"
                pb={16}
                zIndex={1}
            >
                {Reasons.Array.map((reason, index) => (
                    <VStack
                        key={index}
                        p={8}
                        borderRadius="8px"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                        maxW="230px"
                        bg="whiteAlpha.100"
                        backdropFilter="blur(6px)"
                    >
                        <Circle border="2px solid white" size="50px" bg="transparent">
                            <FaCheck size="2rem" />
                        </Circle>
                        <Text fontFamily={"Cairo"} fontWeight="400" fontSize="1.2rem" textAlign="center">
                            {lang === "ar" ? reason.title.ar : reason.title.en}
                        </Text>
                        <Text fontSize="1rem" textAlign="center">
                            {lang === "ar" ? reason.description.ar : reason.description.en}
                        </Text>
                    </VStack>
                ))}
            </HStack>
        </VStack>
    );
};
