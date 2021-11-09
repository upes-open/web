import {
  FormControl,
  FormLabel,
  Box,
  Heading,
  Input,
  Image,
  Button,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function AuthenticationLogin() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.privatekey === "private key") {
      sessionStorage.setItem("lastname", data.privatekey);
      window.location.href = "/CreateEvents";
    } else {
      toast({
        title: "Incorrect Key!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <SimpleGrid
        width="full"
        align="center"
        justifyContent="center"
        columns={2}
        minChildWidth="350px"
        py={10}
        my={5}
      >
        <Box p={2} my={4}>
          <Image
            h={"342"}
            w={"500"}
            src="https://raw.githubusercontent.com/upes-open/web/dev/src/assets/authentication.png"
            alt=""
          />
        </Box>
        <Box
          maxWidth="500px"
          p={8}
          py={12}
          my={4}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mt={6}>
                <FormLabel py={2}>Private Key</FormLabel>
                <Input
                  type="password"
                  placeholder="**********"
                  {...register("privatekey")}
                />
              </FormControl>
              <Button
                width="full"
                mt={4}
                type="submit"
                colorScheme={"green"}
                bg={"green.400"}
              >
                Authenticate
              </Button>
            </form>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
}
