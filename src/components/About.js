import {
    Box,
    Container,
    Heading,
    Text,
    Stack
  } from '@chakra-ui/react';
    
  export default function About() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading 
                fontSize={'5xl'}
                py={10}
                color={'green.400'}
                fontWeight={'bold'}>
                About Us
            </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
          Aware, Adopt and Contribute are always been the fundamental principles behind OPEN. 
          At OPEN we aim to spread awareness about the advantages of open softwares.
          </Text>
        </Stack>
      </Box>
    );
  }