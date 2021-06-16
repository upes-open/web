import logo from '../assets/logo.png'
import React from "react";
import { Box } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <a href="/web"><img href="/web" width='200px' height='60px' src={logo} alt="Open Community Logo"/></a>
    </Box>
  );
}