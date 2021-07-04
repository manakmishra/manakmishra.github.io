import React from "react";
import { HiMenuAlt2, HiOutlineX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Logo } from './svg';
import { 
  Box,
  Link,
  Text,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure
} from "@chakra-ui/react";
import NextLink from 'next/link';

const MenuItem = ({ children, isLast, to = "/" }: any) => {
  return (
    <NextLink href={to} passHref>
      <Link variant="nav">
        <Text textStyle="navBarLabel" px={6} py={1}>
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Button 
          aria-label={colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'}
          onClick={toggleColorMode}
          color={useColorModeValue('#383A42', '#E5C07B')}
          p={1}
          variant="ghost"
      >
        {
          colorMode === 'light' ? (
            <FaMoon size="1.75rem" />
          ) : (
            <FaSun size="1.75rem" />
          )
        }  
      </Button>
  );
}

const FullNav = ({ children, ...props }: any) => {
  return (
    <Stack
      as="ul"
      {...props}
      direction="row"
      display={{ base: "none", md: "flex" }}
    >
      {children}
    </Stack>
  );
};

const SideNav = ({ toRef, children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        aria-label="Open Navigation Drawer"
        ref={btnRef.current}
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        variant="ghost"
        p={1}
      >
        <HiMenuAlt2 size="1.75rem" />
      </Button>
      <Drawer
        finalFocusRef={toRef}
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay>
          <DrawerContent bg={useColorModeValue('background.light', 'background.dark')}>
            <DrawerHeader border="none" pt={6}>
              <Button
                aria-label="Close Navigation Drawer"
                onClick={onClose}
                variant="ghost"
                p={1}
              >
                <HiOutlineX size="1.75rem" />
              </Button>
            </DrawerHeader>
            <DrawerBody>
              <Stack py="4em" mx="auto" as="ul" spacing={8}>
                {children}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

const NavMenu = ({ onOpen, ...props }: any) => {
  const { isOpen, onClose } = useDisclosure();
  const [toRef, setToRef] = React.useState();

  return (
    <Box as="nav">
      <FullNav {...props}>
        <MenuItem to="#">projects</MenuItem>
        <MenuItem to="#">about</MenuItem>
        <MenuItem to="#" isLast>resume</MenuItem>
      </FullNav>
      <SideNav toRef={toRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <MenuItem to="#">projects</MenuItem>
        <MenuItem to="#">about</MenuItem>
        <MenuItem to="#" isLast>resume</MenuItem>
      </SideNav>
    </Box>
  );
}

export const NavBar = (props: any) => {
  return (
    <Flex
      m="auto"
      p=".5em"
      w={{ base: "95%", md: "90%", lg: "85%" }}
      my="3"
      justify="space-between"
      align="center"
      direction="row"
      position="relative"
    >
      <NavMenu />
      <Logo order={{ md: -1 }} />
      <ColorModeToggle />
    </Flex>
  );
}