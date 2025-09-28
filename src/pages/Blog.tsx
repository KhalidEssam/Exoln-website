import { VStack, HStack, Box } from "@chakra-ui/react";

export const Blog = () => {
  return (
    <VStack w={"100vw"} gap={4}>

      <HStack  bgImage={"url(./pattern.png)"} top={0} width={"100%"} bgSize={"cover"} bgPos={"center"} height={"100vh"}/>
      <Box className="overlay-darker" top={0} width={"100%"} bgSize={"cover"} bgPos={"center"} height={"100vh"} />
      <h1>Home Page</h1>
    </VStack>
  )
}