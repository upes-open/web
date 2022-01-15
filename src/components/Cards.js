/* import Image from "../assets/maintain.svg"; */
import * as React from "react";
/* import icon */

import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Image,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Cards() {
  return (
    /* box of color green */
    <>
      <Container maxW="80vw" centerContent>
    <SimpleGrid columns={2} spacing={10} >  

    <Box
        maxW={"30vw"}
    
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        m={10}
        backgroundColor={"white.100"}
        overflow={"hidden"}
      >
        <Box h={"30vh"} mb={6}>
          <Image
            src={
              "https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg"
            }
            h={"full"}
            w={"full"}
            layout={"fill"}
            overflow={"hidden"}
          />
        </Box>
        <Stack>
          {/* add upper margin to heading */}
          <Heading
            fontWeight={600}
            fontSize={"4xl"}
            fontFamily={"body"}
            color={"green"}
            marginTop={1}
            textAlign={"center"}
          >
            Event name
          </Heading>

          <Text color={"gray.500"} textAlign={"center"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          {/* events date */}
          <Text color={"gray.500"} fontWeight={600} textAlign={"center"}>
            Date: xx/xx/xxxx
          </Text>

          {/* adding socialButton twitter, instagram, linkedin */}

          <Box d={"flex"} justifyContent={"center"}>
            <a href="https://github.com/Joeyryanbridges">
              <Image
                src={
                  "https://img.icons8.com/cute-clipart/64/000000/twitter.png"
                }
                size={"10px"}
                p={2}
              />
            </a>

            <Image
              src={"https://img.icons8.com/cute-clipart/64/000000/linkedin.png"}
              size={"10px"}
              p={2}
            />
            <Image
              src={
                "https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"
              }
              size={"10px"}
              p={2}
            />
          </Box>

          {/* register button */}
          <Button
            mt={4}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(80 200 120 / 48%), 0 10px 10px -5px rgb(80 200 120 / 43%)"
            }
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Register
          </Button>
        </Stack>
      </Box> <Box
        maxW={"30vw"}
    
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        m={10}
        backgroundColor={"white.100"}
        overflow={"hidden"}
      >
        <Box h={"30vh"} mb={6}>
          <Image
            src={
              "https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg"
            }
            h={"full"}
            w={"full"}
            layout={"fill"}
            overflow={"hidden"}
          />
        </Box>
        <Stack>
          {/* add upper margin to heading */}
          <Heading
            fontWeight={600}
            fontSize={"4xl"}
            fontFamily={"body"}
            color={"green"}
            marginTop={1}
            textAlign={"center"}
          >
            Event name
          </Heading>

          <Text color={"gray.500"} textAlign={"center"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          {/* events date */}
          <Text color={"gray.500"} fontWeight={600} textAlign={"center"}>
            Date: xx/xx/xxxx
          </Text>

          {/* adding socialButton twitter, instagram, linkedin */}

          <Box d={"flex"} justifyContent={"center"}>
            <a href="https://github.com/Joeyryanbridges">
              <Image
                src={
                  "https://img.icons8.com/cute-clipart/64/000000/twitter.png"
                }
                size={"10px"}
                p={2}
              />
            </a>

            <Image
              src={"https://img.icons8.com/cute-clipart/64/000000/linkedin.png"}
              size={"10px"}
              p={2}
            />
            <Image
              src={
                "https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"
              }
              size={"10px"}
              p={2}
            />
          </Box>

          {/* register button */}
          <Button
            mt={4}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(80 200 120 / 48%), 0 10px 10px -5px rgb(80 200 120 / 43%)"
            }
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Register
          </Button>
        </Stack>
      </Box>
      {/* 3rd */}
      <Box
        maxW={"30vw"}
    
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        m={10}
        backgroundColor={"white.100"}
        overflow={"hidden"}
      >
        <Box h={"30vh"} mb={6}>
          <Image
            src={
              "https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg"
            }
            h={"full"}
            w={"full"}
            layout={"fill"}
            overflow={"hidden"}
          />
        </Box>
        <Stack>
          {/* add upper margin to heading */}
          <Heading
            fontWeight={600}
            fontSize={"4xl"}
            fontFamily={"body"}
            color={"green"}
            marginTop={1}
            textAlign={"center"}
          >
            Event name
          </Heading>

          <Text color={"gray.500"} textAlign={"center"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          {/* events date */}
          <Text color={"gray.500"} fontWeight={600} textAlign={"center"}>
            Date: xx/xx/xxxx
          </Text>

          {/* adding socialButton twitter, instagram, linkedin */}

          <Box d={"flex"} justifyContent={"center"}>
            <a href="https://github.com/Joeyryanbridges">
              <Image
                src={
                  "https://img.icons8.com/cute-clipart/64/000000/twitter.png"
                }
                size={"10px"}
                p={2}
              />
            </a>

            <Image
              src={"https://img.icons8.com/cute-clipart/64/000000/linkedin.png"}
              size={"10px"}
              p={2}
            />
            <Image
              src={
                "https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"
              }
              size={"10px"}
              p={2}
            />
          </Box>

          {/* register button */}
          <Button
            mt={4}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(80 200 120 / 48%), 0 10px 10px -5px rgb(80 200 120 / 43%)"
            }
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Register
          </Button>
        </Stack>
      </Box>
      {/* 4th */}
      <Box
        maxW={"30vw"}
    
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        m={10}
        backgroundColor={"white.100"}
        overflow={"hidden"}
      >
        <Box h={"30vh"} mb={6}>
          <Image
            src={
              "https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg"
            }
            h={"full"}
            w={"full"}
            layout={"fill"}
            overflow={"hidden"}
          />
        </Box>
        <Stack>
          {/* add upper margin to heading */}
          <Heading
            fontWeight={600}
            fontSize={"4xl"}
            fontFamily={"body"}
            color={"green"}
            marginTop={1}
            textAlign={"center"}
          >
            Event name
          </Heading>

          <Text color={"gray.500"} textAlign={"center"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          {/* events date */}
          <Text color={"gray.500"} fontWeight={600} textAlign={"center"}>
            Date: xx/xx/xxxx
          </Text>

          {/* adding socialButton twitter, instagram, linkedin */}

          <Box d={"flex"} justifyContent={"center"}>
            <a href="https://github.com/Joeyryanbridges">
              <Image
                src={
                  "https://img.icons8.com/cute-clipart/64/000000/twitter.png"
                }
                size={"10px"}
                p={2}
              />
            </a>

            <Image
              src={"https://img.icons8.com/cute-clipart/64/000000/linkedin.png"}
              size={"10px"}
              p={2}
            />
            <Image
              src={
                "https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"
              }
              size={"10px"}
              p={2}
            />
          </Box>

          {/* register button */}
          <Button
            mt={4}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(80 200 120 / 48%), 0 10px 10px -5px rgb(80 200 120 / 43%)"
            }
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Register
          </Button>
        </Stack>
      </Box>
      
  
    </SimpleGrid>
    </Container>
    </>
  );
}
