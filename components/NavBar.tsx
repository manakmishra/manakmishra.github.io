import React from "react";
import { HiMenuAlt4 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Logo } from './svg';
import { 
  Box,
  Link,
  Text,
  Flex,
  Stack,
  VStack,
  useColorMode,
  useColorModeValue,
  Button
} from "@chakra-ui/react";
import NextLink from 'next/link';
 
const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <Button 
      aria-label="Open Navigation Menu"
      display={{ base: "block", md: "none" }} 
      onClick={toggle}
      variant="ghost"
      p={1}
    >
      {
        isOpen ? (
          <GrClose size="1.75rem" fill={useColorModeValue('foreground.light', 'foreground.dark')} /> 
        ) : (
          <HiMenuAlt4 size="1.75rem" color={useColorModeValue('foreground.light', 'foreground.dark')} />
        )
      }
    </Button>
  );
}

const MenuItem = ({ children, isLast, to = "/", ...props }: any) => {
  return (
    <NextLink href={to} passHref>
      <Link variant="nav">
        <Text textStyle="hfLabel" px={6} py={1}>
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

const MenuLinks = ({ isOpen = false }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={6}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="#">projects</MenuItem>
        <MenuItem to="#">about</MenuItem>
        <MenuItem to="#" isLast>resume</MenuItem>
      </Stack>
    </Box>
  );
};

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

const NavBarContainer = ({ children, isOpen, ...props }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={isOpen ? { base: 1 } : { base: 1, lg: 2 }}
      py={8}
      px={[4, 4, 16, 16]}
      bg={useColorModeValue('background.light', 'background.dark')}
      color={useColorModeValue('foreground.light', 'foreground.dark')}
      {...props}
    >
      {children}
    </Flex>
  )
}


export const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer isOpen={isOpen} {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Logo />
      <MenuLinks isOpen={isOpen} />
      <ColorModeToggle />
    </NavBarContainer>
  )
}