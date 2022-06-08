import { Heading, Box, Text, Button, Flex } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";

import { OSCProjectsData } from "../data/OSCProjectsData";

export default function OSCProjectsCard() {
  return (
    <div>
      <Flex flexWrap={"wrap"} justifyContent={"center"} py={2}>
        {OSCProjectsData.map((data) => (
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
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              Tech Stack: {data.teck_stack}
            </Text>
            <Button
              //   bg="#454FBF"
              //   colorScheme="purple"
              leftIcon={<SiGithub />}
              colorScheme="whatsapp"
              onClick={() => {
                window.open(data.url);
              }}
            >
              GitHub
            </Button>
          </Box>
        ))}
      </Flex>
    </div>
  );
}
