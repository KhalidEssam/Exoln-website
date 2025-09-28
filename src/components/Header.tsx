import { HStack, Image, Box, IconButton, VStack } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectLanguage } from "../store/slices/languageSlice";
import { useState } from "react";

export const Header = () => {
  const lang = useSelector(selectLanguage);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      as="header"
      zIndex={2}
      color="white"
      position="absolute"
      top={0}
      mt={6}
      w="90%"
      px={4}
    >
      <HStack justify="space-between" align="center">
        {/* Logo */}
        <Image src="/logo.png" alt="logo" h="2rem" />

        {/* Desktop Navbar + Actions: show ONLY on lg and up */}
        <HStack display={{ base: "none", lg: "flex" }} w={"75%"} justifyContent={"space-between"} gap={6} align="center">
          <Navbar />

          <HStack>
            {lang === "ar" ? "ar" : "en"} <FaArrowDown size="1rem" />

            <Box
              as="button"
              _hover={{ bg: "whiteAlpha.300", cursor: "pointer" }}
              fontSize="1.2rem"
              fontWeight="500"
              w="8em"
              borderRadius="full"
              border="2px solid white"
              p={4}
            >
              Login
            </Box>
          </HStack>
        </HStack>

        {/* Mobile Hamburger: show UP TO md (hidden on lg and above) */}
        <IconButton
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          display={{ base: "flex", lg: "none" }}
          variant="ghost"
          color="white"
          onClick={() => setMenuOpen((s) => !s)}
          zIndex={5}
        // right positioning optional if you want it absolutely placed:
        // pos="absolute" right={4}
        >
          {menuOpen ? <FaTimes size="1.5rem" /> : <FaBars size="1.5rem" />}
        </IconButton>
      </HStack>

      {/* Mobile Menu (visible only when menuOpen AND on md and below) */}
      {menuOpen && (
        <VStack
          mt={4}
          p={4}
          gap={6}
          align="stretch"
          bg="blackAlpha.800"
          borderRadius="lg"
          display={{ base: "flex", lg: "none" }}
        >
          <Navbar />
          <HStack>
            {lang === "ar" ? "ar" : "en"} <FaArrowDown size="1rem" />
          </HStack>
          <Box
            as="button"
            _hover={{ bg: "whiteAlpha.300", cursor: "pointer" }}
            fontSize="1.2rem"
            fontWeight="500"
            w="100%"
            borderRadius="full"
            border="2px solid white"
            p={4}
          >
            Login
          </Box>
        </VStack>
      )}
    </Box>
  );
};
