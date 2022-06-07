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
  InputGroup,
  InputLeftAddon,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

//  TODO: api codes

export default function RegisterPage() {
  //
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const onSubmit = async (data) => {
    const result = await fetch(
      "https://upes-web-backend.herokuapp.com/backend/functions/form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(result);
    if (result.status === 200) {
      toast({
        title: "Registered Successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } else {
      toast({
        title: "Error!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  //
  return (
    <div>
      <NavBar />
      <Flex width="full" align="center" justifyContent="center">
        <Box
          p={{ sm: "0", md: "8" }}
          my={5}
          minWidth={{ base: "0px", sm: "0px", md: "560px" }}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>Register</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
              <FormControl mx={2} isInvalid={errors.name}>
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
              <FormControl my={2} mx={2} isInvalid={errors.college_name}>
                <FormLabel>College Name</FormLabel>
                <Input
                  type="text"
                  placeholder="College Name"
                  {...register("college_name", {
                    required: "Please enter your College Name",
                  })}
                />
                {errors.college_name && (
                  <FormErrorMessage>
                    {errors.college_name.message}
                  </FormErrorMessage>
                )}
                {/* INPUT field to upload id card */}
              </FormControl>
              <FormControl my={2} mx={2} isInvalid={errors.Roll_No}>
                <FormLabel>Roll No</FormLabel>
                <Input
                  type="text"
                  placeholder="Roll No"
                  {...register("Roll_No", {
                    required: "Please enter your Roll No",
                  })}
                />
                {errors.Roll_No && (
                  <FormErrorMessage>{errors.Roll_No.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} mx={2} isInvalid={errors.upload_id}>
                <FormLabel>Upload Id card</FormLabel>
                <input
                  type="file"
                  name="upload"
                  accept="application/pdf"
                  {...register("upload_id", {
                    required: "Please Upload Your Id card in PDF format only",
                  })}
                />
                {errors.upload_id && (
                  <FormErrorMessage>
                    {errors.upload_id.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} mx={2} isInvalid={errors.SAP_ID}>
                <FormLabel>SAP ID</FormLabel>
                <NumberInput>
                  <NumberInputField
                    type="text"
                    placeholder="SAP ID if any"
                    {...register(
                      "SAP_ID"
                      // , {
                      //   required: "Please enter your SAP ID",
                      // }
                    )}
                  />
                </NumberInput>
                {errors.SAP_ID && (
                  <FormErrorMessage>{errors.SAP_ID.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} mx={2} isInvalid={errors.College_E_Mail}>
                <FormLabel>College E-Mail</FormLabel>
                <Input
                  type="email"
                  placeholder="College E-Mail"
                  {...register("College_E_Mail", {
                    required: "College Email is required.",
                  })}
                />
                {errors.College_E_Mail && (
                  <FormErrorMessage>
                    {errors.College_E_Mail.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} mx={2} isInvalid={errors.E_Mail}>
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
              <FormControl my={2} mx={2} isInvalid={errors.Contact_Number}>
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
              <FormControl my={2} mx={2} isInvalid={errors.GitHub}>
                <FormLabel>GitHub ID</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="https://github.com/" />
                  <Input
                    type="text"
                    placeholder="GitHub ID"
                    {...register("GitHub", {
                      required: "Please enter your GitHub ID",
                    })}
                  />
                </InputGroup>
                {errors.GitHub && (
                  <FormErrorMessage>{errors.GitHub.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl my={2} mx={2} isInvalid={errors.LinkedIn}>
                <FormLabel>LinkedIn ID</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="https://www.linkedin.com/in/" />
                  <Input
                    type="text"
                    placeholder="LinkedIn ID"
                    {...register("LinkedIn", {
                      required: "Please enter your LinkedIn ID",
                    })}
                  />
                </InputGroup>
                {errors.LinkedIn && (
                  <FormErrorMessage>{errors.LinkedIn.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl my={2} mx={2} isInvalid={errors.year}>
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

              <FormControl my={2} mx={2} isInvalid={errors.projects}>
                <FormLabel>Projects ( Max: 3 )</FormLabel>
                <Controller
                  name="projects"
                  control={control}
                  render={({ field: { ref, ...rest } }) => (
                    <Stack spacing={[2, 2]} direction={"column"}>
                      <CheckboxGroup {...rest}>
                        <Checkbox value="first">
                          Medical-Analysis-Application-Using-ML
                        </Checkbox>
                        <Checkbox value="sec">Sports-App</Checkbox>
                        <Checkbox value="third">P2P-Carpooling-DAPP</Checkbox>
                        <Checkbox value="forth">
                          File-Storage-Using-Hybrid-Cryptography
                        </Checkbox>
                        <Checkbox value="fifth">
                          Crime-Analysis-and-Prediction
                        </Checkbox>
                        <Checkbox value="six">UPESiteOrNot</Checkbox>
                        <Checkbox value="seven">Parking Token</Checkbox>
                      </CheckboxGroup>
                    </Stack>
                  )}
                  rules={{
                    validate: (value) => {
                      if (value.length > 3) {
                        return "Max 3 projects can be selected";
                      }
                    },
                    required: {
                      value: true,
                      message: "Please select at least one",
                    },
                  }}
                />
                {errors.projects && (
                  <FormErrorMessage>{errors.projects.message}</FormErrorMessage>
                )}
              </FormControl>

              <Button
                width="full"
                mt={4}
                mx={2}
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
