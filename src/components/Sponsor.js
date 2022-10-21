import { ReactNode } from 'react';
import {
  Box,
  Heading,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

export default function Sponsors() {
  return (
    <Box bg={useColorModeValue('white', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Sponsors</Heading>
        </Stack>
        <Stack
          textAlign={'center'}
          style={{display: 'flex', justifyContent: 'space-evenly'}}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <Avatar
              size="x1" width="200px" height="80px"
              src={
                'https://th.bing.com/th/id/OIP.S2nKX4jiYr1G59kn2CBKQgHaEo?w=288&h=180&c=7&o=5&dpr=1.25&pid=1.7'
              }
              name={'International Business Machines'}
            />
          </Testimonial>
          <Testimonial>
            <Avatar
            size="x1" width="200px" height="80px"
              src={
                'https://www.drupal.org/files/LF_logo_color_rgb_0.jpg'
              }
              name={'The Linux Foundation'}
            />
          </Testimonial>
          <Testimonial>
            <Avatar
            size="x1" width="200px" height="80px"
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmvD4b9hDLct17hIDBRduY-74IJJyFIZxvCITKiq6W9QCONn97veidSY56G4LzengWIc&usqp=CAU'
              }
              name={'University of Petroleum and Energy Studies'}
            />
          </Testimonial>
          <Testimonial>
            <Avatar
            size="x1" width="200px" height="80px"
              src={
                'https://images.opencollective.com/xebia/0bd8e4d/logo/256.png'
              }
              name={'Xebia'}
            />
          </Testimonial>
          <Testimonial>
            <Avatar
            size="x1" width="200px" height="80px"
              src={
                'https://i.postimg.cc/NGTsbp06/GMC-logo.png'
              }
              name={'Give My Certificate'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}