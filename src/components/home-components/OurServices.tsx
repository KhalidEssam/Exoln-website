import { HStack, VStack } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";
import { type ServiceProps } from "./ServiceCard";
export const OurServices = () => {
    const Services: ServiceProps[] = [
        {
            title: "EXOLNIX",
            description: "Smart Financial & Accounting Management.",
            icon: "/1.webp",
            overlay: "#1E9241",
            href: "/services/exolnix"
        },
        {
            title: "EXOMARK",
            description: "Creative Marketing & Brand Identity.",
            icon: "/2.webp",
            overlay: "#DC0800",
            href: "/services/exomark"
        },
        {
            title: "EXONEXT",
            description: "Digital Transformation & Technology Solutions.",
            icon: "/3.webp",
            overlay: "#FED036",
            href: "/services/exonext"
        },
        {
            title: "EXOBIZ",
            description: "Business Consulting & Organizational Development",
            icon: "/4.webp",
            overlay: "#FC8000",
            href: "/services/exobiz"
        },
    ]
    return (
        <VStack style={{ contentVisibility: "auto" }} // 👈 huge perf boost
            justifyContent={"center"} alignItems={"center"} gap={8}>

            <HStack w={"100%"} align={"stretch"} color={"white"} flexDir={{ base: "column", md: "row" }} justify={"center"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {Services.map((service, index) => (
                    <ServiceCard number={index + 1} service={service} key={index} />
                ))}

            </HStack>
        </VStack>
    )
}