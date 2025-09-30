
import { HStack } from "@chakra-ui/react"
import { ArticleCard } from "./ArticleCard"
import type { articleProbs } from "@/types/types"



export const ArticleList = ({ articles }: { articles: articleProbs[] }) => {



    return (
        <HStack w={"100%"}
            flexDir={{ base: "column", md: "row" }} flexWrap={"wrap"} justifyContent={"space-around"} align={"stretch"}>
            {articles.map((article: articleProbs) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </HStack>
    )
}