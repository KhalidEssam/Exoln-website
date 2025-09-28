
import { VStack, HStack, Text } from "@chakra-ui/react";

export const Contact = () => {
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
                    bgImage: "url(./Contact.png)",
                    bgSize: "cover",
                    bgPos: "center",
                    // transform: "scaleX(-1)",
                }}
            >
                {/* your content here */}
            </HStack>
        </VStack>
    )
}