import React from 'react';
import {
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';
import Footer from './Footer';
import { NavBar } from './NavBar';
import { clamp } from '../hooks/FluidResponsive';

//Temporarily removed footer from container

const Container: React.FC = ({ children }) => {
    return (
        <>
            <NavBar />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={useColorModeValue('background.light', 'background.dark')}
                color={useColorModeValue('foreground.light', 'foreground.dark')}
                mt={clamp(3, 8.33, 8.25)}
            >
                { children }
            </Flex>
        </>
    );
}

export default Container;