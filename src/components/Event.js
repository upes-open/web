import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";

export default function Event() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={"5xl"}
          py={10}
          color={"green.400"}
          fontWeight={"bold"}
        >
          Open Event
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Text>
      </Stack>
    </Box>
  );
}
