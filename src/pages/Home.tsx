import { VStack, HStack, Box } from "@chakra-ui/react";
import { HeroSection } from "../components/home-components/HeroSection.tsx";
import { OurValues } from "@/components/home-components/OurValues.tsx";
import { OurServices } from "@/components/home-components/OurServices.tsx";
import { Whyus } from "@/components/home-components/WhyUs.tsx";
import { OurPartners } from "@/components/home-components/OurPartners.tsx";
export const Home = () => {
  return (
    <VStack w={"100vw"} >
      <HStack
        position="relative"
        top={0}
        width="100%"
        height={{ md: "150vh", lg: "120vh" }}
        overflow="hidden"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgImage: "url(./pattern.png)",
          bgSize: "cover",
          bgPos: "center",
          transform: "scaleX(-1)",
          zIndex: 0, // background
        }}
      >
        {/* Overlay layer */}
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

        {/* Foreground content */}
        <Box w="100%" zIndex={2} mt={{ base: "8rem", md: "12rem" }} mb={{ base: "5rem", md: 0 }}>
          <HeroSection />
        </Box>
      </HStack>

      <VStack w={"100%"} h={"100%"} p={8} gap={8} bgColor={"#F5F5F5"}>
        <OurValues />
        <OurServices />
        <Whyus />
        <OurPartners />
      </VStack>
    </VStack>
  )
}