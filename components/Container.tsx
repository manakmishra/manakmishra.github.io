import React from 'react';
import {
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';
import Footer from './Footer';
import { NavBar } from './NavBar';

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
                mt={[24, 24, 32, 32]}
            >
                { children }
            </Flex>
        </>
    );
}

export default Container;