import React from 'react';
import {
    useColorModeValue,
    Flex,
    Stack
} from '@chakra-ui/react';
import Footer from '../footer';
import NavBar from '../navbar';
import { clamp } from '../../hooks/FluidResponsive';

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
                mt={clamp('3rem', '8.33vw', '7rem')}
            >
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent='center'
                    alignItems='flex-start'
                    mx={clamp('1.5rem', '6.5vw', '7rem')}
                >
                    { children }
                </Stack>
            </Flex>
            <Footer />
        </>
    );
}

export default Container;