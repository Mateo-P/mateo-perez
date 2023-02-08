import { useRef } from 'react';
import { Heading, Spacer, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const Landing = () => {
  const nameColor = useColorModeValue('#2B6CB0', '#90CDF4');

  return (
    <Box
      id="home"
      pt={['7rem', '8rem', '12rem', '15rem', '15rem']}
      mt="1rem"
      pb="1rem"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      minH={'100vh'}>
      <Box
        display="flex"
        w="100%"
        alignItems="center"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between">
        <Heading
          as="h1"
          size="3xl"
          mb="1rem"
          textAlign={['center', 'center', 'center', 'left', 'left']}>
          <>
            <Text as="kbd">hello! </Text>
            <br />
            <Box>
              <Text as="kbd">i'm </Text>

              <Text as="kbd" color={nameColor}>
                mateo pérez.
              </Text>
            </Box>

            <Text as="kbd">reader & learner. people usually call it full stack dev 🤔.</Text>
          </>
        </Heading>

        <Box minH={345} minW={250} position="relative" borderRadius="0.5rem" overflow="hidden">
          <Image src="/Subject.png" alt="Picture of the author" fill />
        </Box>
      </Box>

      <a href="#about">
        <ChevronDownIcon cursor="pointer" w="12" h="12" top="35%"></ChevronDownIcon>
      </a>
    </Box>
  );
};

export default Landing;
