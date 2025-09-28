import { HStack, VStack } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";
import { type ServiceProps } from "./ServiceCard";
export const OurServices = () => {
    const Services: ServiceProps[] = [
        {
            title: "EXOLNIX",
            description: "Smart Financial & Accounting Management.",
            icon: "/1.png",
            overlay: "#1E9241"
        },
        {
            title: "EXOMARK",
            description: "Creative Marketing & Brand Identity.",
            icon: "/2.png",
            overlay: "#DC0800"
        },
        {
            title: "EXONEXT",
            description: "Digital Transformation & Technology Solutions.",
            icon: "/3.png",
            overlay: "#FED036"
        },
        {
            title: "EXOBIZ",
            description: "Business Consulting & Organizational Development",
            icon: "/4.png",
            overlay: "#FC8000"
        },
    ]
    return (
        <VStack w={"90%"} bgColor={"#FFFFFF"} justifyContent={"center"} alignItems={"center"} gap={8}>

            <HStack w={"100%"} h={"100%"} justifyContent={"space-between"} alignItems={"center"}>
                {Services.map((service, index) => (
                    <ServiceCard number={index + 1} service={service} key={index} />
                ))}

            </HStack>
        </VStack>
    )
}