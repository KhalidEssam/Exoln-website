import { useState, useEffect, memo } from "react";
import {
    VStack,
    HStack,
    Box,
    Text,
    Image,
    Spinner,
    Center,
} from "@chakra-ui/react";
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
                    src="./Whyus.webp"
                    alt=""
                    role="presentation"
                    objectFit="cover"
                    objectPosition="center"
                    w="100%"
                    h="100%"
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

export const WorkShop = () => {
    const [loading, setLoading] = useState(true);
    const lang = useSelector(selectLanguage);
    const heroTitle = lang === "ar" ? "احجز مكانك " : "Book your spot now";
    const heroSubTitle = lang === "ar" ? "ورشة المتاجر الالكترونية" : "An e-commerce workshop";
    // Simulate loading images & content
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <VStack w="100vw" position="relative" bg={"#f5f5f5"}>
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
                            <VStack mt={{ base: "6rem", md: "4rem", lg: "3rem" }} mb={{ base: "6rem", md: "4rem", lg: "3rem" }}>
                                <HStack color={"white"} justify={"space-between"} align={"stretch"}
                                    flexDir={{ base: "column", lg: "row" }}
                                    width={"95%"} height={"100%"}>
                                    <VStack justify={"center"} style={{ contentVisibility: "auto" }} // 👈 huge perf boost
                                        zIndex={1} alignItems={{ base: "center", lg: "flex-start" }} w={{ base: "100%", lg: "45%" }} gap={4}>
                                        <Text
                                            fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem", xl: "1.5rem" }}
                                            fontWeight={"500"}
                                            fontFamily={lang === "ar" ? `'Cairo', sans-serif` : `'Montserrat', 'Regular'`}
                                            lineHeight={"100%"}
                                            textAlign={{ base: "center", lg: "start" }}
                                        >
                                            {heroTitle}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem", xl: "3.5rem" }}
                                            fontWeight={"700"}
                                            lineHeight={"150%"}
                                            color={"#FFFFFF"}
                                            textAlign={{ base: "center", lg: "start" }}>
                                            {heroSubTitle}
                                        </Text>
                                    </VStack >

                                </HStack>
                            </VStack>
                        </Box>
                    </HStack>

                    {/* Content sections */}
                    <VStack w="100%" h="100%" p={{ base: "1rem", md: "2rem", lg: "2rem" }} gap={8} bgColor="#F5F5F5">
                        <VStack
                            w={{ base: "95%", md: "90%", xl: "90%", "2xl": "70%" }}
                            marginTop={{ base: "-20%", sm: "-10%", md: "-45%", lg: "-15%", "2xl": "-15%" }}
                            zIndex={1}
                            borderRadius={"md"} boxShadow={"md"}
                            bgColor="rgba(34, 108, 255, 1)"
                            gap={8}
                            p={{ base: "4", md: "4", lg: "8" }}
                            alignItems="center"
                        >
                            <HStack justifyContent={"space-between"} flexDir={{ base: "column", lg: "row" }} w={"100%"} gap={8}
                                align={"stretch"}>
                                {/* Image with Blur Overlay */}
                                <Box position="relative" w={{ base: "100%", lg: "40%" }} h={"100%"}>
                                    <Image
                                        src="./Rectangle 1.png"
                                        // p={8}
                                        w={"100%"}
                                        h={"100%"}
                                        alt=""
                                        loading="eager"
                                        decoding="async"
                                    />
                                    {/* Blur Overlay */}
                                    <Box
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        right={0}
                                        bottom={0}
                                        bg="rgba(34, 108, 255, 0.15)"
                                        backdropFilter="blur(4px)"
                                        // WebkitBackdropFilter="blur(6px)" // Safari support
                                        zIndex={1}
                                        pointerEvents="none" // Allow clicks to pass through
                                    />
                                </Box>
                                <VStack textAlign="start" w={{ base: "100%", lg: "60%" }} gap={6} color={"#FFFFFF"}>

                                    <Text fontFamily={lang === "ar" ? "'Cairo', sans-serif" : "'Montserrat', 'Regular'"}
                                        fontWeight={"bold"} w={"100%"} fontSize={{ base: "1.75rem", lg: "2.5rem" }}>
                                        {lang === "ar" ? "من فهم جمهورك إلى مضاعفة المبيعات" : "From Understanding Your Audience to Doubling Sales"}
                                    </Text>
                                    <Text fontSize={"1.5rem"} w={"100%"} fontFamily={lang === "ar" ? "'Cairo', sans-serif" : "'Montserrat', 'Regular'"} >
                                        {lang === "ar" ? "كيف تنجح بمتجرك الإلكتروني على سلة أو زد" : "How to succeed with your e-commerce store"}
                                    </Text>
                                    <HStack w={"100%"} minH={"3rem"}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0001 2.66669C23.3641 2.66669 29.3334 8.63602 29.3334 16C29.3334 23.364 23.3641 29.3334 16.0001 29.3334C8.63608 29.3334 2.66675 23.364 2.66675 16C2.66675 8.63602 8.63608 2.66669 16.0001 2.66669ZM16.0001 8.00002C15.6465 8.00002 15.3073 8.1405 15.0573 8.39054C14.8072 8.64059 14.6667 8.97973 14.6667 9.33335V16C14.6668 16.3536 14.8073 16.6927 15.0574 16.9427L19.0574 20.9427C19.3089 21.1856 19.6457 21.32 19.9953 21.3169C20.3449 21.3139 20.6793 21.1737 20.9265 20.9264C21.1737 20.6792 21.3139 20.3448 21.317 19.9952C21.32 19.6456 21.1856 19.3088 20.9427 19.0574L17.3334 15.448V9.33335C17.3334 8.97973 17.1929 8.64059 16.9429 8.39054C16.6928 8.1405 16.3537 8.00002 16.0001 8.00002Z" fill="white" />
                                        </svg>

                                        <Text width="50%" fontSize={"2rem"} color={"white"}> 07:00 مساء - 9:00 مساء</Text>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4867 29.0813C14.2947 29.748 15.1373 30.3573 16 30.952C16.8645 30.3652 17.7031 29.741 18.5133 29.0813C19.864 27.9723 21.1351 26.7698 22.3173 25.4826C25.0427 22.5026 28 18.1826 28 13.3333C28 11.7575 27.6896 10.197 27.0866 8.74111C26.4835 7.2852 25.5996 5.96233 24.4853 4.84803C23.371 3.73373 22.0481 2.84982 20.5922 2.24676C19.1363 1.6437 17.5759 1.33331 16 1.33331C14.4241 1.33331 12.8637 1.6437 11.4078 2.24676C9.95189 2.84982 8.62902 3.73373 7.51472 4.84803C6.40042 5.96233 5.5165 7.2852 4.91345 8.74111C4.31039 10.197 4 11.7575 4 13.3333C4 18.1826 6.95733 22.5013 9.68267 25.4826C10.8648 26.7702 12.136 27.9718 13.4867 29.0813ZM16 17.6666C14.8507 17.6666 13.7485 17.2101 12.9359 16.3974C12.1232 15.5848 11.6667 14.4826 11.6667 13.3333C11.6667 12.184 12.1232 11.0818 12.9359 10.2692C13.7485 9.45653 14.8507 8.99998 16 8.99998C17.1493 8.99998 18.2515 9.45653 19.0641 10.2692C19.8768 11.0818 20.3333 12.184 20.3333 13.3333C20.3333 14.4826 19.8768 15.5848 19.0641 16.3974C18.2515 17.2101 17.1493 17.6666 16 17.6666Z" fill="white" />
                                        </svg>

                                        <Box width={"40%"}>
                                            <Text width="50%" fontSize={"2rem"} color={"white"}> أونلاين </Text>
                                        </Box>

                                    </HStack>
                                    <Text fontSize={"1.5rem"} w={"100%"} fontWeight={400} fontFamily={lang === "ar" ? "'Cairo', sans-serif" : "'Montserrat', 'Regular'"}
                                        color={"rgba(255, 255, 255, 0.8)"}>
                                        {lang === "ar"
                                            ? "هل تمتلك متجر إلكتروني ولكن المبيعات ما زالت ضعيفة؟ في هذه الورشة المكثفة ستتعلم خطوة بخطوة كيف تفهم جمهورك، وتختار المنتجات التي تباع فعلاً، وتبني استراتيجية تسويقية تزيد مبيعاتك بذكاء. ورشة عملية مخصصة لأصحاب المتاجر في السعودية تساعدك على تحويل متجرك من مجرد فكرة… إلى مشروع يحقق أرباحًا حقيقية."
                                            : "Do you own an online store but your sales are still low? In this intensive workshop, you will learn step-by-step how to understand your audience, choose products that actually sell, and build a smart marketing strategy to boost your sales. A practical workshop designed for store owners in Saudi Arabia to help you turn your store from just an idea into a profitable business."
                                        }
                                    </Text>


                                    <Box as="button"
                                        // w={"100%"}
                                        px={"8"}
                                        _hover={{
                                            cursor: "pointer",
                                            border: "3px solid white",
                                            color: "black",
                                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                                            transition: "all 0.3s ease-in-out",

                                        }}
                                        marginInlineStart={{ base: "0", lg: "auto" }}
                                        py={"2"}
                                        borderRadius={"3xl"}
                                        fontSize={"xl"}
                                        bg="transparent"
                                        border={"3px solid white"}
                                        onClick={() => window.open("https://shop.exoln.com/qGobrnm", "_blank")}>
                                        {lang === "ar" ? " احجز مقعدك الأن وابدأ طريق النجاح" : "Book Now & Start Your Journey to Success"}
                                    </Box>
                                </VStack>

                            </HStack>
                        </VStack>
                    </VStack>


                    <VStack w="100%" bg={"white"} >

                        <VStack w={"80%"} gap="8" p={8}>
                            <Text color={"rgba(11, 8, 7, 1)"} fontSize={"2.5rem"} fontWeight={700}>
                                {lang === "ar" ? "لماذا عليك الحضور؟" : "Why You Should Attend?"}                            </Text>
                            <Text color={"rgba(11, 8, 7, 0.7)"} w={{ base: "90vw", md: "100%" }} fontSize={"1.2rem"} fontWeight={400} >
                                {lang === "ar"
                                    ? "لأن النجاح في التجارة الإلكترونية ما يعتمد على الحظ، بل على الفهم والخطة الصح، في هذه الورشة ستتعلم أسرار المتاجر الناجحة، كيف ترفع مبيعاتك وتفهم جمهورك وتسوّق بذكاء؛ احضر وخلّي متجرك يحقق النتائج اللي كنت تتمناها!"
                                    : "Success in e-commerce doesn’t depend on luck — it depends on understanding and having the right plan. In this workshop, you’ll learn the secrets of successful stores, how to increase your sales, understand your audience, and market intelligently. Join us and make your store achieve the results you’ve always dreamed of!"
                                }
                            </Text>
                            <HStack gap={8} align={{ base: "center", lg: "stretch" }}
                                justifyContent={"space-around"}
                                w={{ base: "100%", lg: "80%" }} flexDir={{ base: "column", lg: "row" }}>
                                <VStack p={4} borderRadius={"md"} w={{ base: "90vw", lg: "30%" }} border={"1px solid rgba(133, 133, 133, 0.2)"}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.344 13.5H36.622L27.49 22.628C27.8045 23.4296 27.8334 24.3151 27.5719 25.1355C27.3103 25.9559 26.7743 26.6612 26.0539 27.1328C25.3334 27.6045 24.4726 27.8137 23.6161 27.7253C22.7595 27.6368 21.9596 27.2562 21.3507 26.6473C20.7418 26.0384 20.3612 25.2385 20.2727 24.3819C20.1843 23.5254 20.3935 22.6646 20.8652 21.9441C21.3368 21.2237 22.0421 20.6877 22.8625 20.4261C23.6829 20.1646 24.5684 20.1935 25.37 20.508L34.5 11.378V7.65604C34.5001 7.158 34.698 6.68038 35.05 6.32804L38.51 2.86804C38.574 2.8036 38.6544 2.75782 38.7425 2.73562C38.8306 2.71342 38.923 2.71564 39.01 2.74204C39.188 2.79404 39.32 2.94204 39.356 3.12404L40.276 7.72604L44.876 8.64604C45.056 8.68204 45.204 8.81404 45.256 8.99204C45.2822 9.07851 45.2846 9.17047 45.2627 9.25816C45.2409 9.34585 45.1957 9.42599 45.132 9.49004L41.67 12.95C41.3181 13.3016 40.8413 13.4993 40.344 13.5Z" fill="#226CFF" />
                                        <path d="M5.25 24C5.25 28.9728 7.22544 33.742 10.7417 37.2583C14.2581 40.7746 19.0272 42.75 24 42.75C26.4623 42.75 28.9005 42.265 31.1753 41.3228C33.4502 40.3805 35.5172 38.9994 37.2583 37.2583C38.9994 35.5172 40.3805 33.4502 41.3227 31.1753C42.265 28.9005 42.75 26.4623 42.75 24C42.75 22.204 42.498 20.468 42.028 18.826C41.9346 18.449 41.991 18.0504 42.1855 17.7142C42.38 17.378 42.6973 17.1303 43.0707 17.0233C43.4441 16.9163 43.8444 16.9583 44.1875 17.1404C44.5305 17.3226 44.7895 17.6307 44.91 18C45.458 19.908 45.75 21.92 45.75 24C45.75 36.012 36.012 45.75 24 45.75C11.988 45.75 2.25 36.012 2.25 24C2.25 11.988 11.988 2.25001 24 2.25001C26.03 2.24801 28.048 2.53001 30 3.08801C30.1903 3.1414 30.3682 3.23188 30.5235 3.35425C30.6787 3.47662 30.8082 3.62847 30.9046 3.80106C31.0009 3.97366 31.0622 4.1636 31.0849 4.35996C31.1076 4.55632 31.0913 4.75524 31.0369 4.94527C30.9825 5.1353 30.891 5.3127 30.7678 5.46727C30.6446 5.62184 30.492 5.75053 30.3189 5.84595C30.1458 5.94136 29.9555 6.00162 29.759 6.02325C29.5626 6.04489 29.3637 6.02747 29.174 5.97201C27.4913 5.49172 25.7499 5.24871 24 5.25001C19.0272 5.25001 14.2581 7.22545 10.7417 10.7418C7.22544 14.2581 5.25 19.0272 5.25 24Z" fill="#226CFF" />
                                        <path d="M14.25 24C14.2556 25.3246 14.5311 26.6342 15.0597 27.8488C15.5883 29.0634 16.3589 30.1576 17.3245 31.0644C18.29 31.9713 19.4303 32.6718 20.6757 33.1233C21.921 33.5747 23.2453 33.7676 24.5677 33.6902C25.8901 33.6128 27.1829 33.2666 28.367 32.6729C29.5512 32.0792 30.6019 31.2503 31.455 30.237C32.3081 29.2236 32.9458 28.047 33.329 26.779C33.7123 25.511 33.833 24.1782 33.684 22.8619C33.642 22.5954 33.6729 22.3224 33.7734 22.072C33.8739 21.8215 34.0403 21.6029 34.2549 21.4393C34.4695 21.2757 34.7244 21.1733 34.9925 21.1427C35.2607 21.1122 35.5321 21.1548 35.778 21.266C36.28 21.49 36.618 21.968 36.662 22.516C36.9725 25.1464 36.4558 27.8083 35.1837 30.1316C33.9117 32.4549 31.9474 34.3242 29.5639 35.4797C27.1805 36.6351 24.4962 37.0193 21.8844 36.5788C19.2725 36.1384 16.8627 34.8951 14.99 33.0219C13.1178 31.1508 11.8742 28.7434 11.4318 26.1337C10.9894 23.524 11.3701 20.8413 12.521 18.4576C13.672 16.074 15.5361 14.1076 17.8549 12.8311C20.1738 11.5547 22.8324 11.0314 25.462 11.3339C25.6608 11.3524 25.8539 11.4103 26.03 11.5044C26.2061 11.5984 26.3616 11.7267 26.4875 11.8816C26.6134 12.0366 26.7071 12.2151 26.7631 12.4067C26.8192 12.5983 26.8364 12.7992 26.8137 12.9976C26.7911 13.1959 26.7291 13.3878 26.6314 13.5619C26.5336 13.7359 26.4021 13.8888 26.2446 14.0114C26.087 14.134 25.9065 14.2239 25.7138 14.2758C25.521 14.3278 25.3198 14.3408 25.122 14.3139C23.756 14.156 22.3721 14.2888 21.0611 14.7034C19.7501 15.1181 18.5416 15.8053 17.5149 16.72C16.4882 17.6347 15.6665 18.7562 15.1039 20.0108C14.5412 21.2655 14.2502 22.6249 14.25 24Z" fill="#226CFF" />
                                    </svg>
                                    <Text color={"rgba(0, 0, 0)"} fontWeight={500} fontSize={"1.5rem"}>
                                        {lang == "ar" ? "التسويق لمتجرك " : "Digital Marketing"}
                                    </Text>
                                    <Text color={"rgba(11, 8, 7, 0.7)"} fontWeight={400} fontSize={"1.5rem"}>
                                        {lang === "ar"
                                            ? "هتتعلم كيف تسوّق بذكاء، وتختار القنوات المناسبة اللي توصلك لجمهورك الحقيقي، وتحقق نتائج ملموسة بإعلانات مدروسة."
                                            : "You’ll learn how to market smartly, choose the right channels to reach your real audience, and achieve tangible results with well-planned ads."
                                        }
                                    </Text>



                                </VStack>
                                <VStack borderRadius={"md"} w={{ base: "90vw", lg: "30%" }} p={4} border={"1px solid rgba(133, 133, 133, 0.2)"}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.344 13.5H36.622L27.49 22.628C27.8045 23.4296 27.8334 24.3151 27.5719 25.1355C27.3103 25.9559 26.7743 26.6612 26.0539 27.1328C25.3334 27.6045 24.4726 27.8137 23.6161 27.7253C22.7595 27.6368 21.9596 27.2562 21.3507 26.6473C20.7418 26.0384 20.3612 25.2385 20.2727 24.3819C20.1843 23.5254 20.3935 22.6646 20.8652 21.9441C21.3368 21.2237 22.0421 20.6877 22.8625 20.4261C23.6829 20.1646 24.5684 20.1935 25.37 20.508L34.5 11.378V7.65604C34.5001 7.158 34.698 6.68038 35.05 6.32804L38.51 2.86804C38.574 2.8036 38.6544 2.75782 38.7425 2.73562C38.8306 2.71342 38.923 2.71564 39.01 2.74204C39.188 2.79404 39.32 2.94204 39.356 3.12404L40.276 7.72604L44.876 8.64604C45.056 8.68204 45.204 8.81404 45.256 8.99204C45.2822 9.07851 45.2846 9.17047 45.2627 9.25816C45.2409 9.34585 45.1957 9.42599 45.132 9.49004L41.67 12.95C41.3181 13.3016 40.8413 13.4993 40.344 13.5Z" fill="#226CFF" />
                                        <path d="M5.25 24C5.25 28.9728 7.22544 33.742 10.7417 37.2583C14.2581 40.7746 19.0272 42.75 24 42.75C26.4623 42.75 28.9005 42.265 31.1753 41.3228C33.4502 40.3805 35.5172 38.9994 37.2583 37.2583C38.9994 35.5172 40.3805 33.4502 41.3227 31.1753C42.265 28.9005 42.75 26.4623 42.75 24C42.75 22.204 42.498 20.468 42.028 18.826C41.9346 18.449 41.991 18.0504 42.1855 17.7142C42.38 17.378 42.6973 17.1303 43.0707 17.0233C43.4441 16.9163 43.8444 16.9583 44.1875 17.1404C44.5305 17.3226 44.7895 17.6307 44.91 18C45.458 19.908 45.75 21.92 45.75 24C45.75 36.012 36.012 45.75 24 45.75C11.988 45.75 2.25 36.012 2.25 24C2.25 11.988 11.988 2.25001 24 2.25001C26.03 2.24801 28.048 2.53001 30 3.08801C30.1903 3.1414 30.3682 3.23188 30.5235 3.35425C30.6787 3.47662 30.8082 3.62847 30.9046 3.80106C31.0009 3.97366 31.0622 4.1636 31.0849 4.35996C31.1076 4.55632 31.0913 4.75524 31.0369 4.94527C30.9825 5.1353 30.891 5.3127 30.7678 5.46727C30.6446 5.62184 30.492 5.75053 30.3189 5.84595C30.1458 5.94136 29.9555 6.00162 29.759 6.02325C29.5626 6.04489 29.3637 6.02747 29.174 5.97201C27.4913 5.49172 25.7499 5.24871 24 5.25001C19.0272 5.25001 14.2581 7.22545 10.7417 10.7418C7.22544 14.2581 5.25 19.0272 5.25 24Z" fill="#226CFF" />
                                        <path d="M14.25 24C14.2556 25.3246 14.5311 26.6342 15.0597 27.8488C15.5883 29.0634 16.3589 30.1576 17.3245 31.0644C18.29 31.9713 19.4303 32.6718 20.6757 33.1233C21.921 33.5747 23.2453 33.7676 24.5677 33.6902C25.8901 33.6128 27.1829 33.2666 28.367 32.6729C29.5512 32.0792 30.6019 31.2503 31.455 30.237C32.3081 29.2236 32.9458 28.047 33.329 26.779C33.7123 25.511 33.833 24.1782 33.684 22.8619C33.642 22.5954 33.6729 22.3224 33.7734 22.072C33.8739 21.8215 34.0403 21.6029 34.2549 21.4393C34.4695 21.2757 34.7244 21.1733 34.9925 21.1427C35.2607 21.1122 35.5321 21.1548 35.778 21.266C36.28 21.49 36.618 21.968 36.662 22.516C36.9725 25.1464 36.4558 27.8083 35.1837 30.1316C33.9117 32.4549 31.9474 34.3242 29.5639 35.4797C27.1805 36.6351 24.4962 37.0193 21.8844 36.5788C19.2725 36.1384 16.8627 34.8951 14.99 33.0219C13.1178 31.1508 11.8742 28.7434 11.4318 26.1337C10.9894 23.524 11.3701 20.8413 12.521 18.4576C13.672 16.074 15.5361 14.1076 17.8549 12.8311C20.1738 11.5547 22.8324 11.0314 25.462 11.3339C25.6608 11.3524 25.8539 11.4103 26.03 11.5044C26.2061 11.5984 26.3616 11.7267 26.4875 11.8816C26.6134 12.0366 26.7071 12.2151 26.7631 12.4067C26.8192 12.5983 26.8364 12.7992 26.8137 12.9976C26.7911 13.1959 26.7291 13.3878 26.6314 13.5619C26.5336 13.7359 26.4021 13.8888 26.2446 14.0114C26.087 14.134 25.9065 14.2239 25.7138 14.2758C25.521 14.3278 25.3198 14.3408 25.122 14.3139C23.756 14.156 22.3721 14.2888 21.0611 14.7034C19.7501 15.1181 18.5416 15.8053 17.5149 16.72C16.4882 17.6347 15.6665 18.7562 15.1039 20.0108C14.5412 21.2655 14.2502 22.6249 14.25 24Z" fill="#226CFF" />
                                    </svg>
                                    <Text color={"rgba(0, 0, 0)"} fontWeight={500} fontSize={"1.5rem"}>
                                        {lang == "ar" ? "زيادة مبيعات متجرك " : "Increase the sales"}
                                    </Text>
                                    <Text color={"rgba(11, 8, 7, 0.7)"} fontWeight={400} fontSize={"1.5rem"}>
                                        {lang === "ar"
                                            ? "هتعرف الطرق العملية لرفع المبيعات، وتحسين تجربة العميل، وتحويل الزوار إلى مشترين دائمين بسهولة."
                                            : "You’ll discover practical ways to increase sales, improve the customer experience, and easily turn visitors into loyal buyers."
                                        }
                                    </Text>



                                </VStack>
                                <VStack borderRadius={"md"} w={{ base: "90vw", lg: "30%" }} p={4} border={"1px solid rgba(133, 133, 133, 0.2)"}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.344 13.5H36.622L27.49 22.628C27.8045 23.4296 27.8334 24.3151 27.5719 25.1355C27.3103 25.9559 26.7743 26.6612 26.0539 27.1328C25.3334 27.6045 24.4726 27.8137 23.6161 27.7253C22.7595 27.6368 21.9596 27.2562 21.3507 26.6473C20.7418 26.0384 20.3612 25.2385 20.2727 24.3819C20.1843 23.5254 20.3935 22.6646 20.8652 21.9441C21.3368 21.2237 22.0421 20.6877 22.8625 20.4261C23.6829 20.1646 24.5684 20.1935 25.37 20.508L34.5 11.378V7.65604C34.5001 7.158 34.698 6.68038 35.05 6.32804L38.51 2.86804C38.574 2.8036 38.6544 2.75782 38.7425 2.73562C38.8306 2.71342 38.923 2.71564 39.01 2.74204C39.188 2.79404 39.32 2.94204 39.356 3.12404L40.276 7.72604L44.876 8.64604C45.056 8.68204 45.204 8.81404 45.256 8.99204C45.2822 9.07851 45.2846 9.17047 45.2627 9.25816C45.2409 9.34585 45.1957 9.42599 45.132 9.49004L41.67 12.95C41.3181 13.3016 40.8413 13.4993 40.344 13.5Z" fill="#226CFF" />
                                        <path d="M5.25 24C5.25 28.9728 7.22544 33.742 10.7417 37.2583C14.2581 40.7746 19.0272 42.75 24 42.75C26.4623 42.75 28.9005 42.265 31.1753 41.3228C33.4502 40.3805 35.5172 38.9994 37.2583 37.2583C38.9994 35.5172 40.3805 33.4502 41.3227 31.1753C42.265 28.9005 42.75 26.4623 42.75 24C42.75 22.204 42.498 20.468 42.028 18.826C41.9346 18.449 41.991 18.0504 42.1855 17.7142C42.38 17.378 42.6973 17.1303 43.0707 17.0233C43.4441 16.9163 43.8444 16.9583 44.1875 17.1404C44.5305 17.3226 44.7895 17.6307 44.91 18C45.458 19.908 45.75 21.92 45.75 24C45.75 36.012 36.012 45.75 24 45.75C11.988 45.75 2.25 36.012 2.25 24C2.25 11.988 11.988 2.25001 24 2.25001C26.03 2.24801 28.048 2.53001 30 3.08801C30.1903 3.1414 30.3682 3.23188 30.5235 3.35425C30.6787 3.47662 30.8082 3.62847 30.9046 3.80106C31.0009 3.97366 31.0622 4.1636 31.0849 4.35996C31.1076 4.55632 31.0913 4.75524 31.0369 4.94527C30.9825 5.1353 30.891 5.3127 30.7678 5.46727C30.6446 5.62184 30.492 5.75053 30.3189 5.84595C30.1458 5.94136 29.9555 6.00162 29.759 6.02325C29.5626 6.04489 29.3637 6.02747 29.174 5.97201C27.4913 5.49172 25.7499 5.24871 24 5.25001C19.0272 5.25001 14.2581 7.22545 10.7417 10.7418C7.22544 14.2581 5.25 19.0272 5.25 24Z" fill="#226CFF" />
                                        <path d="M14.25 24C14.2556 25.3246 14.5311 26.6342 15.0597 27.8488C15.5883 29.0634 16.3589 30.1576 17.3245 31.0644C18.29 31.9713 19.4303 32.6718 20.6757 33.1233C21.921 33.5747 23.2453 33.7676 24.5677 33.6902C25.8901 33.6128 27.1829 33.2666 28.367 32.6729C29.5512 32.0792 30.6019 31.2503 31.455 30.237C32.3081 29.2236 32.9458 28.047 33.329 26.779C33.7123 25.511 33.833 24.1782 33.684 22.8619C33.642 22.5954 33.6729 22.3224 33.7734 22.072C33.8739 21.8215 34.0403 21.6029 34.2549 21.4393C34.4695 21.2757 34.7244 21.1733 34.9925 21.1427C35.2607 21.1122 35.5321 21.1548 35.778 21.266C36.28 21.49 36.618 21.968 36.662 22.516C36.9725 25.1464 36.4558 27.8083 35.1837 30.1316C33.9117 32.4549 31.9474 34.3242 29.5639 35.4797C27.1805 36.6351 24.4962 37.0193 21.8844 36.5788C19.2725 36.1384 16.8627 34.8951 14.99 33.0219C13.1178 31.1508 11.8742 28.7434 11.4318 26.1337C10.9894 23.524 11.3701 20.8413 12.521 18.4576C13.672 16.074 15.5361 14.1076 17.8549 12.8311C20.1738 11.5547 22.8324 11.0314 25.462 11.3339C25.6608 11.3524 25.8539 11.4103 26.03 11.5044C26.2061 11.5984 26.3616 11.7267 26.4875 11.8816C26.6134 12.0366 26.7071 12.2151 26.7631 12.4067C26.8192 12.5983 26.8364 12.7992 26.8137 12.9976C26.7911 13.1959 26.7291 13.3878 26.6314 13.5619C26.5336 13.7359 26.4021 13.8888 26.2446 14.0114C26.087 14.134 25.9065 14.2239 25.7138 14.2758C25.521 14.3278 25.3198 14.3408 25.122 14.3139C23.756 14.156 22.3721 14.2888 21.0611 14.7034C19.7501 15.1181 18.5416 15.8053 17.5149 16.72C16.4882 17.6347 15.6665 18.7562 15.1039 20.0108C14.5412 21.2655 14.2502 22.6249 14.25 24Z" fill="#226CFF" />
                                    </svg>
                                    <Text color={"rgba(0, 0, 0)"} fontWeight={500} fontSize={"1.5rem"}>
                                        {lang == "ar" ? "اختيار المنتج ومخاطبة جمهوره " : "Choose the product and its audience"}
                                    </Text>
                                    <Text color={"rgba(11, 8, 7, 0.7)"} fontWeight={400} fontSize={"1.5rem"}>
                                        {lang === "ar"
                                            ? "هتفهم كيف تختار المنتج الصحيح، وتعرف جمهوره، وتبني له رسالة تسويقية تقنع وتبيع."
                                            : "You’ll understand how to choose the right product, identify its target audience, and craft a marketing message that persuades and sells."
                                        }
                                    </Text>



                                </VStack>
                            </HStack>
                            <Box
                                as="button"
                                display={{ base: "none", lg: "flex" }}
                                _hover={{ bg: "whiteAlpha.300", cursor: "pointer" }}
                                fontSize="1.25rem"
                                fontWeight="bold"
                                fontFamily={"Cairo"}
                                alignItems={"center"}
                                gap={2}
                                borderRadius="2rem"
                                border="2px solid rgba(34, 108, 255, 1)"
                                color="rgba(34, 108, 255, 1)"
                                px={"1.25rem"}
                                py={2}
                                onClick={() => window.open("https://shop.exoln.com/qGobrnm", "_blank")}
                            >
                                {lang === "ar" ? "احجز مكانك الان" : "Book Now"}

                            </Box>
                        </VStack>
                    </VStack>

                    <VStack w="100%" position="relative" gap={8} p={8} overflow="hidden">
                        <VStack w={{ base: "100%", lg: "60%" }}>
                            <Text color={"black"} fontWeight={700} fontSize={"2.5rem"}>
                                {lang === "ar" ? "مقدم الورشة" : "The Workshop Leader"}
                            </Text>
                            <Text color={"rgba(11, 8, 7, 0.7)"} fontWeight={300} fontSize={"1.5rem"}>
                                {lang === "ar"
                                    ? "خبرة فى التسويق للتجارة الإلكترونية فى المملكة العربية السعودية وفي الشرق الأوسط، أقدم لك افضل الحلول التسويقية للمتاجر الالكترونية لكيفية تسويقها على منصات التواصل الاجتماعي، وزيادة مبيعات المتجر الإلكتروني شهريًا."
                                    : "With experience in e-commerce marketing in Saudi Arabia and the Middle East, I provide the best marketing solutions for online stores, showing how to promote them on social media platforms and increase monthly online store sales."
                                }
                            </Text>
                        </VStack>
                        <HStack gap={8} w={{ base: "100%", lg: "85%" }} align={"stretch"} flexDirection={{ base: "column", lg: "row" }}>

                            <VStack borderRadius={"md"} minW={"40%"} gap={8} order={1} align={"center"} justifyContent={"center"} p={6} bg={"rgba(34, 108, 255, 1)"}>
                                <Text color={"white"} fontWeight={700} fontSize={"2.5rem"}>{lang === "ar" ? "مصطفى صبحي" : "Mostafa Soubhi"}</Text>
                                <Text color={"rgba(255, 255, 255, 0.8)"} lineHeight={"2.25rem"} fontWeight={400} fontSize={"1.5rem"}>
                                    {lang === "ar"
                                        ? "أعمل كخبير فى التسويق الرقمي ولدي خبرة تمتد لأكثر من 9 سنوات في تصميم وتنفيذ استراتيجيات تسويق رقمي مبتكرة. أتميز بالقدرة على تحليل الأسواق وتحديد الفرص، بالإضافة إلى تقديم حلول تسويقية متكاملة تهدف إلى تعزيز نمو الأعمال وتحقيق أهداف الشركات. أسعى دائمًا لتطوير مهاراتي ومواكبة أحدث اتجاهات التسويق الرقمي لتحقيق أقصى قيمة للعملاء والمشاريع التي أعمل عليها."
                                        : "I work as a digital marketing expert with over 9 years of experience in designing and implementing innovative digital marketing strategies. I excel at analyzing markets and identifying opportunities, while providing comprehensive marketing solutions aimed at boosting business growth and achieving company goals. I am always striving to improve my skills and stay up-to-date with the latest digital marketing trends to deliver maximum value to the clients and projects I work on."
                                    }
                                </Text>
                            </VStack>
                            <Image borderRadius={"md"} loading="eager"
                                decoding="async" objectFit={"contain"} order={1} minW={"55%"} src={"/testimonial.jpg"} />

                        </HStack>
                    </VStack>

                    <VStack w={"80%"} gap={8} p={4}>

                        <Text color={"rgba(11, 8, 7, 1)"} fontWeight={"bold"} fontSize={"2.5rem"} > {lang === "ar" ? "من يمكنه المشاركه في الورشة" : "Who Can Benefit from the Workshop"}</Text>
                        <Text color={"rgba(11, 8, 7, 0.7)"} fontWeight={"light"} fontSize={"1.5rem"}>
                            {lang === "ar"
                                ? "الورشة مناسبة لكل من يرغب في تطوير مبيعاته عبر الإنترنت، سواء كان يمتلك متجرًا على سلة أو زد أو يسوّق لمنتجاته بطرق مختلفة، مصممة لتناسب أصحاب المشاريع الصغيرة، والمسوقين، وأصحاب البرندات اللي يبغون يحققون نمو حقيقي ويحوّلون أفكارهم إلى أرباح ملموسة."
                                : "The workshop is suitable for anyone looking to grow their online sales, whether they have a store on Salla or Zed, or market their products in various ways. It’s designed for small business owners, marketers, and brand owners who want to achieve real growth and turn their ideas into tangible profits."
                            }
                        </Text>
                        <VStack w={"100vw"} bg={"white"} p={4}>
                            <HStack w={"80%"} gap={4} align={"stretch"} flexDir={{ base: "column", lg: "row" }} justifyContent={"space-between"}>
                                <Image src="/testimonial2.jpg"
                                    order={0}
                                    loading="eager"
                                    decoding="async"
                                    objectFit={"contain"}
                                />
                                <VStack order={1}
                                    gap={8}
                                    p={4}
                                    textAlign={"start"}
                                    align={"center"}
                                    justifyContent={"space-between"} alignItems={"start"}>
                                    <Box>
                                        <HStack>
                                            <Box w={"20"} h={"auto"}>
                                                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="48" height="48" rx="24" fill="#226CFF" />
                                                    <path d="M28 33V31C28 29.9391 27.5786 28.9217 26.8284 28.1716C26.0783 27.4214 25.0609 27 24 27H18C16.9391 27 15.9217 27.4214 15.1716 28.1716C14.4214 28.9217 14 29.9391 14 31V33" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M28 15.1279C28.8578 15.3503 29.6174 15.8512 30.1597 16.552C30.702 17.2528 30.9962 18.1138 30.9962 18.9999C30.9962 19.886 30.702 20.7471 30.1597 21.4479C29.6174 22.1487 28.8578 22.6496 28 22.8719" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M34 32.9999V30.9999C33.9993 30.1136 33.7044 29.2527 33.1614 28.5522C32.6184 27.8517 31.8581 27.3515 31 27.1299" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Box>

                                            <Box gap={2}>
                                                <Text fontSize={"1.5rem"} fontWeight={600}>{lang === "ar" ? "أصحاب المتاجر الإلكترونية الناشئة " : "Entrepreneurs"}</Text>
                                                <Text fontSize={"1rem"} fontWeight={400}>
                                                    {lang === "ar"
                                                        ? "هتتعلم كيف تبدأ صح، وتبني متجر ناجح بخطوات عملية، وتعرف كيف تحول الزوار إلى عملاء دائمين."
                                                        : "You’ll learn how to start the right way, build a successful store with practical steps, and understand how to turn visitors into loyal customers."
                                                    }
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </Box>
                                    <Box>
                                        <HStack>
                                            <Box w={"20"} h={"auto"}>
                                                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="48" height="48" rx="24" fill="#226CFF" />
                                                    <path d="M28 33V31C28 29.9391 27.5786 28.9217 26.8284 28.1716C26.0783 27.4214 25.0609 27 24 27H18C16.9391 27 15.9217 27.4214 15.1716 28.1716C14.4214 28.9217 14 29.9391 14 31V33" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M28 15.1279C28.8578 15.3503 29.6174 15.8512 30.1597 16.552C30.702 17.2528 30.9962 18.1138 30.9962 18.9999C30.9962 19.886 30.702 20.7471 30.1597 21.4479C29.6174 22.1487 28.8578 22.6496 28 22.8719" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M34 32.9999V30.9999C33.9993 30.1136 33.7044 29.2527 33.1614 28.5522C32.6184 27.8517 31.8581 27.3515 31 27.1299" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Box>

                                            <Box gap={2}>
                                                <Text fontSize={"1.5rem"} fontWeight={600}> {lang === "ar" ? "مسوقين بالعمولة" : "Affiliate Marketers"}
                                                </Text>
                                                <Text fontSize={"1rem"} fontWeight={400}>
                                                    {lang === "ar"
                                                        ? "تعرف كيف تختار المنتج المناسب، وتسوّقه باحتراف، وتزيد ارباحك باستخدام استراتيجيات بيع فعالة ومجربة."
                                                        : "Learn how to choose the right product, market it professionally, and increase your profits using effective and proven sales strategies."
                                                    }
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </Box>
                                    <Box>
                                        <HStack align={"stretch"}>
                                            <Box w={"20"} h={"auto"}>
                                                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="48" height="48" rx="24" fill="#226CFF" />
                                                    <path d="M28 33V31C28 29.9391 27.5786 28.9217 26.8284 28.1716C26.0783 27.4214 25.0609 27 24 27H18C16.9391 27 15.9217 27.4214 15.1716 28.1716C14.4214 28.9217 14 29.9391 14 31V33" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M28 15.1279C28.8578 15.3503 29.6174 15.8512 30.1597 16.552C30.702 17.2528 30.9962 18.1138 30.9962 18.9999C30.9962 19.886 30.702 20.7471 30.1597 21.4479C29.6174 22.1487 28.8578 22.6496 28 22.8719" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M34 32.9999V30.9999C33.9993 30.1136 33.7044 29.2527 33.1614 28.5522C32.6184 27.8517 31.8581 27.3515 31 27.1299" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Box>
                                            <Box gap={2}>
                                                <Text fontSize={"1.5rem"} fontWeight={600}>
                                                    {lang === "ar"
                                                        ? "أصحاب مشروعات التجارة من البيت"
                                                        : "Home-Based Business Owners"}
                                                </Text>

                                                <Text fontSize={"1rem"} fontWeight={400}>
                                                    {lang === "ar"
                                                        ? "هتتعلم كيف تبيع منتجاتك باحتراف من بيتك، وتستخدم الأدوات الرقمية لتوسيع جمهورك وتحقيق دخل مستمر."
                                                        : "You’ll learn how to sell your products professionally from home, use digital tools to expand your audience, and generate consistent income."
                                                    }
                                                </Text>

                                            </Box>
                                        </HStack>
                                    </Box>

                                    <Box><HStack>
                                        <Box w={"20"} h={"auto"}>
                                            <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="48" height="48" rx="24" fill="#226CFF" />
                                                <path d="M28 33V31C28 29.9391 27.5786 28.9217 26.8284 28.1716C26.0783 27.4214 25.0609 27 24 27H18C16.9391 27 15.9217 27.4214 15.1716 28.1716C14.4214 28.9217 14 29.9391 14 31V33" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M28 15.1279C28.8578 15.3503 29.6174 15.8512 30.1597 16.552C30.702 17.2528 30.9962 18.1138 30.9962 18.9999C30.9962 19.886 30.702 20.7471 30.1597 21.4479C29.6174 22.1487 28.8578 22.6496 28 22.8719" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M34 32.9999V30.9999C33.9993 30.1136 33.7044 29.2527 33.1614 28.5522C32.6184 27.8517 31.8581 27.3515 31 27.1299" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Box>

                                        <Box gap={2}>
                                            <Text fontSize={"1.5rem"} fontWeight={600}>{lang === "ar" ? "أصحاب البرندات والمحلات التجارية " : "Business owners"}</Text>
                                            <Text fontSize={"1rem"} fontWeight={400}>{lang === "ar" ? "اكتشف كيف تنتقل ببرندك من البيع التقليدي إلى البيع الإلكتروني و تضاعف مبيعاتك عبر منصات سلة وزد." : "Discover how to move your brand from traditional sales to e-commerce and double your sales through basket platforms."}</Text>
                                        </Box>
                                    </HStack>
                                    </Box>

                                </VStack>
                            </HStack>
                        </VStack>
                    </VStack>



                    <VStack h="25rem" w="100vw" position="relative" overflow="hidden">
                        {/* Background image */}
                        <Image
                            src="/workshop-cta.png"
                            position="absolute"
                            top={0}
                            left={0}
                            zIndex={0}
                            w="100%"
                            h="100%"
                            loading="eager"
                            decoding="async"
                            objectFit="cover"
                            objectPosition="center"
                        />

                        {/* Blue overlay with blend mode - NO CHILDREN */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            w="100%"
                            h="100%"
                            zIndex={1}
                            bg="rgba(34, 108, 255, 1)"
                            style={{ mixBlendMode: "multiply" }}
                        />

                        {/* Text content - SEPARATE from overlay */}
                        <VStack
                            position="absolute"
                            top={0}
                            left={0}
                            h="100%"
                            w="100%"
                            justify="center"
                            align="center"
                            p={4}
                            textAlign="center"
                            zIndex={2}
                            gap={4}
                        >
                            <Box
                                w={{ base: "100%", md: "90%", lg: "80%" }}
                                textAlign="center"
                                color="white"
                                gap={8}
                                display="flex"
                                flexDir="column"
                                alignItems="center"
                            >
                                <Text
                                    fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
                                    fontWeight="700"
                                    color="white"
                                >
                                    {
                                        lang === "ar" ? "انجح بمتجرك الإلكتروني على سلة أو زد" : "Success with your e-commerce store"
                                    }
                                </Text>

                                <Text
                                    fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
                                    fontWeight="400"
                                    color="white"
                                >

                                    {lang === "ar"
                                        ? "تحصل على معرفة عملية من خبراء التسويق الإلكتروني، ونماذج جاهزة لتطبيقها على متجرك مباشرة. تتعلم كيف تبني خطة تسويقية واقعية، وتتعرف على الأدوات التي تساعدك على رفع المبيعات وتحليل الأداء. بالإضافة إلى أفكار حصرية وتجارب نجاح من متاجر سعودية حقيقية."
                                        : "Gain practical knowledge from digital marketing experts and ready-to-use templates you can apply directly to your store. Learn how to build a realistic marketing plan, discover tools that help you increase sales and analyze performance, and get exclusive insights and success stories from real Saudi stores."
                                    }
                                </Text>

                                <Box
                                    as="button"
                                    border="2px solid white"
                                    borderRadius="4xl"
                                    p={2}
                                    px={8}
                                    bg="transparent"
                                    fontSize={{ base: "0.8rem", md: "1.5rem" }}
                                    // color="white"
                                    _hover={{ bg: "white", color: "#226CFF", cursor: "pointer" }}
                                    onClick={() => window.open("https://shop.exoln.com/qGobrnm", "_blank")}
                                >
                                    {
                                        lang === "ar" ? "احجز مكانك الان" : "Book Now"
                                    }
                                </Box>
                            </Box>
                        </VStack>
                    </VStack>
                </>
            )}
        </VStack>
    );
};