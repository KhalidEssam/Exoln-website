import { Box, Stack, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "../store/slices/navSlice";
import { Link as RouterLink } from "react-router-dom";
import type { RootState } from "@/store";
import { selectLanguage } from "../store/slices/languageSlice";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { activeLink, links } = useSelector((state: RootState) => state.nav);
  const lang = useSelector(selectLanguage);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <Stack direction="column" zIndex={2} position="relative">
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "1rem", md: "2rem", xl: "3.5rem" }}
        color={"white"}
      >
        {links.map((link) => {
          const isDropdownOpen = openDropdown === link.href;

          return (
            <Box key={link.href} position="relative">
              <RouterLink to={link.subNav ? "#" : link.href}>
                <Box
                  onClick={() =>
                    link.subNav
                      ? setOpenDropdown(isDropdownOpen ? null : link.href)
                      : dispatch(setActiveLink(link.href))
                  }
                  fontSize="1.5rem"
                  lineHeight="100%"
                  fontWeight="500"
                  bg={useColorModeValue("transparent", "gray.400")}
                  color={
                    activeLink === link.href
                      ? useColorModeValue("#b3b3b3ff", "gray.100")
                      : useColorModeValue("white", "gray.400")
                  }
                  _hover={{ color: useColorModeValue("#226CFF", "gray.100") }}
                  _active={{ color: useColorModeValue("#226CFF", "gray.100") }}
                  display="inline-flex"
                  alignItems="center"
                  gap="0.3rem"
                  cursor="pointer"
                >
                  {lang === "en" ? link.en : link.ar}
                  {link.subNav && <FaAngleDown size="0.8rem" />}
                </Box>
              </RouterLink>

              {/* SubNav dropdown */}
              {link.subNav && isDropdownOpen && (
                <VStack
                  position="absolute"
                  top="100%"
                  mt={2}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow="md"
                  borderRadius="md"
                  overflow="hidden"
                  align="stretch"
                  minW="200px"
                >
                  {link.subNav.map((subLink) => (
                    <RouterLink key={subLink.href} to={link.href + subLink.href}>
                      <Box
                        px={4}
                        py={2}
                        onClick={() => dispatch(setActiveLink(subLink.href))}
                        fontSize="1rem"
                        fontWeight="500"
                        color={
                          activeLink === subLink.href
                            ? useColorModeValue("#226CFF", "gray.100")
                            : useColorModeValue("gray.800", "gray.200")
                        }
                        _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
                      >
                        {lang === "en" ? subLink.en : subLink.ar}
                      </Box>
                    </RouterLink>
                  ))}
                </VStack>
              )}
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};
