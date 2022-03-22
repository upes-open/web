import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Flex,
  Container,
} from "@chakra-ui/react";
import { AlumniData } from "../data/AlumniData";

export default function AlumniCard() {
  return (
    <Container maxW="80rem" centerContent>
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "2xl", md: "5xl" }}
        lineHeight={"110%"}
        color={"green"}
        margin={6}
      >
        Alumni
      </Heading>
      <Flex flexWrap={"wrap"} justifyContent={"center"}>
        {AlumniData.map((data) => (
          <Box
            maxW={"320px"}
            margin={3}
            w={"full"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Avatar
              size={"xl"}
              src={data.imageURL}
              alt={"Avatar Alt"}
              mb={4}
              pos={"relative"}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: "green.300",
                border: "2px solid white",
                rounded: "full",
                pos: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {data.name}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              {data.designation}
            </Text>
            <Stack mt={8} direction={"row"} spacing={4}>
              <Button
                flex={1}
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
                <a href={data.LinkedIn} target="blank">
                  LinkedIn
                </a>
              </Button>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}
