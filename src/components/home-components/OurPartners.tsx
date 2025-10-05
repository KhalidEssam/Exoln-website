import { VStack, Text, Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import useSwiperDirectionFix from "@/hooks/useSwiperDirectionFix";
import "swiper/swiper-bundle.css";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";
const images = ["/Yallatech.webp", "/octo.webp", "/Novel.webp", "/o2host.webp"];

// Repeat images until we reach 10 slides
const Slides = Array.from({ length: 6 }, (_, i) => ({
    img: images[i % images.length],
}));

export const OurPartners = () => {
    const lang = useSelector(selectLanguage);
    const { swiperRef, direction, key } = useSwiperDirectionFix();

    return (
        <VStack w="100%" maxW="1200px" mx="auto" gap={8}>
            <Text fontSize="2xl" fontWeight="bold">
                {lang === "en" ? "OUR PARTNERS" : "شركاؤنا"}
            </Text>

            <Swiper
                key={key}
                ref={swiperRef}
                direction="horizontal"
                dir={direction}
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop
                watchOverflow={true}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 32,
                    },
                }}
                style={{
                    paddingBottom: "2rem",
                    width: "100%",
                }}
            >
                {Slides.map((slide, i) => (
                    <SwiperSlide key={i} style={{ display: "flex", justifyContent: "center" }}>
                        <Box
                            w="120px"
                            h="120px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Image
                                src={slide.img}
                                alt={`Slide ${i + 1}`}
                                maxW="100%"
                                maxH="100%"
                                objectFit="contain"
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </VStack>
    );
};
