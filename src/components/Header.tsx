import { HStack, Image, Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { FaArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectLanguage } from "../store/slices/languageSlice";


export const Header = () => {
  const  lang = useSelector(selectLanguage);
  return (
    <HStack zIndex={2} color={"white"} position={"absolute"} as="header" marginTop={6} width={"90%"} bgColor={'transparent'} justifyContent="space-between" p={4}  >
      <Image src="/logo.png" alt="logo" height={"2rem"} />

      <Navbar />

      <HStack>
        {lang === "ar" ? "ar" : "en" } <FaArrowDown size='1rem' />

        <Box as="button"
          _hover={{ bg: "whiteAlpha.300", cursor: "pointer" }}
          fontSize="1.2rem"
          lineHeight="100%"
          fontWeight="500"
          w={"8em"}
          borderRadius={"4xl"}
          border={"2px solid white"}
          p={4}>
          Login
        </Box>
        </HStack>
    </HStack>
  );
};