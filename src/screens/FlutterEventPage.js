import React from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import flutterbanner from "../assets/flutterbanner.png";

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
import FlutterStats from "../components/FlutterStats";
import FlutterProjectCard from "../components/FlutterProjectCard";

export default function FlutterEventPage() {
    return (
      <div>
        <NavBar />
        <Stack direction="column">
          {/* add banner image */}
          <Image src={flutterbanner} alt="Flutter Workshop banner" width="100%" height="100%" />
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
            Flutter Workshop
          </Heading>
          <Text px={3} align="center" py={3} padding="0 15%">
          To make your great beginnings more insightful and memorable, OPEN Community of UPES is back once again with another astounding event "THE FLUTTER WORKSHOP".  
          It’s a two-day long workshop, dedicated to address the students about this beautiful UI Toolkit that makes it easy for developers to design appealing interfaces 
          that can be used to build native-looking Android and iOS applications from the same code base.
          </Text>
          <Text px={3} align="center" py={3} padding="0 15%">
          Get a chance to learn flutter from scratch, work on hands-on projects, and get your own major 
          project as an output ready in your hands by the end of the workshop. A certificate of 
          participation will be awarded to all the participants. Also, the top performers in the workshop 
          will be getting some amazing goodies along with a certificate of appreciation.
          </Text>
          <Text px={3} align="center" py={3} padding="0 15%">
          Attending the workshop won’t hinder your attendance as it would be provided to the participants 
          who make it till the end of the workshop. So, what are you waiting for? Buckle up and register 
          yourself for this amazing workshop.
          </Text>
        </Stack>
        <Wrap spacing={7} justify="center" py={2}>
          <WrapItem>
            <Button bg="green.400" colorScheme="green"
               onClick={() => {
                window.open("https://forms.gle/vpsbQ4iXHzrLdnCG9");
              }}
            >
              Register 
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              onClick={() => {
                window.open("https://chat.whatsapp.com/GVxXSDfL7l17KFvyyBOhrS");
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
      <FlutterStats />
      <FlutterProjectCard />
      <Footer />
    </div>
    );
            }

    
        
         

          
