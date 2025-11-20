import { selectLanguage } from "@/store/slices/languageSlice";
import { VStack, Box, Text, HStack, Spinner, Center, Button, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FaBell } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { dummyArticles as articles } from "@/pages/Blog";
import mammoth from "mammoth";
// import { Helmet } from "react-helmet-async";
import { SEO } from "../SEO";

export const ArticleDetails = () => {
    const lang = useSelector(selectLanguage);
    const [loading, setLoading] = useState(true);
    const [htmlContent, setHtmlContent] = useState<string>("");

    const id = window.location.pathname.split("/")[2];
    let chosenArticle = articles.find((article) => article.id == Number(id));
    if (!chosenArticle) {
        chosenArticle = articles.find((article) => article.slug === id);
    }

    const contentUrl = chosenArticle?.contentUrl?.[lang];
    const seo = chosenArticle?.seo?.[lang]; // 👈 Add SEO data in your dummyArticles object

    useEffect(() => {
        const loadDocx = async () => {
            if (!contentUrl) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(contentUrl);
                if (!response.ok) throw new Error("Failed to fetch document");
                const arrayBuffer = await response.arrayBuffer();

                const { value } = await mammoth.convertToHtml({ arrayBuffer });
                setHtmlContent(value);
            } catch (err) {
                console.error("Error loading document:", err);
                setHtmlContent(
                    `<p style="color:red;">${lang === "ar"
                        ? "حدث خطأ أثناء تحميل المقال."
                        : "An error occurred while loading the article."
                    }</p>`
                );
            } finally {
                setLoading(false);
            }
        };

        loadDocx();
    }, [contentUrl, lang]);

    return (
        <>
            {/* 🌐 SEO META TAGS */}
            {seo && (
                // <Helmet>
                //     <title>{seo.title}</title>
                //     <meta name="description" content={seo.description} />
                //     <meta name="keywords" content={seo.keywords?.join(", ")} />
                //     <meta property="og:title" content={seo.title} />
                //     <meta property="og:description" content={seo.description} />
                //     <meta property="og:image" content={chosenArticle?.image} />
                //     <meta property="og:type" content="article" />
                //     <meta name="twitter:title" content={seo.title} />
                //     <meta name="twitter:description" content={seo.description} />
                //     <meta name="twitter:image" content={chosenArticle?.image} />
                // </Helmet>
                <SEO title={seo.title} description={seo.description} keywords={seo.keywords.join(", ")} />
            )}
            {console.log(seo)}

            <VStack w="100vw" align="start" textAlign="start" gap="2rem">

                <Center w="100%" bg={"gray.500"}>
                    <Box
                        w={{ base: "80%", md: "70%", xl: "50%" }}
                        // maxW="920px"
                        mt={{ base: "5rem", xl: "8rem" }}
                        mb={{ base: "5rem", xl: "3rem" }}
                    >
                        <Image
                            src="/الخدمات-الطبية-في-القاهرة-الجديدة-1.webp"
                            alt=""
                            borderRadius="10px"
                            w="100%"
                            h="auto"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </Box>
                </Center>


                <Center w="90vw" m="2rem" flexDir="column" gap="2rem">
                    <HStack w="100%" justifyContent="space-between">
                        <Text
                            color="rgba(46, 54, 81, 1)"
                            fontSize={{ base: "1.25rem", md: "1.5rem", lg: "2rem" }}
                        >
                            {lang === "en" ? chosenArticle?.title.en : chosenArticle?.title.ar}
                        </Text>
                        <Text
                            color="rgba(95, 97, 102, 1)"
                            fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
                        >
                            {chosenArticle?.date}
                        </Text>
                    </HStack>

                    {/* 🧩 Main Content */}
                    <VStack minH="70vh" w="100%">
                        {loading ? (
                            <Center w="100%" h="70vh">
                                <Spinner size="xl" />
                            </Center>
                        ) : htmlContent ? (
                            <Box
                                w="100%"
                                p={4}
                                bg="white"
                                borderRadius="md"
                                boxShadow="sm"
                                fontFamily={
                                    lang === "ar"
                                        ? `'Cairo', sans-serif`
                                        : `'Montserrat', sans-serif`
                                }
                                fontSize={{ base: "1rem", md: "1.1rem" }}
                                lineHeight="1.8"
                                dir={lang === "ar" ? "rtl" : "ltr"}
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                        ) : (
                            <Text fontSize={{ base: "1rem", md: "1.1rem" }}>
                                {lang === "en"
                                    ? chosenArticle?.description.en
                                    : chosenArticle?.description.ar}
                            </Text>
                        )}
                    </VStack>

                    {/* 📩 Subscription CTA */}
                    <HStack w="100%" justifyContent="space-between" flexWrap="wrap">
                        <Text
                            w={{ base: "100%", md: "60%" }}
                            color="rgba(46, 54, 81, 1)"
                            fontSize={{ base: "1.25rem", md: "1.5rem" }}
                        >
                            {lang === "en"
                                ? "Do you need help? Subscribe to our plans now"
                                : "هل تحتاج لمساعدة ؟ اشترك في باقاتنا الآن"}
                        </Text>

                        <Button
                            bgColor="rgba(90, 119, 187, 1)"
                            color="white"
                            borderRadius="2xl"
                            _hover={{ bg: "rgba(77, 104, 166, 1)" }}
                            onClick={() => window.open("https://exoln.com/", "_blank")}
                        >
                            <FaBell style={{ marginInlineEnd: "0.5rem" }} />
                            {lang === "en" ? "Subscribe Now" : "التفاصيل والاشتراك"}
                        </Button>
                    </HStack>
                </Center>
            </VStack>
        </>
    );
};
