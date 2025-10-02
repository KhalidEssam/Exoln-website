import { HStack, Image, Box, IconButton, VStack } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../store/slices/languageSlice";
import { useState } from "react";
import type { RootState } from "@/store";
import { useRef } from "react";
// import { useOutsideClick } from "./Navbar";
import { Menu, Portal } from "@chakra-ui/react"
import { setLanguage } from "../store/slices/languageSlice";
import { useDispatch } from "react-redux";
export const Header = () => {
  const lang = useSelector(selectLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeLink, } = useSelector((state: RootState) => state.nav);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
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
        <HStack display={{ base: "none", lg: "flex" }} w={"75%"} justifyContent={"space-between"} gap={6} align="center">
          <Navbar />

          <HStack>
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
