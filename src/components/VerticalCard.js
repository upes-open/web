import { Heading, Box, Text, Flex, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import * as React from "react";
import {VerticalData} from "../data/VerticalData";

export default function VerticalCard(){
    return(
        <>
      <Container maxW="80vw" centerContent py={8}>
        <SimpleGrid columns={[1, null, 2]} spacing={20}>
          {VerticalData.map((data) => (
            <Box
              maxW="sm"
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              p="50px"
              backgroundColor={"white.100"}
              overflow={"hidden"}
            >
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
                  {data.description}
                </Text>
              </Stack>
            </Box>
          ))}
          </SimpleGrid>
        </Container>
     </> 
    );
}
