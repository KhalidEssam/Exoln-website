import { HStack, Text, VStack, Box } from "@chakra-ui/react";
import { AboutServices } from "@/components/service-components/AboutServices";
import { WhoWeSurve } from "@/components/service-components/WhoWeServe";
export const Exolnix = () => {
    return (
        <>
            < VStack
                position="relative"
                justify="center"
                align="center"
                bgImage={`url(/1.png)`
                }
                bgColor={"#F8F8F8"}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                w={{ base: "90vw", md: "100vw" }}
                h="100vh"
                overflow="hidden" // ensures overlay respects border radius
            >
                {/* Overlay */}
                < HStack
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg={"#1E9241"}
                    mixBlendMode="multiply"
                    opacity={1}
                />
                <Box
                    w={{ base: "100%", md: "100%" }}
                    fontFamily={`'Montserrat', 'Regular'`}
                    textAlign="start"
                    marginInlineStart="10%"
                    zIndex={1}
                    position={"absolute"}
                    bottom="10vw"
                >
                    <Text
                        fontSize={{ base: "2.5rem", xl: "4rem" }}
                        fontWeight="semibold"
                        color="white"
                        lineHeight="1"   // removes vertical padding/spacing
                        m="0"            // reset margins
                    >
                        EXOLNIX
                    </Text>

                    <Text w={{ base: "80%", md: "40%" }}


                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="500"
                        color="white"
                        lineHeight="1"   // makes letters snug
                    >
                        SMART FINANCIAL & ACCOUNTING MANAGEMENT
                    </Text>
                </Box>
            </VStack>

            <AboutServices  {...{
                title: "ABOUT EXOLNIX",
                description: "Exolnix is a specialized unit within the Exoln Group that provides financial and accounting management solutions tailored for entrepreneurs and SMEs. Our approach reflects real market needs, offering clients operational ease and true digital confidence.",
                subtitle: "At Exolnix, we don’t deliver cold, prepackaged programs. We listen carefully, analyze precisely, and provide solutions that empower clients to focus on building their businesses, while we restructure their financial operations into a growth enabler rather than a burden.",
                imageUrl: "/EXOLNIX.png",
                color: "#1E9241"
            }} />

            <WhoWeSurve Services={[
                {
                    description: "Entrepreneurs starting their ventures who need someone to handle back-office tasks (invoicing, reporting, cashflow, tax, and zakat).",
                    overlay: "#1E9241"
                },
                {
                    description: "SMEs working with limited teams, where the business owner struggles with financial staff lacking analytical and reporting skills.",
                    overlay: "#1E9241"
                },
                {
                    description: "Companies with accounting disarray that require precise restructuring instead of paying high costs to external consultants who add little value.",
                    overlay: "#1E9241"
                },
                {
                    description: "Businesses seeking funding or investors and needing a reliable financial file that reflects their current performance and potential growth.",
                    overlay: "#1E9241"
                }
            ]} />
        </>
    );
};