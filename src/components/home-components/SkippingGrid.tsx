import { VStack, SimpleGrid, GridItem, Box, Text } from "@chakra-ui/react";

const StyledBox = ({ label }: { label: string }) => (
    <Box
        w="10rem"
        h={{ base: "6rem", md: "8rem", lg: "10rem" }}
        borderRadius="25px"
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
        {/* Background layer with blend effect */}
        <Box
            opacity={0.7}
            position="absolute"
            inset={0}
            bg="#226CFF"
            style={{ mixBlendMode:"color-burn" }}
        />

        {/* Text layer unaffected by blend */}
        <Text zIndex={1} color="white" fontWeight="bold" fontSize="lg">
            {label}
        </Text>
    </Box>
);



// Texts for the 5 visible boxes
const labels = ["Smart Financial & Accounting Management", "Digital Transformation & Technology Solutions",
    "Creative Marketing & Brand Identity", "Business Consulting & Organizational Development",
    "Creative Storytelling & Brand Strategy"];

export function SkippingGrid() {
    const pattern = [
        [true, false, true], // Row 1
        [false, true, false], // Row 2
        [true, false, true], // Row 3
    ];

    let labelIndex = 0;


    return (
        <VStack w={{ base: "100%", lg: "50%" }} alignItems={"center"} justifyContent={"center"}>
            <SimpleGrid columns={3}>
                {pattern.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <GridItem key={`${rowIndex}-${colIndex}`}>
                            {cell ? <StyledBox label={labels[labelIndex++]} /> : null}
                        </GridItem>
                    ))
                )}
            </SimpleGrid>
        </VStack>
    );
}
