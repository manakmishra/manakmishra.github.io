import {
    Text,
    Stack,
    Box,
    Icon,
    Link,
  } from '@chakra-ui/react'
  import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

  export const Hero: React.FC = () => {
      return (
          <>
            <Stack justifyContent="flex-start" alignItems="flex-start">
                <Text textStyle="body">Hey There! I'm - </Text>
                <Text textStyle="name">manak mishra.</Text>
                <Box width="75%">
                    <Text mt="60px" textStyle="title">I’m currently a senior at <Link href="https://www.lnmiit.ac.in" variant="primary">LNMIIT Jaipur</Link> studying Communication and Computer Engineering. I’m a self taught developer who loves building software and solving problems.</Text>
                </Box>
                <Stack isInline spacing={4}>
                    <Icon as={FaGithub} w={6} h={6} />
                    <Icon as={FaLinkedin} w={6} h={6} />
                    <Icon as={FaEnvelope} w={6} h={6} />
                </Stack>
            </Stack>
          </>
      );
  };