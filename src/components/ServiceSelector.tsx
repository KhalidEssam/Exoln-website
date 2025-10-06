import { memo, useCallback } from "react";
import {
    Box,
    VStack,
    HStack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react/checkbox";
import { Collapsible } from "@chakra-ui/react/collapsible";
// import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { FaUpLong, FaDownLong } from "react-icons/fa6";
// import type { MouseEvent } from "react";

interface Service {
    id: string;
    name: string;
    children?: Service[];
}

const SERVICES_DATA: Service[] = [
    {
        id: "exolin",
        name: "Exolin",
        children: [
            { id: "exofin", name: "Exofin (accounting software)" },
            { id: "financial-solutions", name: "Financial solutions & Services" },
            { id: "exolin-other", name: "Other" },
        ],
    },
    {
        id: "exomark",
        name: "ExoMark",
        children: [
            { id: "seo", name: "Search Engine Optimization" },
            { id: "smm", name: "Social Media Marketing" },
            { id: "paid-ads", name: "Paid Ads" },
            { id: "photo-video", name: "Photography/Videography" },
            { id: "branding", name: "Branding/Graphic Design" },
            { id: "animation", name: "Animator/Motion Design" },
            { id: "exomark-other", name: "Other" },
        ],
    },
    {
        id: "exonext",
        name: "ExoNext",
        children: [
            { id: "erp", name: "ERP" },
            { id: "software-dev", name: "Software development" },
            { id: "website", name: "Website" },
            { id: "mobile-app", name: "Mobile App" },
            { id: "exonext-other", name: "Other" },
        ],
    },
    { id: "exobiz", name: "ExoBiz" },
    { id: "exotale", name: "ExoTale" },
];

interface ServiceItemProps {
    service: Service;
    selectedServices: Set<string>;
    onToggle: (id: string) => void;
    level?: number;
}

const ServiceItem = memo(
    ({ service, selectedServices, onToggle, level = 0 }: ServiceItemProps) => {
        const { open, onToggle: toggleExpand } = useDisclosure();
        const hasChildren = !!service.children?.length;
        const isParentSelected = selectedServices.has(service.id);

        const allChildrenSelected = hasChildren
            ? service.children!.every((child) => selectedServices.has(child.id))
            : false;

        const handleParentToggle = useCallback(() => {
            if (hasChildren) {
                if (allChildrenSelected) {
                    // Unselect all
                    onToggle(service.id);
                    service.children!.forEach((child) => {
                        if (selectedServices.has(child.id)) onToggle(child.id);
                    });
                } else {
                    // Select all
                    if (!isParentSelected) onToggle(service.id);
                    service.children!.forEach((child) => {
                        if (!selectedServices.has(child.id)) onToggle(child.id);
                    });
                }
            } else {
                onToggle(service.id);
            }
        }, [
            hasChildren,
            allChildrenSelected,
            isParentSelected,
            service,
            selectedServices,
            onToggle,
        ]);

        // ✅ Chakra 3 uses onCheckedChange, not onClick
        const handleCheckboxChange = useCallback(() => {
            handleParentToggle();
        }, [handleParentToggle]);

        return (
            <VStack align="stretch" w="100%" gap={0}>
                <HStack
                    w="100%"
                    p={2}
                    pl={level * 4 + 2}
                    _hover={{ bg: "whiteAlpha.200" }}
                    cursor="pointer"
                    borderRadius="md"
                    transition="all 0.2s"
                    onClick={hasChildren ? toggleExpand : undefined}
                >
                    <Checkbox.Root
                        // ✅ Controlled state (not checked/onClick)
                        checked={isParentSelected || allChildrenSelected}
                        onCheckedChange={handleCheckboxChange}
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control borderColor="white">
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                        <Checkbox.Label color="white">{service.name}</Checkbox.Label>
                    </Checkbox.Root>

                    {hasChildren && (
                        <Box color="white" fontSize="lg" ml="auto">
                            {open ? <FaUpLong /> : <FaDownLong />}
                        </Box>
                    )}
                </HStack>

                {hasChildren && (
                    <Collapsible.Root open={open}>
                        <Collapsible.Content>
                            <VStack align="stretch" w="100%" gap={0} pl={4}>
                                {service.children!.map((child) => (
                                    <ServiceItem
                                        key={child.id}
                                        service={child}
                                        selectedServices={selectedServices}
                                        onToggle={onToggle}
                                        level={level + 1}
                                    />
                                ))}
                            </VStack>
                        </Collapsible.Content>
                    </Collapsible.Root>
                )}
            </VStack>
        );
    }
);

ServiceItem.displayName = "ServiceItem";

interface ServiceSelectorProps {
    selectedServices: Set<string>;
    onServicesChange: (services: Set<string>) => void;
    placeholder?: string;
}

export const ServiceSelector = memo(
    ({
        selectedServices,
        onServicesChange,
        placeholder = "Select Services",
    }: ServiceSelectorProps) => {
        const { open, onToggle } = useDisclosure();

        const handleToggle = useCallback(
            (id: string) => {
                const newSelected = new Set(selectedServices);
                newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
                onServicesChange(newSelected);
            },
            [selectedServices, onServicesChange]
        );

        const getSelectedNames = useCallback(() => {
            const names: string[] = [];
            SERVICES_DATA.forEach((service) => {
                if (selectedServices.has(service.id)) names.push(service.name);
                service.children?.forEach((child) => {
                    if (selectedServices.has(child.id)) names.push(child.name);
                });
            });
            return names;
        }, [selectedServices]);

        const selectedNames = getSelectedNames();
        const displayText =
            selectedNames.length > 0 ? selectedNames.join(", ") : placeholder;

        return (
            <Box position="relative" w="100%" mt={4}>
                <Box
                    as="button"
                    w="100%"
                    p={4}
                    bg="transparent"
                    border="2px solid white"
                    borderRadius="xl"
                    color="white"
                    textAlign="start"
                    cursor="pointer"
                    onClick={onToggle}
                    _hover={{
                        borderColor: "whiteAlpha.800",
                        bg: "whiteAlpha.100",
                    }}
                    transition="all 0.2s ease"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text
                        fontSize="sm"
                        opacity={selectedNames.length > 0 ? 1 : 0.9}
                        flex={1}
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        {displayText}
                    </Text>
                    <Box ml={2}>
                        {open ? <FaUpLong /> : <FaDownLong />}
                    </Box>
                </Box>

                <Collapsible.Root open={open}>
                    <Collapsible.Content>
                        <Box
                            position="absolute"
                            top="100%"
                            left={0}
                            right={0}
                            mt={2}
                            bg="rgba(0, 0, 0, 0.9)"
                            backdropFilter="blur(10px)"
                            border="2px solid white"
                            borderRadius="xl"
                            maxH="400px"
                            overflowY="auto"
                            zIndex={10}
                            boxShadow="0 8px 24px rgba(0, 0, 0, 0.4)"
                        >
                            <VStack align="stretch" p={3} gap={1}>
                                {SERVICES_DATA.map((service) => (
                                    <ServiceItem
                                        key={service.id}
                                        service={service}
                                        selectedServices={selectedServices}
                                        onToggle={handleToggle}
                                    />
                                ))}
                            </VStack>
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>
            </Box>
        );
    }
);

ServiceSelector.displayName = "ServiceSelector";
