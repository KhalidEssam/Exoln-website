import { ArticleList } from "@/components/blog-components/ArticleList";
import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import type { articleProbs } from "@/types/types";

export const dummyArticles: articleProbs[] = [
  {
    id: 1,
    subtitle: { en: "Business Growth", ar: "نمو الأعمال" },
    title: { en: "How to Scale Your Startup", ar: "كيفية توسيع نطاق شركتك الناشئة" },
    description: {
      en: "Learn proven strategies to scale your startup effectively while maintaining efficiency and culture.",
      ar: "تعرف على استراتيجيات مثبتة لتوسيع نطاق شركتك الناشئة مع الحفاظ على الكفاءة والثقافة."
    },
    image: "/blog1.webp",
    date: "2025-09-01",
    featured: true,
    ref: "how-to-scale-your-startup"
  },
  {
    id: 2,
    title: { en: "Digital Transformation in 2025", ar: "التحول الرقمي في 2025" },
    description: {
      en: "Explore how AI and automation are reshaping industries worldwide.",
      ar: "اكتشف كيف يعيد الذكاء الاصطناعي والأتمتة تشكيل الصناعات حول العالم."
    },
    image: "/blog2.webp",
    date: "2025-08-15",
    ref: "digital-transformation-2025"
  },
  {
    id: 3,
    subtitle: { en: "Leadership", ar: "القيادة" },
    title: { en: "Top 5 Traits of Successful Leaders", ar: "أفضل 5 سمات للقادة الناجحين" },
    description: {
      en: "Strong leaders share common traits that inspire teams and drive innovation.",
      ar: "يشترك القادة الأقوياء في سمات مشتركة تلهم الفرق وتقود الابتكار."
    },
    image: "/blog3.webp",
    date: "2025-07-30",
    featured: false,
    ref: "top-5-traits-leaders"
  },
  {
    id: 4,
    title: { en: "Sustainable Business Practices", ar: "ممارسات الأعمال المستدامة" },
    description: {
      en: "Companies adopting green initiatives are gaining both profit and brand trust.",
      ar: "الشركات التي تعتمد مبادرات خضراء تحقق الربح وثقة العلامة التجارية."
    },
    image: "/blog1.webp",
    date: "2025-06-20",
    ref: "sustainable-business"
  },
  {
    id: 5,
    subtitle: { en: "Innovation", ar: "الابتكار" },
    title: { en: "The Future of Remote Work", ar: "مستقبل العمل عن بُعد" },
    description: {
      en: "Remote work is evolving with new technologies, creating hybrid opportunities.",
      ar: "يتطور العمل عن بُعد مع التقنيات الجديدة، مما يخلق فرصًا هجينة."
    },
    image: "/blog2.webp",
    date: "2025-05-10",
    featured: true,
    ref: "future-of-remote-work"
  },
  {
    id: 6,
    subtitle: { en: "Innovation", ar: "الابتكار" },
    title: { en: "The Future of Remote Work", ar: "مستقبل العمل عن بُعد" },
    description: {
      en: "Remote work is evolving with new technologies, creating hybrid opportunities.",
      ar: "يتطور العمل عن بُعد مع التقنيات الجديدة، مما يخلق فرصًا هجينة."
    },
    image: "/blog2.webp",
    date: "2025-05-10",
    featured: true,
    ref: "future-of-remote-work"
  }
];
export const Blog = () => {
  return (
    <VStack gap={4}>

      <HStack bgImage={"url(./pattern.webp)"} top={0} width={"100%"} bgSize={"cover"} bgPos={"center"} height={"100vh"}>
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
        <Box w={{ base: "100%", md: "80%" }}
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
          <Text fontSize={{ base: "1rem", xl: "1.3rem", md: "1.2rem" }}
            fontWeight={"bold"}
            w={{ base: "100%", md: "80%" }}
            color={"white"}> Our blog brings strategy and creativity together — sharing fresh ideas and stories across finance, branding, technology, and more, with insights that inspire growth and spark innovation.</Text>
        </Box>
      </HStack>
      <VStack w={{ base: "100%", md: "90%" }}>
        <Text w={{ base: "90%", md: "100%" }} textTransform={"uppercase"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2.5rem" }} textAlign={"start"} fontFamily={`'Montserrat', 'Regular'`} fontWeight="bold" mt={{ base: "2rem", lg: "3rem" }} mb={{ base: "1rem", lg: "2rem" }}>
          recent blog posts
        </Text>

        <ArticleList articles={dummyArticles} />
      </VStack>
    </VStack>
  )
}