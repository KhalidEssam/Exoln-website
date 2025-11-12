import { HStack, Image, Box, IconButton, VStack } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../store/slices/languageSlice";
import { useState } from "react";
import type { RootState } from "@/store";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { Menu, Portal } from "@chakra-ui/react"
import { setLanguage } from "../store/slices/languageSlice";
import { useDispatch } from "react-redux";
export const Header = () => {
  const lang = useSelector(selectLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeLink, } = useSelector((state: RootState) => state.nav);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ✅ Close menu when clicking outside
  // useOutsideClick(menuRef, () => {
  //   if (menuOpen) setMenuOpen(false);
  // });
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
        <ChakraLink href="/">
          <Image src={activeLink === "/" ? "/logo.webp" : "/logo2.webp"} alt="logo" h="2rem" />
        </ChakraLink>
        {/* Desktop Navbar + Actions: show ONLY on lg and up */}
        <HStack display={{ base: "none", lg: "flex" }} w={"55%"} justifyContent={"space-arounf"} gap={6} align="center">
          <Navbar />
          <Menu.Root>
            <Menu.Trigger asChild>
              <HStack>
                {lang === "ar" ? "AR" : "EN"}  <FaAngleDown size="1rem" />

              </HStack>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-txt" onClick={() => dispatch(setLanguage('en'))}>English</Menu.Item>
                  <Menu.Item value="new-file" onClick={() => dispatch(setLanguage('ar'))}>العربية</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

        </HStack>
        {/* <HStack> */}

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
          border="2px solid white"
          color="white"
          px={"1.25rem"}
          py={2}
          onClick={() => navigate("/workshop")}
        >
          {lang === "ar" ? "ورشة المتاجر الالكترونية" : "E-Commerce Workshop"}
          <svg width="24" transform={(lang === "ar" ? "rotate(0)" : "rotate(90)")} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 18L6 6M6 6H15M6 6V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </Box>
        {/* </HStack> */}
        {/* Mobile Hamburger: show UP TO md (hidden on lg and above) */}
        <IconButton
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          display={{ base: "flex", lg: "none" }}
          variant="ghost"
          color="white"
          onClick={() => setMenuOpen((s) => !s)}
          zIndex={5}

        >
          {menuOpen ? <FaTimes size="1.5rem" /> : <FaBars size="1.5rem" />}
        </IconButton>
      </HStack>

      {/* Mobile Menu (visible only when menuOpen AND on md and below) */}
      {menuOpen && (
        <VStack
          ref={menuRef} // 👈 attach ref here
          mt={4}
          p={4}
          gap={6}
          align="stretch"
          bg="blackAlpha.900"
          borderRadius="lg"
          display={{ base: "flex", lg: "none" }}
        >
          <Navbar />
          <Box
          as="button"
          display={"flex"}
          minW={"50%"}
          _hover={{ bg: "whiteAlpha.300", cursor: "pointer" }}
          fontSize="1.25rem"
          fontWeight="bold"
          fontFamily={"Cairo"}
          alignItems={"center"}
          justifyContent={"space-around"}
          marginInlineStart={"auto"}
          marginInlineEnd={"auto"}
          borderRadius="2rem"
          border="2px solid white"
          color="white"
          px={"1.25rem"}
          py={2}
          onClick={() => navigate("/workshop")}
        >
          {lang === "ar" ? "ورشة المتاجر الالكترونية" : "E-Commerce Workshop"}
          <svg width={"24"} height={"24"} transform={(lang === "ar" ? "rotate(0)" : "rotate(90)")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 18L6 6M6 6H15M6 6V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Box>
          <HStack w="100%" justify="center" gap={2}>
            <Menu.Root>
              <Menu.Trigger asChild>
                <HStack>
                  {lang === "ar" ? "AR" : "EN"}  <FaAngleDown size="1rem" />

                </HStack>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item onClick={() => dispatch(setLanguage('en'))} value="new-txt">English</Menu.Item>
                    <Menu.Item onClick={() => dispatch(setLanguage('ar'))} value="new-file">العربية</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            
          </HStack>
          {/* <Box
            as="button"
            _hover={{ bg: "whiteAlpha.300", cursor: "pointer" }}
            fontSize="1.2rem"
            fontWeight="500"
            w="100%"
            borderRadius="full"
            border="2px solid white"
            p={4}
          >
            {lang === "ar" ? "تسجيل الدخول" : "Login"}
          </Box> */}
        </VStack>
      )}
    </Box>
  );
};
