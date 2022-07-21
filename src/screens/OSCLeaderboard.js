import React from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from "../assets/banner.png";
import { OSCLeaderboardData } from "../data/OSCLeaderboardData";
import medal from "../assets/medal.svg";
import goldmedal from "../assets/goldmedal.svg";
import bronzemedal from "../assets/bronzemedal.svg";

import {
  Heading,
  Text,
  Image,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Wrap,
  WrapItem,
  Center,
  Box,
} from "@chakra-ui/react";

function OSCLeaderboardTable() {
  return (
    <TableContainer>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th isNumeric>Points</Th>
          </Tr>
        </Thead>
        {OSCLeaderboardData.map((data) => (
          <Tbody>
            <Tr>
              <Td>{data.id}</Td>
              <Td>{data.name}</Td>
              <Td isNumeric>{data.points}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </TableContainer>
  );
}

export default function OSCLeaderboard() {
  return (
    <div>
      <NavBar />
      <div style={{ backgroundColor: "#48BB78" }}>
        <Stack direction="column">
          {/* add banner image */}
          <Image src={banner} alt="OSC banner" width="100%" height="100%" />
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
              color="white"
            >
              Open Summer of Code
            </Heading>
            <Heading as="h2" px={3} align="center" py={3} color="white">
              Leaderboards
            </Heading>
            <Wrap spacing="0px">
              <WrapItem>
                <Center
                  w="180px"
                  h="350px"
                  alignSelf={"flex-end"}
                  backgroundColor="white"
                  borderTopLeftRadius={"md"}
                  borderTopRightRadius={"md"}
                >
                  <div>
                    <Heading as="h3">Siddhant</Heading>
                    <br />
                    <Image
                      src={medal}
                      alt="medal"
                      width="100px"
                      height="100px"
                      style={{
                        filter: "invert(0.5)",
                      }}
                    />
                    <br />
                    <Text justify="center" align="center">
                      Second
                    </Text>{" "}
                  </div>
                </Center>
              </WrapItem>
              <WrapItem boxShadow={"lg"}>
                <Box
                  w="180px"
                  h="380px"
                  bg="white"
                  boxShadow={"lg"}
                  zIndex={999}
                  borderTopLeftRadius={"md"}
                  borderTopRightRadius={"md"}
                  justify="center"
                  align="center"
                >
                  <br />

                  <div>
                    <Heading as="h3" alignSelf={"flex-start"}>
                      Saarini
                    </Heading>
                    <br />
                    <Image
                      src={goldmedal}
                      alt="medal"
                      width="100px"
                      height="100px"
                    />
                    <br />
                    <Text>First</Text>{" "}
                  </div>
                </Box>
              </WrapItem>
              <WrapItem>
                <Center
                  w="180px"
                  h="320px"
                  bg="white"
                  alignSelf={"flex-end"}
                  borderTopLeftRadius={"md"}
                  borderTopRightRadius={"md"}
                >
                  <div>
                    <Heading as="h3">Snigdha</Heading>
                    <br />
                    <Image
                      src={bronzemedal}
                      alt="medal"
                      width="100px"
                      height="100px"
                    />
                    <br />
                    <Text justify="center" align="center">
                      Third
                    </Text>{" "}
                  </div>
                </Center>
              </WrapItem>
            </Wrap>
            <br />
            <div
              style={{
                borderWidth: "1px",
                borderRadius: "12px",
                backgroundColor: "#F8F8F8",
              }}
            >
              <OSCLeaderboardTable />
            </div>
          </Stack>
        </Stack>
        <br />
        <Footer />
      </div>
    </div>
  );
}
