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
import { clamp } from "../hooks/FluidResponsive";

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
          p={2}
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
  const drawerBackground = useColorModeValue('background.light', 'background.dark');
  const btnRef = React.useRef();

  return (
    <>
      <Button
        aria-label="Open Navigation Drawer"
        ref={btnRef.current}
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        variant="ghost"
        p={2}
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
          <DrawerContent bg={drawerBackground}>
            <DrawerHeader border="none" pt={6}>
              <Button
                aria-label="Close Navigation Drawer"
                onClick={onClose}
                variant="ghost"
                p={2}
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
        <MenuItem to="/wip">projects</MenuItem>
        <MenuItem to="/wip">about</MenuItem>
        <MenuItem to="/wip" isLast>resume</MenuItem>
      </FullNav>
      <SideNav toRef={toRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <MenuItem to="/wip">projects</MenuItem>
        <MenuItem to="/wip">about</MenuItem>
        <MenuItem to="/wip" isLast>resume</MenuItem>
      </SideNav>
    </Box>
  );
}

export const NavBar = (props: any) => {
  return (
    <Flex
      p=".5em"
      my={3}
      mx={`calc(${clamp(1.5, 6.5, 7)} - 16px )`}
      justify="space-between"
      align="center"
      direction="row"
      position="relative"
    >
      <NavMenu />
        <NextLink href="/" passHref>
          <Button
            order={{ md: -1 }} 
            aria-label="Go to Home"
            p={2}
            variant="ghost"
            _hover={{
              variant:"ghost",
              color:useColorModeValue('cyan.light', 'cyan.dark')
            }}
          >
            <Logo />
          </Button>
        </NextLink>
      <ColorModeToggle />
    </Flex>
  );
}