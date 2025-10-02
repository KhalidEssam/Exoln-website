import { useState, useEffect } from "react";
import { VStack, HStack, Box, Text, Image, Spinner, Center } from "@chakra-ui/react";
import { HeroSection } from "../components/home-components/HeroSection.tsx";
import { OurValues } from "@/components/home-components/OurValues.tsx";
import { OurServices } from "@/components/home-components/OurServices.tsx";
import { Whyus } from "@/components/home-components/WhyUs.tsx";
import { OurPartners } from "@/components/home-components/OurPartners.tsx";
import { type Props } from "@/components/home-components/WhyUs.tsx";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice.ts";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading images & content
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake loading
    return () => clearTimeout(timer);
  }, []);
  const lang = useSelector(selectLanguage)


  const Reasons: Props = {
    title: {
      en: "WHY CHOOSE EXOLN",
      ar: "لماذا تختار إكسولن",
    },
    description: {
      en: "At Exoln, we redefine partnership by delivering more than just services – we deliver integrated results that drive sustainable growth.",
      ar: "في إكسولن، نعيد تعريف الشراكة من خلال تقديم أكثر من مجرد خدمات – نحن نقدم نتائج متكاملة تدفع نحو نمو مستدام.",
    },
    Array: [
      {
        title: {
          en: "ONE INTEGRATED ECOSYSTEM",
          ar: "منظومة متكاملة واحدة",
        },
        description: {
          en: "Five specialized divisions providing a unified strategy.",
          ar: "خمس وحدات متخصصة تقدم استراتيجية موحدة.",
        },
      },
      {
        title: {
          en: "TAILORED SOLUTIONS",
          ar: "حلول مخصصة",
        },
        description: {
          en: "Custom strategies for your unique challenges.",
          ar: "استراتيجيات مخصصة لتحدياتك الفريدة.",
        },
      },
      {
        title: {
          en: "MEASURABLE IMPACT",
          ar: "أثر قابل للقياس",
        },
        description: {
          en: "Focus on tangible outcomes and clear ROI.",
          ar: "تركيز على نتائج ملموسة وعائد استثمار واضح.",
        },
      },
      {
        title: {
          en: "SEAMLESS COLLABORATION",
          ar: "تعاون سلس",
        },
        description: {
          en: "Smooth, transparent partnership throughout.",
          ar: "شراكة سلسة وشفافة في جميع المراحل.",
        },
      },
      {
        title: {
          en: "TRUSTED PARTNERSHIP",
          ar: "شراكة موثوقة",
        },
        description: {
          en: "Relationships built on reliability and quality.",
          ar: "علاقات مبنية على الموثوقية والجودة.",
        },
      },
    ],
  };

  return (
    <VStack w="100vw">
      {loading ? (
        // 👇 Fullscreen centered Spinner
        <Center w="100%" h="100vh" bg="blackAlpha.800">
          <Spinner size="xl" color="blue.400" />
        </Center>
      ) : (
        <>
          {/* Hero Section with overlay */}
          <HStack
            position="relative"
            top={0}
            width="100%"
            height={{ md: "100vh", lg: "100vh" }}
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgImage: "url(./pattern.webp)",
              bgSize: "cover",
              bgPos: "center",
              transform: "scaleX(-1)",
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
              bg="blackAlpha.600"
            />

            {/* Foreground content */}
            <HeroSection />
          </HStack>

          {/* Content sections */}
          <VStack w="100%" h="100%" p={8} gap={8} bgColor="#F5F5F5">
            <OurValues />
            <OurServices />
            <Whyus
              title={Reasons.title}
              description={Reasons.description}
              Array={Reasons.Array}
            />
            <OurPartners />

            {/* Blog Section */}
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
                <Box position="absolute" inset={0} zIndex={1} overflow="hidden">
                  <Image
                    src="./blog4.webp"
                    alt="Blog Background"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    loading="lazy"
                    transform="scaleX(-1)"
                    filter="blur(4px)"
                  />
                </Box>

                {/* Blend Overlay */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="#226CFF"
                  style={{ mixBlendMode: "multiply" }}
                  zIndex={2}
                />

                {/* Quotes + Text */}
                <Text
                  zIndex={3}
                  color="white"
                  fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
                  justifyContent="flex-start"
                  w={{ base: "100%", md: "70%" }}
                  textAlign={{ base: "center", md: "start" }}
                  px={6}
                  fontWeight="bold"
                >
                  "
                </Text>
                <Text
                  zIndex={3}
                  color="white"
                  fontSize={{ base: "1rem", md: "1.8rem", lg: "2.5rem" }}
                  w={{ base: "100%", md: "70%" }}
                  textAlign={{ base: "center", md: "start" }}
                  px={6}
                  fontWeight="bold"
                >
                  {lang == "ar" ? "- وعدنا بسيط أن نكون الشريك الذي ينمو معك، في كل خطوة على الطريق" :
                    "OUR PROMISE IS SIMPLE — TO BE THE PARTNER WHO GROWS WITH YOU, EVERY STEP OF THE WAY."}
                </Text>
                <Text
                  zIndex={3}
                  color="white"
                  fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
                  textAlign={{ base: "center", md: "end" }}
                  px={6}
                  fontWeight="bold"
                  w={{ base: "100%", md: "70%" }}
                >
                  "
                </Text>
              </VStack>

              {/* Right Column (Blog List) */}
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
                    {lang === "ar" ? "منشورات المدونة" : "Blog & News"}
                </Text>

                {/* Blog Items */}
                <HStack w="100%" gap={4}>
                  <Image
                    src="./blog3.webp"
                    w="25%"
                    objectFit="cover"
                    borderRadius="md"
                    loading="lazy"
                  />
                  <VStack textAlign="start">
                    <Text w="100%" flex={1} color="#226CFF">
                      SAP Analytics Innovation Workshop
                    </Text>
                    <Text w="100%" flex={1} color="#707070">
                      21 Sep, 2025
                    </Text>
                  </VStack>
                </HStack>

                <HStack w="100%" gap={4}>
                  <Image
                    src="./blog2.webp"
                    w="25%"
                    objectFit="cover"
                    borderRadius="md"
                    loading="lazy"
                  />
                  <VStack textAlign="start">
                    <Text w="100%" flex={1} color="#226CFF">
                      SAP Analytics Innovation Workshop
                    </Text>
                    <Text w="100%" flex={1} color="#707070">
                      21 Sep, 2025
                    </Text>
                  </VStack>
                </HStack>

                <HStack w="100%" gap={4}>
                  <Image
                    src="./blog1.webp"
                    w="25%"
                    objectFit="cover"
                    borderRadius="md"
                    loading="lazy"
                  />
                  <VStack textAlign="start">
                    <Text w="100%" flex={1} color="#226CFF">
                      SAP Analytics Innovation Workshop
                    </Text>
                    <Text w="100%" flex={1} color="#707070">
                      21 Sep, 2025
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </>
      )}
    </VStack>
  );
};
