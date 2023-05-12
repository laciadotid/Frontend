import * as React from "react";

import Head from "next/head";
import Script from "next/script";
import { client } from "@/components/cms";

class Sirah extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="theme-color" content="#E4002B" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link
                        rel="icon"
                        href="favicon.avif"
                        type="image/avif"
                    ></link>
                </Head>
            </div>
        );
    }
}

export default Sirah;
