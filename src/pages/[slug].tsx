import * as React from "react";

import {
    Box,
    Center,
    HStack,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    FaFacebook,
    FaLinkedin,
    FaPinterest,
    FaTelegram,
    FaTwitter,
} from "react-icons/fa";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client, gql } from "@/components/cms";

import Adsense from "@/components/adsense";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { Post } from "../types";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import siteConfig from "~/site-config";

interface BlogPostPageProps {
    post: Post;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const data = await client.request(/* GraphQL */ `
        {
            postCollection(order: date_DESC) {
                items {
                    slug
                }
            }
        }
    `);
    const items = data.postCollection.items as Post[];

    return {
        paths: items.map(({ slug }) => ({ params: { slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
    params,
}) => {
    const slug = params.slug as string;
    const data = await gql`

{
  postCollection(where: {slug: "${slug}"}) {
    items {
      title
      slug
      featuredImage {
        url
      }
      date
      category {
        title
        slug
      }
      author {
        name
        slug
        photo {
          url
        }
      }
      content
      sourceName
      sourceUrl
    }
  }
}

`;
    return {
        props: {
            post: data.postCollection.items[0] as Post,
        },
    };
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
    return (
        <div>
            <NextSeo
                title={post.title + " - " + siteConfig.title}
                openGraph={{
                    type: "website",
                    locale: siteConfig.locale,
                    title: post.title,
                    images: [
                        {
                            url:
                                post.featuredImage.url +
                                "?fit=fill&fm=avif&w=1280&h=720&q=30",
                            width: 640,
                            height: 360,
                            alt: post.title,
                        },
                    ],
                    url: siteConfig.url + post.slug,
                    site_name: siteConfig.title,
                }}
                twitter={{
                    cardType: "summary_large_image",
                    handle: "@" + siteConfig.twitterUsername,
                    site: "@" + siteConfig.twitterUsername,
                }}
            />
            <div className="tx-5 card">
                <Adsense />

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
                                    post.featuredImage.url +
                                    "?fit=fill&fm=avif&w=480&h=270&q=30"
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
                                color={useColorModeValue("black", "white")}
                                fontSize={"2xl"}
                                fontFamily={"body"}
                            >
                                {post.title}
                            </Heading>
                            <Text color={useColorModeValue("black", "white")}>
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
                                    color={useColorModeValue("black", "white")}
                                >
                                    {post.author.name}
                                </Text>
                                <Text
                                    color={useColorModeValue("black", "white")}
                                >
                                    {post.date}
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
                <Center>
                    <Box
                        w={"full"}
                        boxShadow={"xl"}
                        rounded={"xl"}
                        p={4}
                        m={2}
                        overflow={"hidden"}
                        bg={useColorModeValue("gray.100", "gray.900")}
                    >
                        Bagikan
                        <HStack spacing={"20px"}>
                            <Box>
                                <a
                                    className="inline-block px-4"
                                    href={
                                        "https://www.facebook.com/sharer.php?u=" +
                                        siteConfig.url +
                                        "/" +
                                        post.slug
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook
                                        className="social"
                                        title="Bagikan Ke Facebook"
                                    />
                                </a>
                            </Box>
                            <Box>
                                <a
                                    className="inline-block px-4"
                                    href={
                                        "https://twitter.com/intent/tweet?url=" +
                                        siteConfig.url +
                                        "/" +
                                        post.slug +
                                        "&text=" +
                                        post.title +
                                        "&via=" +
                                        siteConfig.twitterUsername
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter
                                        className="social"
                                        title="Bagikan Ke Twitter"
                                    />
                                </a>
                            </Box>
                            <Box>
                                <a
                                    className="inline-block px-4"
                                    href={
                                        "https://www.pinterest.com/pin/create/button?url=" +
                                        siteConfig.url +
                                        "/" +
                                        post.slug +
                                        "&media=" +
                                        post.featuredImage +
                                        "&description=" +
                                        post.title
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaPinterest
                                        className="social"
                                        title="Bagikan Ke Pinterest"
                                    />
                                </a>
                            </Box>
                            <Box>
                                <a
                                    className="inline-block px-4"
                                    href={
                                        "https://www.linkedin.com/shareArticle?url=" +
                                        siteConfig.url +
                                        "/" +
                                        post.slug +
                                        "&title=" +
                                        post.title
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin
                                        className="social"
                                        title="Bagikan Ke Linkedin"
                                    />
                                </a>
                            </Box>
                            <Box>
                                <a
                                    className="inline-block px-4"
                                    href={
                                        "https://telegram.me/share/url?url=" +
                                        siteConfig.url +
                                        "/" +
                                        post.slug +
                                        "&text=" +
                                        post.title
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTelegram
                                        className="social"
                                        title="Bagikan Ke Telegram"
                                    />
                                </a>
                            </Box>
                        </HStack>
                    </Box>
                </Center>
                <Center>
                    <Box
                        w={"full"}
                        boxShadow={"xl"}
                        rounded={"xl"}
                        p={4}
                        m={2}
                        overflow={"hidden"}
                        bg={useColorModeValue("gray.100", "gray.900")}
                    >
                        <Adsense />
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {post.content}
                        </ReactMarkdown>
                    </Box>
                </Center>
                <Center>
                    <Box
                        w={"full"}
                        boxShadow={"xl"}
                        rounded={"xl"}
                        p={6}
                        m={4}
                        overflow={"hidden"}
                        bg={useColorModeValue("gray.100", "gray.900")}
                    >
                        Sumber :
                        {post.sourceName == null ? (
                            <a href={siteConfig.url}>
                                {"【" + siteConfig.title + "】"}
                            </a>
                        ) : (
                            <a
                                href={
                                    post.sourceUrl +
                                    "?utm_source=" +
                                    siteConfig.title +
                                    "&utm_medium=" +
                                    siteConfig.title +
                                    "_Source_Link&utm_campaign=" +
                                    siteConfig.title +
                                    "_Source_Link"
                                }
                            >
                                {"【" + post.sourceName + "】"}
                            </a>
                        )}
                    </Box>
                </Center>
                <Center>
                    <Box
                        w={"full"}
                        boxShadow={"xl"}
                        rounded={"xl"}
                        p={6}
                        m={4}
                        overflow={"hidden"}
                        bg={useColorModeValue("gray.100", "gray.900")}
                    >
                        <iframe
                            src="https://discordapp.com/widget?id=649626080692666368&theme=dark"
                            width="100%"
                            height="500"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        ></iframe>
                    </Box>
                </Center>
            </div>
            <Adsense />
        </div>
    );
};

export default BlogPostPage;
