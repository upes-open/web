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
          <Text color={'gray.600'} fontSize={'xl'}>
          Our dynamic team works on the premise of providing the right support and mentorship to students working on open source projects, thus leading towards various advancements and innovation in this line of work. Our community provides a holistic environment to explore, ideate and originate various solutions to real-world problems, thus contributing towards the welfare and advancement of our society while enhancing our communication, leadership, teamwork and soft skills. To support us in this righteous job, we have been sponsored by various top-notch companies like IBM, the Linux Foundation and Xebia.
          </Text>
          <Text color={'gray.600'} fontSize={'xl'}>
          We work in two verticals, namely "Engagement" and "Collaboration". Engagement is the heart, and collaboration is the brain of our organization.
          </Text>
        </Stack>
      </Box>
    );
  }