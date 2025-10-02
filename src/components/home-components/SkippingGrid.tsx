import { VStack, SimpleGrid, GridItem, Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";

// Bilingual labels
const labels = [
    {
        en: "Smart Financial & Accounting Management",
        ar: "الإدارة المالية والمحاسبية الذكية",
    },
    {
        en: "Digital Transformation & Technology Solutions",
        ar: "حلول التحول الرقمي والتكنولوجيا",
    },
    {
        en: "Creative Marketing & Brand Identity",
        ar: "الهوية التسويقية والعلامة التجارية الإبداعية",
    },
    {
        en: "Business Consulting & Organizational Development",
        ar: "الاستشارات الإدارية وتطوير المؤسسات",
    },
    {
        en: "Creative Storytelling & Brand Strategy",
        ar: "سرد القصص الإبداعي واستراتيجية العلامة التجارية",
    },
];

// Styled box component with bilingual text
const StyledBox = ({
    label,
    // subtitle,
}: {
    label: string;
    // subtitle: string;
}) => (
    <Box
        w="10rem"
        h={{ base: "6rem", md: "8rem", lg: "10rem" }}
        borderRadius="25px"
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
        px={2}
    >
        {/* Background layer with blend effect */}
        <Box
            opacity={1}
            position="absolute"
            inset={0}
            bg="#226CFF"
            style={{ mixBlendMode: "multiply" }}
        />

        {/* Text layer unaffected by blend */}
        <Text zIndex={1} color="white" fontWeight="bold" fontSize="sm">
            {label}
        </Text>
        {/* <Text zIndex={1} color="whiteAlpha.900" fontSize="xs">
            {subtitle}
        </Text> */}
    </Box>
);

export function SkippingGrid() {
    const lang = useSelector(selectLanguage);

    const pattern = [
        [true, false, true], // Row 1
        [false, true, false], // Row 2
        [true, false, true], // Row 3
    ];

    let labelIndex = 0;

    return (
        <VStack
            w={{ base: "90%", lg: "40%" }}
            alignItems="center"
            justifyContent="center"
        >
            <SimpleGrid columns={3}>
                {pattern.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <GridItem key={`${rowIndex}-${colIndex}`}>
                            {cell ? (
                                <StyledBox
                                    label={
                                        lang === "en"
                                            ? labels[labelIndex].en
                                            : labels[labelIndex].ar
                                    }
                                    // subtitle={
                                    //     lang === "en"
                                    //         ? labels[labelIndex].ar
                                    //         : labels[labelIndex].en
                                    // }
                                />
                            ) : null}
                            {cell && labelIndex++}
                        </GridItem>
                    ))
                )}
            </SimpleGrid>
        </VStack>
    );
}
