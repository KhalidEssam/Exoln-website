import { VStack, HStack, Box } from "@chakra-ui/react";
import { HeroSection } from "../components/HeroSection.tsx";
export const Home = () => {
  return (
    <VStack w={"100vw"} gap={4}>

      <HStack
        position="relative"
        top={0}
        width="100%"
        height="100vh"
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
          transform: "scaleX(-1)",  // 🔥 flips only the background
        }}
      >
        {/* your content here */}
      </HStack>
      <Box className="overlay" top={0} width={"100%"} bgSize={"cover"} bgPos={"center"} height={"100vh"} >
        <Box mt={"15rem"}/>
        <HeroSection />        
      </Box>
    </VStack>
  )
}