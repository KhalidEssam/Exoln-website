import { VStack, HStack, Box, Text, Image } from "@chakra-ui/react";
import { HeroSection } from "../components/home-components/HeroSection.tsx";
import { OurValues } from "@/components/home-components/OurValues.tsx";
import { OurServices } from "@/components/home-components/OurServices.tsx";
import { Whyus } from "@/components/home-components/WhyUs.tsx";
import { OurPartners } from "@/components/home-components/OurPartners.tsx";
import { type Props } from "@/components/home-components/WhyUs.tsx";
export const Home = () => {

  const Reasons: Props = {
    title: "WHY CHOOSE EXOLN",
    description: "At Exoln, we redefine partnership by delivering more than just services – we deliver integrated results that drive sustainable growth.",
    Array: [
      {
        title: "ONE INTEGRATED ECOSYSTEM",
        description: "Five specialized divisions providing a unified strategy."
      },
      {
        title: "TAILORED SOLUTIONS",
        description: "Custom strategies for your unique challenges."
      },
      {
        title: "MEASURABLE IMPACT",
        description: "Focus on tangible outcomes and clear ROI."
      },
      {
        title: "SEAMLESS COLLABORATION",
        description: "Smooth, transparent partnership throughout."
      },
      {
        title: "TRUSTED PARTNERSHIP",
        description: "Relationships built on reliability and quality."
      }
    ]
  }

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
          // zIndex: 0, // background
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
        // zIndex={1}
        />

        {/* Foreground content */}
        <Box w="100%" mt={{ base: "8rem", md: "12rem" }} mb={{ base: "5rem", md: 0 }}>
          <HeroSection />
        </Box>
      </HStack>

      <VStack w={"100%"} h={"100%"} p={8} gap={8} bgColor={"#F5F5F5"}>
        <OurValues />
        <OurServices />
        <Whyus title={Reasons.title} description={Reasons.description} Array={Reasons.Array} />
        <OurPartners />
        <HStack
          align="stretch"
          w="90%"
          justify="space-evenly"
          flexDir={{ base: "column", md: "row" }}
        >
          {/* Left Column (Image + Overlay + Text) */}
          <VStack
            position="relative"
            w={{ base: "100%", md: "45%" }}
            h={{ base: "40vh", md: "50vh", lg: "55vh" }}
            overflow="hidden"
            align="center"
            justify="center"
          >
            {/* Background Image */}
            <Box
              position="absolute"
              inset={0}
              bgImage="url(./blog4.jpg)"
              bgSize="cover"
              bgPos="center"
              transform="scaleX(-1)"
              zIndex={1}
              filter="blur(4px)"
            />

            {/* Blend Overlay */}
            <Box
              position="absolute"
              inset={0}
              bg="#226CFF"
              style={{ mixBlendMode: "multiply" }}
              zIndex={2}
            />
            <Text zIndex={3}
              color="white"
              fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
              justifyContent={"flex-start"}
              w={{ base: "100%", md: "80%" }}
              textAlign={{ base: "center", md: "start" }}
              px={6}
              fontWeight="bold">
              "
            </Text>
            {/* Text Above Overlay */}
            <Text
              zIndex={3}
              color="white"
              fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
              w={{ base: "100%", md: "80%" }}

              textAlign={{ base: "center", md: "start" }}
              px={6}
              fontWeight="bold"
            >

              OUR PROMISE IS SIMPLE — TO BE THE PARTNER WHO GROWS WITH YOU,
              EVERY STEP OF THE WAY.
            </Text>
            <Text zIndex={3}
              color="white"
              fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
              textAlign={{ base: "center", md: "end" }}
              px={6}
              fontWeight="bold"
              w={{ base: "100%", md: "80%" }}
            >
              "
            </Text>
          </VStack>

          {/* Right Column (Blog Section) */}
          <VStack
            w={{ base: "100%", md: "45%" }}
            h={{ base: "auto", md: "50vh", lg: "55vh" }}
            overflow="hidden"
            bg="#fff"
            p={8}
            gap={4}
            align="flex-start"
            justify="flex-start"
            textAlign="start"

          >
            <Text
              w="100%"
              fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
              fontWeight="bold"
              color="#000"
            >
              Blog & News
            </Text>

            {/* Blog Items */}
            <HStack w="100%" gap={4}>
              <Image src="./blog3.jpg" w="25%" objectFit="cover" borderRadius="md" />
              <VStack textAlign="start">
                <Text w={"100%"} flex={1} color={"#226CFF"}>SAP Analytics Innovation Workshop</Text>
                <Text w={"100%"} flex={1} color={"#707070"}>21 Sep, 2025</Text>
              </VStack>
            </HStack>

            <HStack w="100%" gap={4}>
              <Image src="./blog2.jpg" w="25%" objectFit="cover" borderRadius="md" />
              <VStack textAlign="start">
                <Text w={"100%"} flex={1} color={"#226CFF"}>SAP Analytics Innovation Workshop</Text>
                <Text w={"100%"} flex={1} color={"#707070"}>21 Sep, 2025</Text>
              </VStack>
            </HStack>

            <HStack w="100%" gap={4}>
              <Image src="./blog1.jpg" w="25%" objectFit="cover" borderRadius="md" />
              <VStack textAlign="start">
                <Text w={"100%"} flex={1} color={"#226CFF"}>SAP Analytics Innovation Workshop</Text>
                <Text w={"100%"} flex={1} color={"#707070"}>21 Sep, 2025</Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>


      </VStack>
    </VStack>
  )
}