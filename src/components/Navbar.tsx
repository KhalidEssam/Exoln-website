import { Box, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "../store/slices/navSlice";
import { Link as RouterLink } from "react-router-dom";
import type { RootState } from "@/store";
import { selectLanguage } from "../store/slices/languageSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { activeLink, links } = useSelector((state: RootState) => state.nav);
  const lang = useSelector(selectLanguage);

  return (
    <Stack direction="column" zIndex={2}>
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "1rem", md: "2rem", xl: "3.5rem" }}
        color={"white"}
      >
        {links.map((link) => {
          return (
            <RouterLink key={link.href} to={link.href}>
              <Box
                onClick={() => dispatch(setActiveLink(link.href))}
                fontSize="1.5rem"
                lineHeight="100%"
                fontWeight="500"
                bg={useColorModeValue("transparent", "gray.400")}
                color={
                  activeLink === link.href
                    ? useColorModeValue("#eeededff", "gray.100")
                    : useColorModeValue("white", "gray.400")
                }
                _hover={{ color: useColorModeValue("#4d7cb1", "gray.100") }}
                _active={{ color: useColorModeValue("#4d7cb1", "gray.100") }}
                display="inline-block" // 👈 keeps text & svg together
              >
                {lang === "en" ? link.en : link.ar}
              </Box>
            </RouterLink>
          );
        })}
      </Stack>
    </Stack>
  );
};
