import { React } from 'react';
import { Box, chakra,SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcPortraitMode,FcApproval, FcDonate } from 'react-icons/fc';


const Feature = ({title, text, icon}) => {
  return (
    <Stack m={8}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontSize={'3xl'} fontWeight={'bold'}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box p={4} m={8}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          color={'green.400'}
          fontWeight={'bold'}>
          Our core principles
        </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Feature
          icon={<Icon as={FcPortraitMode} w={10} h={10} />}
          title={'Aware'}
          text={
            'We aim at spreading awareness about the advantage of using Open Source softwares over conventional proprietary softwares.'
          }
        />
        <Feature
          icon={<Icon as={FcApproval} w={10} h={10} />}
          title={'Adopt'}
          text={
            'Spreading awareness is futile until and unless we motivate people to adopt the prevailing Open Source softwares in their work environment'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Contribute'}
          text={
            'The whole concept of Open Source revolves around community which uses it and contributing to the community is always a matter of prestige.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
