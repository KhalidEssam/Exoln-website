import { useState, useEffect, memo } from "react";
import {
  VStack,
  HStack,
  Box,
  Text,
  Image,
  Spinner,
  Center,
  Skeleton
} from "@chakra-ui/react";
import { HeroSection } from "../components/home-components/HeroSection.tsx";
import { OurValues } from "@/components/home-components/OurValues.tsx";
import { OurServices } from "@/components/home-components/OurServices.tsx";
import { Whyus } from "@/components/home-components/WhyUs.tsx";
import { OurPartners } from "@/components/home-components/OurPartners.tsx";
import { type Props } from "@/components/home-components/WhyUs.tsx";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice.ts";

// Memoized Hero Background Component
const HeroBackground = memo(() => {
  const [patternLoaded, setPatternLoaded] = useState(false);

  return (
    <>
      {/* Pattern Image Layer */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={patternLoaded ? 1 : 0}
        transition="opacity 0.6s ease-in-out"
      >
        <Image
          src="./pattern.webp"
          alt=""
          role="presentation"
          objectFit="cover"
          objectPosition="center"
          w="100%"
          h="100%"
          transform="scaleX(-1)"
          loading="eager"
          decoding="async"
          onLoad={() => setPatternLoaded(true)}
        />
      </Box>

      {/* Fallback gradient while pattern loads */}
      {!patternLoaded && (
        <Box
          position="absolute"
          inset={0}
          zIndex={0}
          bgGradient="linear(to-br, gray.800, gray.900)"
        />
      )}

      {/* Overlay layer */}
      <Box
        position="absolute"
        inset={0}
        bg="blackAlpha.600"
        zIndex={1}
        opacity={patternLoaded ? 1 : 0.8}
        transition="opacity 0.6s ease-in-out"
      />
    </>
  );
});

HeroBackground.displayName = "HeroBackground";

// Memoized Blog Background Component
const BlogBackground = memo(() => {
  const [blogBgLoaded, setBlogBgLoaded] = useState(false);

  return (
    <>
      {/* Skeleton Loader */}
      <Skeleton
        loading={!blogBgLoaded}
        position="absolute"
        inset={0}
        zIndex={1}
        colorPalette="blue"
        variant="pulse"
      />

      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        zIndex={1}
        overflow="hidden"
        opacity={blogBgLoaded ? 1 : 0}
        transition="opacity 0.5s ease-in-out"
      >
        <Image
          src="./blog4.webp"
          alt=""
          role="presentation"
          objectFit="cover"
          w="100%"
          h="100%"
          loading="lazy"
          decoding="async"
          transform="scaleX(-1)"
          filter="blur(4px)"
          onLoad={() => setBlogBgLoaded(true)}
        />
      </Box>

      {/* Blend Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="#226CFF"
        style={{ mixBlendMode: "multiply" }}
        zIndex={2}
        opacity={blogBgLoaded ? 1 : 0.3}
        transition="opacity 0.5s ease-in-out"
      />
    </>
  );
});

BlogBackground.displayName = "BlogBackground";

// Memoized Blog Item Component
const BlogItem = memo(({
  imageSrc,
  title,
  date
}: {
  imageSrc: string;
  title: string;
  date: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <HStack w="100%" gap={4} align="center">
      <Box
        position="relative"
        w="25%"
        aspectRatio={4 / 3}
        borderRadius="md"
        overflow="hidden"
        flexShrink={0}
      >
        <Skeleton
          loading={!imageLoaded}
          w="100%"
          h="100%"
          position="absolute"
          inset={0}
          colorPalette="gray"
          variant="pulse"
        />
        <Image
          src={imageSrc}
          alt={title}
          objectFit="cover"
          w="100%"
          h="100%"
          borderRadius="md"
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          opacity={imageLoaded ? 1 : 0}
          transition="opacity 0.3s ease-in-out"
        />
      </Box>
      <VStack align="flex-start" flex={1} gap={1} textAlign="start">
        <Text
          w="100%"
          color="#226CFF"
          fontSize={{ base: "0.9rem", md: "1rem" }}
          fontWeight="500"
          lineHeight={1.3}
        >
          {title}
        </Text>
        <Text
          w="100%"
          color="#707070"
          fontSize={{ base: "0.8rem", md: "0.9rem" }}
        >
          {date}
        </Text>
      </VStack>
    </HStack>
  );
});

BlogItem.displayName = "BlogItem";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const lang = useSelector(selectLanguage);

  // Simulate loading images & content
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
    <VStack w="100vw" position="relative">
      {loading ? (
        <Center w="100%" h="100vh" bg="blackAlpha.800">
          <Spinner size="xl" color="blue.400" />
        </Center>
      ) : (
        <>
          {/* Hero Section with Optimized Background */}
          <HStack
            position="relative"
            top={0}
            width="100%"
            height={{ md: "100vh", lg: "70vh" }}
            overflow="hidden"
            isolation="isolate"
          >
            <HeroBackground />

            {/* Foreground content */}
            <Box position="relative" zIndex={2} w="100%">
              <HeroSection />
            </Box>
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
              gap={{ base: 6, md: 4 }}
            >
              {/* Left Column (Quote with Background) */}
              <VStack
                position="relative"
                w={{ base: "100%", md: "45%" }}
                h={{ base: "40vh", md: "50vh", lg: "55vh" }}
                overflow="hidden"
                align="center"
                justify="center"
                borderRadius="lg"
                isolation="isolate"
              >
                <BlogBackground />

                {/* Quote Content */}
                <VStack zIndex={3} w="100%" px={6} gap={2} >
                  <Text
                    color="white"
                    fontSize={{ base: "2rem", md: "3rem" }}
                    w={{ base: "100%", md: "70%" }}
                    textAlign={{ base: "center", md: "start" }}
                    fontWeight="bold"
                    alignSelf={{ base: "center", md: "flex-start" }}
                    lineHeight={0.8}
                  >
                    "
                  </Text>
                  <Text
                    color="white"
                    fontSize={{ base: "1.1rem", md: "1.8rem", lg: "2.2rem" }}
                    w={{ base: "100%", md: "85%" }}
                    textAlign={{ base: "center", md: "start" }}
                    fontWeight="bold"
                    lineHeight={1.3}
                    fontFamily={lang === "ar" ? "Cairo, sans-serif" : "Montserrat, sans-serif"}
                  >
                    {lang === "ar"
                      ? "وعدنا بسيط: أن نكون الشريك الذي ينمو معك، في كل خطوة على الطريق"
                      : "OUR PROMISE IS SIMPLE — TO BE THE PARTNER WHO GROWS WITH YOU, EVERY STEP OF THE WAY."}
                  </Text>
                  <Text
                    color="white"
                    fontSize={{ base: "2rem", md: "3rem" }}
                    textAlign={{ base: "center", md: "end" }}
                    fontWeight="bold"
                    w={{ base: "100%", md: "100%" }}
                    alignSelf={{ base: "center", md: "flex-start" }}
                    lineHeight={0.8}
                  >
                    "
                  </Text>
                </VStack>
              </VStack>

              {/* Right Column (Blog List) */}
              <VStack
                w={{ base: "100%", md: "45%" }}
                h={{ base: "auto", md: "50vh", lg: "55vh" }}
                overflow="auto"
                bg="#fff"
                p={8}
                gap={6}
                align="flex-start"
                justify="flex-start"
                textAlign="start"
                borderRadius="lg"
                boxShadow="md"
              >
                <Text
                  w="100%"
                  fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
                  fontWeight="bold"
                  color="#000"
                  mb={2}
                  fontFamily={lang === "ar" ? "Cairo, sans-serif" : "Montserrat, sans-serif"}
                >
                  {lang === "ar" ? "منشورات المدونة" : "Blog & News"}
                </Text>

                {/* Blog Items */}
                <BlogItem
                  imageSrc="./blog3.webp"
                  title="SAP Analytics Innovation Workshop"
                  date="21 Sep, 2025"
                />
                <BlogItem
                  imageSrc="./blog2.webp"
                  title="SAP Analytics Innovation Workshop"
                  date="21 Sep, 2025"
                />
                <BlogItem
                  imageSrc="./blog1.webp"
                  title="SAP Analytics Innovation Workshop"
                  date="21 Sep, 2025"
                />
              </VStack>
            </HStack>
          </VStack>
        </>
      )}
    </VStack>
  );
};