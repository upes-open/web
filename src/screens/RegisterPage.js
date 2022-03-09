import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FormControl,
  FormLabel,
  Box,
  Heading,
  Input,
  Button,
  Flex,
  useToast,
  Select,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

// TODO: api codes

export default function RegisterPage() {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Registered Successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };
  //
  return (
    <div>
      <NavBar />
      <Flex width="full" align="center" justifyContent="center">
        <Box
          p={8}
          my={5}
          minWidth="560px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>Register</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: "Please enter your name",
                  })}
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} isInvalid={errors.SAP_ID}>
                <FormLabel>SAP ID</FormLabel>
                <NumberInput>
                  <NumberInputField
                    type="text"
                    placeholder="SAP ID"
                    {...register("SAP_ID", {
                      required: "Please enter your SAP ID",
                    })}
                  />
                </NumberInput>
                {errors.SAP_ID && (
                  <FormErrorMessage>{errors.SAP_ID.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} isInvalid={errors.E_Mail}>
                <FormLabel>E-Mail</FormLabel>
                <Input
                  type="email"
                  placeholder="E-Mail"
                  {...register("E_Mail", {
                    required: "Email is required.",
                  })}
                />
                {errors.E_Mail && (
                  <FormErrorMessage>{errors.E_Mail.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} isInvalid={errors.Contact_Number}>
                <FormLabel>Contact Number</FormLabel>
                <NumberInput>
                  <NumberInputField
                    type="text"
                    placeholder="Contact Number"
                    {...register("Contact_Number", {
                      required: "Please enter your Contact Number",
                    })}
                  />
                </NumberInput>
                {errors.Contact_Number && (
                  <FormErrorMessage>
                    {errors.Contact_Number.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} isInvalid={errors.Course}>
                <FormLabel>Course</FormLabel>
                <Input
                  type="text"
                  placeholder="Course"
                  {...register("Course", {
                    required: "Please enter Course",
                  })}
                />
                {errors.Course && (
                  <FormErrorMessage>{errors.Course.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} isInvalid={errors.year}>
                <FormLabel>Year</FormLabel>
                <Select
                  placeholder="Select Year"
                  {...register("year", {
                    required: "Please enter Year",
                  })}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Select>
                {errors.year && (
                  <FormErrorMessage>{errors.year.message}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                width="full"
                mt={4}
                type="submit"
                colorScheme={"green"}
                bg={"green.400"}
              >
                Register
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>

      <Footer />
    </div>
  );
}
