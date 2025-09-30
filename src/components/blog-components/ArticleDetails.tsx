// import { selectLanguage } from "@/store/slices/languageSlice";
// import { VStack, Box, Text, HStack } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import { FaBell } from "react-icons/fa6";

// export const ArticleDetails = () => {
//   const lang = useSelector(selectLanguage)
//   const chosenArticle = articles.find(
//     (article) => article.id === Number(window.location.pathname.split("/")[2])
//   );
//   return (
//     <VStack
//       w={"90vw"}
//       align={"start"}
//       textAlign={"start"}
//       gap={"2rem"}
//       m={"2rem"}
//     >
//       <Box
//         bgImage={`url(${chosenArticle?.image})`}
//         bgSize={"cover"}
//         w={"100%"}
//         h={"300px"}
//         borderRadius={"10px"}
//       />
//       <HStack w={"100%"} justifyContent={"space-between"}>
//         <Text
//           color={"rgba(46, 54, 81, 1)"}
//           fontSize={{ base: "1.25rem", md: "1.5rem", lg: "2rem" }}
//         >
//           {" "}
//           { lang === "en" ? chosenArticle?.title.en : chosenArticle?.title.ar}
//         </Text>
//         <Text
//           color={"rgba(95, 97, 102, 1)"}
//           fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
//         >
//           {" "}
//           {chosenArticle?.date}
//         </Text>
//       </HStack>
//       <VStack minH={"70vh"}>
//         <Text>{ lang === "en" ? chosenArticle?.description.en : chosenArticle?.description.ar}</Text>
//       </VStack>
//       <HStack w={"100%"}>
//         <Text
//          w={{ base: "40%", md: "50%" }}
//           color={"rgba(46, 54, 81, 1)"}
//           fontSize={{ base: "1.25rem", md: "1.5rem" }}
//         >
//           {lang === "en" ? "Do you need legal help? Subcribe to our plans now" : " هل تحتاج لمساعدة في قضيتك العمالية؟ اشترك في باقاتنا الان"}
//         </Text>
//         <Box
//           as={"button"}
//           width={{ base: "40%", md: "30%" }}

//           bgColor={"rgba(90, 119, 187, 1)"}
//           color={"white"}
//           onClick={() => window.open("https://portal.lsc-sa.net/", "_blank")}
//           borderRadius={"2xl"}
//         >
//           {lang === "en" ? "Subscribe Now" : "  التفاصيل والاشتراك"} <FaBell style={{ display: "inline", marginLeft: "0.5rem" }} />
//         </Box>
//       </HStack>
//     </VStack>
//   );
// };
