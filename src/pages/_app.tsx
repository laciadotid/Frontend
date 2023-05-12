// import "../stylesheets/html.css";

import * as React from "react";

import {
    Box,
    Center,
    ChakraProvider,
    extendTheme,
    useColorModeValue,
} from "@chakra-ui/react";

import Adsense from "@/components/adsense";
import { AppProps } from "next/app";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sirah from "@/components/sirah";

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <ChakraProvider resetCSS={true}>
          <div>
              <Sirah />
              <Center>
                  <Box
                      w={"100%"}
                      boxShadow={"2xl"}
                      rounded={"xl"}
                      p={6}
                      m={4}
                      overflow={"hidden"}
                  >
                      <Adsense />
                      <Navbar />
                      <Adsense />
                      <Component {...pageProps} />
                      <Adsense />
                      <Footer />
                  </Box>
              </Center>
          </div>
      </ChakraProvider>
  );
};

export default App;
