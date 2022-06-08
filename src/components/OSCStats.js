import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";
import { GoProject } from "react-icons/go";

function OSCStatsCard({ title, stat, icon }) {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={"green.800"}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={"green.400"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function OSCStats() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        color={"black.400"}
        fontWeight={"bold"}
      >
        Our community is growing, you could be too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <OSCStatsCard
          title={"Starts from"}
          stat={"15 / 5 / 2022"}
          icon={<BsFillCalendarFill size={"3em"} />}
        />
        <OSCStatsCard
          title={"Projects"}
          stat={"8"}
          icon={<GoProject size={"3em"} />}
        />
        <OSCStatsCard
          title={"Prizes"}
          stat={"₹5500+"}
          icon={<AiFillTrophy size={"3em"} />}
        />
        <br />
      </SimpleGrid>
    </Box>
  );
}
