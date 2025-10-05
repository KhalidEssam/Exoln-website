import {
    VStack,
    Text,
    HStack,
    Circle,
    Box,
    Image,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { memo, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";

export interface Props {
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    image?: string;
    Array: { title: { en: string; ar: string }; description: { en: string; ar: string } }[];
}

const ReasonCardSkeleton = memo(() => (
    <VStack
        p={8}
        borderRadius="8px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        maxW="230px"
        minH="250px"
        bg="whiteAlpha.100"
        backdropFilter="blur(6px)"
        gap={4}
    >
        <SkeletonCircle loading size="50px" colorPalette="gray" variant="pulse" />
        <SkeletonText
            loading
            noOfLines={2}
            gap={2}
            colorPalette="gray"
            variant="pulse"
        />
        <SkeletonText
            loading
            noOfLines={3}
            gap={2}
            colorPalette="gray"
            variant="pulse"
        />
    </VStack>
));

ReasonCardSkeleton.displayName = "ReasonCardSkeleton";

const ReasonCard = memo(({
    reason,
    lang,
    isLoading
}: {
    reason: { title: { en: string; ar: string }; description: { en: string; ar: string } };
    lang: string;
    isLoading: boolean;
}) => {
    if (isLoading) {
        return <ReasonCardSkeleton />;
    }

    return (
        <VStack
            p={8}
            borderRadius="8px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            maxW={{ base: "90vw", md: "230px" }}
            minH={{ base: "auto", md: "250px" }}
            bg="whiteAlpha.100"
            backdropFilter="blur(6px)"
            transition="transform 0.2s ease, background 0.2s ease"
            _hover={{ transform: "translateY(-4px)", bg: "whiteAlpha.200" }}
        >
            <Circle border="2px solid white" size="50px" bg="transparent">
                <FaCheck size="2rem" aria-hidden="true" />
            </Circle>
            <Text
                fontFamily="Cairo"
                fontWeight="400"
                fontSize="1.2rem"
                textAlign="center"
                lineHeight={1.3}
            >
                {lang === "ar" ? reason.title.ar : reason.title.en}
            </Text>
            <Text fontSize="1rem" textAlign="center" lineHeight={1.5}>
                {lang === "ar" ? reason.description.ar : reason.description.en}
            </Text>
        </VStack>
    );
});

ReasonCard.displayName = "ReasonCard";

export const Whyus = memo((Reasons: Props) => {
    const lang = useSelector(selectLanguage);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [contentMounted, setContentMounted] = useState(false);

    const imageSrc = `/${Reasons.image || "Whyus.webp"}`;

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
        // Delay content mount slightly for smoother transition
        setTimeout(() => setContentMounted(true), 100);
    }, []);

    const handleImageError = useCallback(() => {
        setImageError(true);
        setImageLoaded(true);
        setTimeout(() => setContentMounted(true), 100);
    }, []);

    const showGradient = !imageLoaded || imageError;
    const showSkeletons = !contentMounted;

    return (
        <VStack
            position="relative"
            width="100vw"
            style={{ contentVisibility: "auto" }}
            minH="70vh"
            justify="center"
            align="center"
            overflow="hidden"
            isolation="isolate"
        >
            {/* Optimized Background Image */}
            {!imageError && (
                <Box
                    position="absolute"
                    inset={0}
                    zIndex={0}
                    opacity={imageLoaded ? 1 : 0}
                    transition="opacity 0.5s ease-in-out"
                >
                    <Image
                        src={imageSrc}
                        alt=""
                        role="presentation"
                        objectFit="cover"
                        objectPosition="center"
                        w="100%"
                        h="100%"
                        loading="eager"
                        decoding="async"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                </Box>
            )}

            {/* Gradient Overlay */}
            <Box
                position="absolute"
                inset={0}
                bgGradient={
                    showGradient
                        ? "linear(to-b, gray.700, black)"
                        : "linear(to-b, blackAlpha.600, blackAlpha.800)"
                }
                zIndex={0}
                transition="background 0.5s ease-in-out"
            />

            {/* Content Container */}
            <VStack
                zIndex={1}
                width="100%"
                gap={8}
                py={8}
                px={4}
                opacity={showSkeletons ? 0.7 : 1}
                transition="opacity 0.3s ease-in-out"
            >
                {/* Title */}
                {showSkeletons ? (
                    <Skeleton
                        loading
                        height="3rem"
                        width={{ base: "80%", md: "400px" }}
                        colorPalette="gray"
                        variant="pulse"
                        borderRadius="md"
                    />
                ) : (
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: "2rem", md: "2.5rem" }}
                        color="white"
                        fontFamily={lang === "ar" ? "Cairo, sans-serif" : "Montserrat, sans-serif"}
                        textAlign="center"
                    >
                        {lang === "ar" ? Reasons.title.ar : Reasons.title.en}
                    </Text>
                )}

                {/* Description */}
                {showSkeletons ? (
                    <Stack gap={2} maxW={{ base: "90%", md: "70%", lg: "50%" }} width="100%">
                        <SkeletonText
                            loading
                            noOfLines={3}
                            gap={3}
                            colorPalette="gray"
                            variant="pulse"
                        />
                    </Stack>
                ) : (
                    <Text
                        maxW={{ base: "90%", md: "70%", lg: "50%" }}
                        fontSize={{ base: "1.2rem", md: "1.5rem" }}
                        textAlign="center"
                        fontWeight="300"
                        color="white"
                        lineHeight={1.6}
                    >
                        {lang === "ar" ? Reasons.description.ar : Reasons.description.en}
                    </Text>
                )}

                {/* Reasons List */}
                <HStack
                    align="stretch"
                    color="white"
                    flexDir={{ base: "column", md: "row" }}
                    justify="center"
                    flexWrap="wrap"
                    gap={4}
                    pt={4}
                >
                    {Reasons.Array.map((reason, index) => (
                        <ReasonCard
                            key={index}
                            reason={reason}
                            lang={lang}
                            isLoading={showSkeletons}
                        />
                    ))}
                </HStack>
            </VStack>
        </VStack>
    );
}, (prevProps, nextProps) => {
    return (
        prevProps.image === nextProps.image &&
        prevProps.title.en === nextProps.title.en &&
        prevProps.title.ar === nextProps.title.ar &&
        prevProps.Array.length === nextProps.Array.length
    );
});

Whyus.displayName = "Whyus";