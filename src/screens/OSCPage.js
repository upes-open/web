import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import OSCProjectsCard from "../components/OSCProjectsCard";
import OSCStats from "../components/OSCStats";
import banner from "../assets/banner.png";

import {
  Heading,
  Text,
  Image,
  Stack,
  Wrap,
  Button,
  WrapItem,
} from "@chakra-ui/react";

import { SiDiscord } from "react-icons/si";

export default function OSCPage() {
  return (
    <div>
      <NavBar />
      <Stack direction="column">
        {/* add banner image */}
        <Image src={banner} alt="OSC banner" width="100%" height="100%" />
        {/* center heading */}
        <Stack
          direction="column"
          justify="center"
          align="center"
          marginTop="1rem"
          marginBottom="1rem"
        >
          <Heading
            as="h1"
            size="2xl"
            marginBottom="1rem"
            my={3}
            color="green.400"
          >
            Open Summer of Code
          </Heading>
          <Text px={3} align="center" py={3}>
            Open Summer of Code is an event that runs from June to July 2022.
            Where students have opportunity to learn and grow through the open
            source community.
          </Text>
        </Stack>

        <Wrap spacing={7} justify="center" py={2}>
          <WrapItem>
            <Link to="/osc/register">
              <Button bg="green.400" colorScheme="green">
                Register
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Button
              onClick={() => {
                window.open("https://discord.gg/6kMcQJPUaj");
              }}
              bg="#454FBF"
              colorScheme="purple"
              leftIcon={<SiDiscord />}
            >
              Discord
            </Button>
          </WrapItem>
        </Wrap>
        <OSCStats />
        <OSCProjectsCard />
      </Stack>
      <Footer />
    </div>
  );
}
