import * as React from "react";

import { Box, Center, HStack } from '@chakra-ui/react';
import {
    FaDiscord,
    FaFacebook,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaTelegram,
    FaTwitch,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

import siteConfig from "~/site-config";

class Footer extends React.Component {
  render() {
    return (
        <Center>
            <Box
                w={"full"}
                boxShadow={"xl"}
                rounded={"xl"}
                p={6}
                m={4}
                overflow={"hidden"}
            >
                <div className="relative p-6 sm:px-6 lg:px-8">
                    <HStack>
                        <a
                            className="inline-block px-6"
                            href={siteConfig.socials.Discord}
                        >
                            <FaDiscord className="social" title="Discord" />
                        </a>
                        &nbsp;
                        <a
                            className="inline-block px-6"
                            href={siteConfig.socials.Facebook}
                        >
                            <FaFacebook className="social" title="Facebook" />
                        </a>
                        &nbsp;
                        <a
                            className="inline-block px-6"
                            href={siteConfig.socials.Instagram}
                        >
                            <FaInstagram className="social" title="Instagram" />
                        </a>
                        &nbsp;
                        <a
                            className="inline-block px-6"
                            href={siteConfig.socials.GitHub}
                        >
                            <FaGithub className="social" title="GitHub" />
                        </a>
                        &nbsp;
                        <a
                            className="inline-block px-6"
                            href={siteConfig.socials.GitLab}
                        >
                            <FaGitlab className="social" title="GitLab" />
                        </a>
                        &nbsp;
                        <a
                            className="inline-block px-6"
                            href={siteConfig.socials.Twitch}
                        >
                            <FaTwitch className="social" title="Twitch" />
                        </a>
                        &nbsp;
                        <a
                            className="inline-block px-6"
                            href={siteConfig.socials.Twitter}
                        >
                            <FaTwitter className="social" title="Twitter" />
                        </a>
                        &nbsp;
                        <a
                            className="inline-block px-6"
                            href={siteConfig.socials.Youtube}
                        >
                            <FaYoutube className="social" title="Youtube" />
                        </a>
                    </HStack>
                </div>
                <br/>
                <div>
                    <a
                        href={siteConfig.donate.saweria}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Dukung {siteConfig.title} Via <b>saweria.co</b>
                    </a>
                    <br />
                    <a
                        href={siteConfig.donate.streamlabs}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Dukung {siteConfig.title} Via <b>streamlabs</b>
                    </a>
                </div>
                ©️ 2018 - {new Date().getFullYear()} {siteConfig.title} - &nbsp;
                <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                    CC BY-SA 4.0
                </a>
                <br />
                <a href={siteConfig.repository}>
                    &#12304; <b>Source Code on GitLab</b> &#12305;
                </a>
            </Box>
        </Center>
    );
  }
}

export default Footer;
