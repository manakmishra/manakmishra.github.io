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
                mt={clamp(3, 8.33, 7)}
            >
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent='center'
                    alignItems='flex-start'
                    mx={clamp(1.5, 6.5, 7)}
                >
                    { children }
                </Stack>
            </Flex>
            <Footer />
        </>
    );
}

export default Container;