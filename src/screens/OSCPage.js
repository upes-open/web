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
          <Text px={3} align="center" py={3}>
            The contributors will be judged based on the number of issues they
            solved and their difficulty.
          </Text>
          <br />
          <Heading as="h2" size="lg" marginBottom="1rem" my={3}>
            Rules and Rubrics:
          </Heading>
          <Text>Repositories will be visible after orientaton ceremony</Text>
          <Text px={3} align="center" pb={3}>
            <Text>Difficulty:</Text>
            <ul>
              <li>
                <Text>Easy: 10 points</Text>
              </li>
              <li>
                <Text>Medium: 20 points</Text>
              </li>
              <li>
                <Text>Hard: 40 points</Text>
              </li>
              <li>
                <Text>Streak: 50 points</Text>
              </li>
            </ul>
          </Text>
          <Text>Bonus 30 points for first commit in the Repositories.</Text>
          <Text>Star ⭐ and Fork the repository to earn bonus points.</Text>
          <Text>
            Participation certificate will be given to all contributors.
          </Text>
          <Text>
            Participating in fun events that will take place on every weekend
            where you can win extra points.
          </Text>
          <br />
        </Stack>

        <Wrap spacing={7} justify="center" py={2}>
          <WrapItem>
              <Button bg="green.400" colorScheme="green">
                Registeration Closed
              </Button>
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
      </Stack>
      <OSCStats />
      <OSCProjectsCard />
      <Footer />
    </div>
  );
}
