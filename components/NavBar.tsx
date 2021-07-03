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
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import NextLink from 'next/link';
 
const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <GrClose /> : <HiMenuAlt4 />}
    </Box>
  );
}

const MenuItem = ({ children, isLast, to = "/", ...props }: any) => {
  return (
    <NextLink href={to} passHref>
      <Link variant="nav">
        <Text textStyle="hfLabel" p={2}>
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <IconButton 
          aria-label={colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'}
          icon={
            colorMode === 'light' ? (
              <FaMoon size="1.75rem" />
            ) : (
              <FaSun size="1.75rem" />
            )
          }
          onClick={toggleColorMode}
          color={useColorModeValue('#383A42', '#E5C07B')}
          variant="ghost"
          _hover={{}}
          isRound={true}
          size={'lg'}
      />
  );
}

const NavBarContainer = ({ children, ...props }: any) => {
  return (
    <Flex
      position="sticky"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
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
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
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
      <ColorModeToggle />
    </NavBarContainer>
  )
}