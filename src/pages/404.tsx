import { Center, Heading, Text, VStack } from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function NotFound() {
    return (
        <Center>
            <NextSeo
                title="404 – SEKAI.ID"
                canonical="https://sekai.id/404"
                openGraph={{
                    url: "https://sekai.id/404",
                    title: "404 – SEKAI.ID",
                }}
            />
            <VStack>
                <Image
                    src="/404.avif"
                    alt="404 Not Found - Onodera Kosaki"
                    width={640}
                    height={360}
                />
                <Heading size="3xl">404</Heading>
                <Text mb={8}>Page not found</Text>
                <Link href="/">Return home</Link>
            </VStack>
        </Center>
    );
}
