import { VStack, HStack, Box, Text } from "@chakra-ui/react";

export const Blog = () => {
  return (
    <VStack gap={4}>

      <HStack bgImage={"url(./pattern.png)"} top={0} width={"100%"} bgSize={"cover"} bgPos={"center"} height={"100vh"}>
        <Box
          className="overlay"
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100vh"
          bg="blackAlpha.600" // or your glaze color
          zIndex={0}
        />
        <Box w={{ base: "100%", md: "50%" }}
          fontFamily={`'Montserrat', 'Regular'`} textAlign={"start"} p={16}
          zIndex={1}
          mt={{ base: "8rem", md: "20rem" }} mb={{ base: "5rem", md: 0 }}>
          <Text
            fontSize={{ base: "1.5rem", xl: "2.5rem", md: "2rem" }}
            fontWeight="semibold"
            color="white"
            textAlign="start"
          >
            INSIGHTS <br /> BEYOND SERVICES
          </Text>
          <Text fontSize={{ base: "1rem", xl: "1.5rem", md: "1.5rem" }} fontWeight={"bold"} color={"white"}> Our blog brings strategy and creativity together — sharing fresh ideas and stories across finance, branding, technology, and more, with insights that inspire growth and spark innovation.</Text>
        </Box>
      </HStack>
    </VStack>
  )
}