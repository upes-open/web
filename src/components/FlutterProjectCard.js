import { Heading, Box, Text, Flex } from "@chakra-ui/react";

import { FlutterProjectData } from "../data/FlutterProjectData";

export default function FlutterProjectCard() {
  return (
    <div>
      <Flex flexWrap={"wrap"} justifyContent={"center"} py={2}>
        {FlutterProjectData.map((data) => (
          <Box
            maxW={"32rem"}
            margin={3}
            w={"full"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            _hover={{
              boxShadow: "0 12px 25px -12px #48bb78",
            }}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"} marginBottom={3}>
              {data.name}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              {data.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </div>
  );
}
