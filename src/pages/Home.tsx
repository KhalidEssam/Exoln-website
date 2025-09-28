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
        }}
      >
        {/* your content here */}
      </HStack>
      <Box className="overlay" top={0} width={"100%"} height={{ md: "150vh", lg: "120vh" }}
      >
        <Box mt={"15rem"} />
        <HeroSection />
      </Box>
      <VStack w={"100%"} h={"100%"} p={8} gap={8} bgColor={"#F5F5F5"}>
        <OurValues />
        <OurServices />
        <Whyus />
        <OurPartners />
      </VStack>
    </VStack>
  )
}