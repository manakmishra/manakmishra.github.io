import {
Box,
Text,
useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('background.light', 'background.dark')}
            color={useColorModeValue('foreground.light', 'foreground.dark')}
        >
            <Box pt={5} pb={10}>
                <Text textStyle="fLabel" textAlign={'center'}>
                    This website is still under development and will be updated in the coming days.
                </Text>
            </Box>
        </Box>
    );
}