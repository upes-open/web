import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heading, Text, Image, Stack } from "@chakra-ui/react";

export default function Page404() {
  return (
    <div>
      <NavBar />
      <Stack>
        <Heading textAlign="center" color="green.400">
          THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.
        </Heading>
        <Text textAlign="center" fontSize="2xl" color={"gray.600"}>
          YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED.
        </Text>
      </Stack>
      <Footer />
    </div>
  );
}
