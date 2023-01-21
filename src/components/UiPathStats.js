import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
  } from "@chakra-ui/react";
  import { BsFillCalendarFill } from "react-icons/bs";
  import { GoProject } from "react-icons/go";

function UiPathStatsCard({ title, stat, icon }) {
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

  export default function UiPathStats() {
    return (
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 30 }}>
       
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 5 }}>
          <FlutterStatsCard
            title={"Starts from"}
            stat={"25 / 8 / 2022"}
            icon={<BsFillCalendarFill size={"3em"} />}
          />
          <UiPathStatsCard
            title={"Projects"}
            stat={"2"}
            icon={<GoProject size={"3em"} />}
          />
         
          <br />
        </SimpleGrid>
      </Box>
    );
  }
  