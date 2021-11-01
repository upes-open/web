import {
  FormControl,
  FormLabel,
  Box,
  Heading,
  Input,
  Button,
  Flex,
  useToast,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function CreateEvents() {
  function AlertPop(props) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>{props.title}</AlertTitle>
      </Alert>
    );
  }
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast({
      title: "Event Created!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };
  return (
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
          <Heading>Create Event</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Title"
                {...register("title", {
                  required: "Please enter title",
                })}
              />
            </FormControl>
            {errors.title && <AlertPop title={errors.title.message} />}
            <FormControl my={2}>
              <FormLabel>Description</FormLabel>
              <Textarea
                type="text"
                placeholder="Description"
                {...register("description", {
                  required: "Please enter description",
                })}
              />
              {errors.description && (
                <AlertPop title={errors.description.message} />
              )}
            </FormControl>
            <FormControl my={2}>
              <FormLabel>Keywords</FormLabel>
              <Input
                type="text"
                placeholder="keywords"
                {...register("keyword")}
              />
            </FormControl>
            <FormControl my={2}>
              <FormLabel>Timing of event</FormLabel>
              <Input
                type="text"
                placeholder="DD-MM-YYYY HH:MM"
                {...register("timing", {
                  required: "Please enter timing",
                })}
              />
            </FormControl>
            {errors.timing && <AlertPop title={errors.timing.message} />}
            <FormControl my={2}>
              <FormLabel>Form link</FormLabel>
              <Input
                type="text"
                placeholder="Form link"
                {...register("formlink", {
                  required: "Please enter formlink",
                })}
              />
            </FormControl>
            {errors.formlink && <AlertPop title={errors.formlink.message} />}

            <FormControl my={2}>
              <FormLabel>Image</FormLabel>
              <input
                type="file"
                placeholder="Image"
                {...register("image", {
                  required: "Please upload image",
                })}
              />
            </FormControl>
            {errors.image && <AlertPop title={errors.image.message} />}

            <Button
              width="full"
              mt={4}
              type="submit"
              colorScheme={"green"}
              bg={"green.400"}
            >
              Create Event
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
