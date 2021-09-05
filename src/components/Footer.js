import logo from '../assets/logo.png'
import { React } from 'react';
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaSlack, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Logo = (props: any) => {
  return (
    <a href="/"><img href="/" width='100px' height='20px' src={logo} alt="Open Community Logo"/></a>
    
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Logo />
        <Stack direction={'row'} spacing={3}>
          <Link href={'/web'}>Home</Link>
          <Link href={'/projects'}>Projects</Link>
          <Link href={'/events'}>Events</Link>
          <Link href={'/team'}>Team</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2021 Open Community. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Slack'} href={'https://join.slack.com/share/zt-vcveekky-fethB5jgwXtjayYQvqjBtQ'}>
              <FaSlack />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'https://twitter.com/UpesOpen'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/company/open-community/mycompany/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/upesopen_/'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCxdpyRSNdAKQ6R6Jpv_-nKQ'}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}