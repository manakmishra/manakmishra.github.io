import React from 'react';
import {
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';
import Footer from './Footer';
import { NavBar } from './NavBar';

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
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                { children }
            </Flex>
            <Footer />
        </>
    );
}

export default Container;