import { VStack, HStack, Box } from "@chakra-ui/react";

export const AboutUs = () => {
    return (
        <VStack w={"100vw"}> 


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
                    bgImage: "url(./About.png)",
                    bgSize: "cover",
                    bgPos: "center",
                    // transform: "scaleX(-1)",
                }}
            >      <Box className="overlay-darker" top={0} width={"100%"} height={"100vh"} />
                    {/* <Box mt={"15rem"} /> */}
                    {/* <HeroSection /> */}
                  {/* </Box> */}
                {/* your content here */}
            </HStack>
        </VStack>
    )
}
