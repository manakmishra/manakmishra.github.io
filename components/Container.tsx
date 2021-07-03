import React from 'react';
import {
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import DarkModeToggle from './DarkModeToggle';
import NavBar from './NavBar';

const Container: React.FC = ({ children }) => {

    const { colorMode } = useColorMode()

    const bgColor = {
        light: '#FAFAFA',
        dark: '#282C34'
    }

    const color = {
        light: '#383A42',
        dark: '#DCDFE4'
    }

    const navHoverColor = {
        light: '#DDDDDE',
        dark: '#43474E'
    }

    const StickyNavBar = styled(NavBar)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s line-height .5s;
    `;

    return (
        <>
            <StickyNavBar />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                { children }
            </Flex>
        </>
    );
}

export default Container;