import {
    Avatar,
    Box,
    Button,
    Container,
    Flex,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

import Image from "next/image";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
    >
        {children}
    </Link>
);

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box
                bg={useColorModeValue("gray.100", "gray.900")}
                p={6}
                m={4}
                rounded={"xl"}
                boxShadow={"2xl"}
            >
                <Flex
                    h={110}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Link href="/">
                        <Box>
                            <Image
                                src={"/logo-sekaidotid.avif"}
                                alt={"Logo SEKAI.ID"}
                                width={350}
                                height={100}
                            />
                        </Box>
                    </Link>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <AnimatePresence exitBeforeEnter initial={false}>
                                <motion.div
                                    style={{ display: "inline-block" }}
                                    key={useColorModeValue("light", "dark")}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <IconButton
                                        aria-label="Toggle theme"
                                        colorScheme={useColorModeValue(
                                            "purple",
                                            "orange",
                                        )}
                                        icon={useColorModeValue(
                                            <FaMoon />,
                                            <FaSun />,
                                        )}
                                        onClick={toggleColorMode}
                                    ></IconButton>
                                </motion.div>
                            </AnimatePresence>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <FaBars />
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <Link href="portfolio">
                                        <MenuItem>Portfolio</MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
