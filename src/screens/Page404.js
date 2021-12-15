import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heading, Text, Image, Stack } from "@chakra-ui/react";
import img404 from "../assets/404image.png";

export default function Page404() {
  return (
    <div>
      <NavBar />
      <Stack
        w="100%"
        h="100%"
        mt="50px"
        mb="50px"
        justify="center"
        align="center"
      >
        <Image src={img404} alt="404" w="30%" m="auto" />
        <Heading textAlign="center" color="green.400">
          THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.
        </Heading>
        <Text textAlign="center" fontSize="2xl" color={"gray.600"}>
          You may have mistyped the address or the page may have moved.
        </Text>
      </Stack>
      <Footer />
    </div>
  );
}
