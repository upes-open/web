import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Open Source{" "}
          <Text as={"span"} color={"green.400"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          OPEN is an initiative started with the aim of contributing to the Open
          Source community by providing a platform for training, guidance and
          awareness about various possibilities in the world of software to
          students and enthusiasts. We are motivated to provide a holistic
          environment to develop programs that can solve real-world problems
          while enhancing your communication, teamwork, leadership, ideation and
          other soft skills.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"green"}
            bg={"green.400"}
            _hover={{ bg: "green.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex alig={"center"} w={"full"} flexWrap={"wrap"}>
          <Box>
            <Image
              h={"200"}
              w={"200"}
              src="https://raw.githubusercontent.com/upes-open/upes-open/main/open.png"
              alt="opensource"
            />
          </Box>
          <Box>
            <Image
              h={"200"}
              w={"200"}
              src="https://raw.githubusercontent.com/upes-open/upes-open/main/open1.png"
              alt="opensource"
            />
          </Box>

          <Box>
            <Image
              h={"200"}
              w={"200"}
              src="https://raw.githubusercontent.com/upes-open/upes-open/main/open2.png"
              alt="opensource"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
