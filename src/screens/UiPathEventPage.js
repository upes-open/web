import React from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import UiPathbanner from "../assets/UiPathbanner.jpeg";

import {
  Heading,
  Text,
  Image,
  Stack,
  Wrap,
  Button,
  WrapItem,
} from "@chakra-ui/react";

import { SiWhatsapp } from "react-icons/si";


export default function UiPathEventPage() {
    return (
      <div>
        <NavBar />
        <Stack direction="column">
          {/* add banner image */}
          <Image src={UiPathbanner} alt="UiPath Workshop banner" width="100%" height="100%" />
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
          >Uncovering RPA and UiPath
          </Heading>
          <Text px={3} align="center" py={3} padding="0 15%">
          To broaden your learning insights even further, OPEN Community of UPES is re-entering the workshop arena with another astounding event “Uncovering RPA”. 
          This one-day workshop aims to illuminate peers about the application of RPA in various fields and how this trending technology automates monotonous tasks.
          </Text>
          <Text px={3} align="center" py={3} padding="0 15%">
          This workshop will not only help you to learn everything from scratch but will also make you 
          understand its long term benefits in your future business or career. A certificate of participation 
          will be awarded to all the participants. Also, the winners of Quiz will be getting certificates 
          of appreciation.
          </Text>
          <Text px={3} align="center" py={3} padding="0 15%">
          What are you still waiting for? Register yourself to be one step ahead of the crowd.
          </Text>
          <Text px={3} align="center" py={3} padding="0 15%">
         Date: 23/01/2023
         Time: 14:00
          </Text>
        </Stack>
        <Wrap spacing={7} justify="center" py={2}>
          <WrapItem>
            <Button bg="green.400" colorScheme="green"
               onClick={() => {
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSddNCLgkAE4zsWoGuWlrevNv5qzwaeLnhkVMqJGaB8gLwDw_g/viewform?usp=sf_link");
              }}
            >
              Register 
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              onClick={() => {
                window.open("https://chat.whatsapp.com/DcJ1ybgpIfQ7UelhAmyqm3");
              }}
              bg="green.400"
              colorScheme="green"
              leftIcon={<SiWhatsapp />}
            >
              Whatsapp
            </Button>
          </WrapItem>
        </Wrap>
      </Stack>
      <Footer />
    </div>
    );
            }

    
        
         

          
