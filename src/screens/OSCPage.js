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
          <a>Repositories will be visible after orientaton ceremony</a>
          <Text px={3} align="center" pb={3}>
            <a>Difficulty:</a>
            <ul>
              <li>
                <a>Easy: </a>
                <a>10 points</a>
              </li>
              <li>
                <a>Medium: </a>
                <a>20 points</a>
              </li>
              <li>
                <a>Hard: </a>
                <a>40 points</a>
              </li>
              <li>
                <a>Streak: </a>
                <a>50 points</a>
              </li>
            </ul>
          </Text>
          <a>Bonus 30 points for first commit in the Repositories.</a>
          <a>Star ⭐ and Fork the repository to earn bonus points.</a>
          <a>Participation certificate will be given to all contributors.</a>
          <a>
            Participating in fun events that will take place on every weekend
            where you can win extra points.
          </a>
          <br />
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
      </Stack>
      <OSCStats />
      <OSCProjectsCard />
      <Footer />
    </div>
  );
}
