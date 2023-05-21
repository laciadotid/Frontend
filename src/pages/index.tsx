import * as React from "react";

import {
    Box,
    Center,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Post } from "../types";
import { client } from "@/components/cms";
import siteConfig from "site-config";

interface HomePageProps {
    posts: Post[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const data = await client.request(/* GraphQL */ `
        query Post {
            post {
                id
                title
                slug
                metaDescription
                featuredImage
                date
                user {
                    id
                    name
                }
                category {
                    id
                    title
                }
            }
        }
    `);

    return {
        props: {
            posts: data.post,
        },
        // revalidate: 60,
    };
};

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
    return (
        <div>
            {/* <NextSeo
                title={siteConfig.title}
                description={siteConfig.description}
                openGraph={{
                    type: "website",
                    locale: siteConfig.locale,
                    title: siteConfig.title,
                    images: [
                        {
                            url: `${siteConfig.frontend_url}/social.avif`,
                            width: 640,
                            height: 360,
                            alt: siteConfig.title,
                        },
                    ],
                    url: siteConfig.frontend_url,
                    site_name: siteConfig.title,
                }}
                twitter={{
                    cardType: "summary_large_image",
                    handle: "@" + siteConfig.twitterUsername,
                    site: "@" + siteConfig.twitterUsername,
                }}
            /> */}
            {posts.map((post, i) => (
                <div key={i}>
                    <Link href={post.slug}>
                        <Center>
                            <Box
                                w={"full"}
                                bg={useColorModeValue("gray.100", "gray.900")}
                                boxShadow={"xl"}
                                rounded={"xl"}
                                p={4}
                                m={2}
                                overflow={"hidden"}
                            >
                                <Center>
                                    <Image
                                        src={
                                            siteConfig.backend_url +
                                            "/fotoberita/" +
                                            post.featuredImage
                                        }
                                        alt={post.title}
                                        width={480}
                                        height={270}
                                    />
                                </Center>

                                <Stack>
                                    <Text
                                        color={"red.500"}
                                        textTransform={"uppercase"}
                                        fontWeight={800}
                                        fontSize={"sm"}
                                        letterSpacing={1.1}
                                    >
                                        {post.category.title}
                                    </Text>
                                    <Heading
                                        color={useColorModeValue(
                                            "black",
                                            "white",
                                        )}
                                        fontSize={"2xl"}
                                        fontFamily={"body"}
                                    >
                                        {post.title}
                                    </Heading>
                                    <Text
                                        color={useColorModeValue(
                                            "black",
                                            "white",
                                        )}
                                    >
                                        {post.metaDescription}
                                    </Text>
                                </Stack>
                                <Stack
                                    mt={6}
                                    direction={"row"}
                                    spacing={4}
                                    align={"center"}
                                >
                                    <Stack
                                        direction={"column"}
                                        spacing={0}
                                        fontSize={"sm"}
                                    >
                                        <Text
                                            fontWeight={600}
                                            color={useColorModeValue(
                                                "black",
                                                "white",
                                            )}
                                        >
                                            {post.user.name}
                                        </Text>
                                        <Text
                                            color={useColorModeValue(
                                                "black",
                                                "white",
                                            )}
                                        >
                                            {post.date}
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Center>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
