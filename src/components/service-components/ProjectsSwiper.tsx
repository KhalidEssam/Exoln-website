
import { VStack, Text, Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import useSwiperDirectionFix from "@/hooks/useSwiperDirectionFix";
import "swiper/swiper-bundle.css";

const images = ["/proj-2.webp", "/proj-1.webp", "/proj-3.webp"];

// Repeat images until we reach 10 slides
const Slides = Array.from({ length: 9 }, (_, i) => ({
    img: images[i % images.length],
}));

export const ProjectsSwiper = () => {
    const { swiperRef, direction, key } = useSwiperDirectionFix();

    return (
        <VStack w="100%" maxW="80vw" mx="auto" gap={8}>
            <Text fontSize="2xl" fontWeight="bold">
                Projects That Speak
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
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: Math.floor(window.innerWidth / 536),
                        spaceBetween: 20,
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

                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Image

                                src={slide.img}
                                alt={`Slide ${i + 1}`}
                                w="536px"
                                h="421px"
                                objectFit="cover"
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </VStack>
    );
};
