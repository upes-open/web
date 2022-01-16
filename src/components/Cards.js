import * as React from "react";
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
import { EventsData } from "../data/EventsData";

function isRegistrationOpen(registerationFlag) {
  if (registerationFlag) {
    return (
      <Button
        mt={4}
        fontSize={"sm"}
        rounded={"full"}
        bg={"green.400"}
        onClick={() => {
          window.location.href = registerationFlag;
        }}
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
    );
  } else {
    return (
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
        Registeration Closed
      </Button>
    );
  }
}

export default function Cards() {
  return (
    /* box of color green */
    <>
      <Container maxW="80vw" centerContent py={8}>
        <SimpleGrid columns={[1, null, 2]} spacing={20}>
          {EventsData.map((data) => (
            <Box
              maxW="sm"
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              p="50px"
              backgroundColor={"white.100"}
              overflow={"hidden"}
            >
              <Box h={"30vh"} mb={6}>
                <Image
                  src={data.imageURL}
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
                  {data.name}
                </Heading>
                <Text color={"gray.500"} textAlign={"center"}>
                  {data.text}
                </Text>
                {/* events date */}
                <Text color={"gray.500"} fontWeight={600} textAlign={"center"}>
                  Date: {data.date}
                </Text>
                {/* adding socialButton twitter, instagram, linkedin */}
                {/*
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
                    src={
                      "https://img.icons8.com/cute-clipart/64/000000/linkedin.png"
                    }
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
                */}
                {/* register button */}
                {isRegistrationOpen(data.registeration)}
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
