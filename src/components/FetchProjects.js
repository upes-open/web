import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
import { Box, Text, Link, Button, Stack, Heading } from "@chakra-ui/react";
import TextTransition, { presets } from "react-text-transition";

import Spinner from "./Spinner";

const TEXTS = ["AWARE", "ADOPT", "CONTRIBUTE"];

const FetchProjects = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = async () => {
    const fetchResult = await axios.get(
      "https://api.github.com/users/upes-open/repos"
    );
    const fetchData = fetchResult.data;
    console.log(fetchData);
    // console.log(fetchData[0].name);
    // fetchData = Object.keys(fetchData);

    setData(fetchData);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetch();
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <ChakraProvider>
      <Container maxW="80rem" centerContent>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "3xl", md: "5xl" }}
          lineHeight={"110%"}
          color={"green"}
          marginBottom={4}
        >
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.stiff}
          />{" "}
        </Heading>
        <SimpleGrid columns={[1, 2, 1, 2]}>
          {console.log(data)}
          {data.map((result) => (
            <Box
              p={4}
              display={{ md: "flex" }}
              maxWidth="32rem"
              borderWidth={2}
              margin={2}
            >
              <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
              >
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  {result.name}
                </Text>
                <Text my={2} color="gray.500">
                  {result.description}
                </Text>

                <Button
                  maxWidth="100px"
                  my={2}
                  colorScheme="green"
                  variant="solid"
                >
                  <Link isExternal href={result.html_url}>
                    Read More
                  </Link>
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default FetchProjects;
