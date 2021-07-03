import {
Box,
Text,
useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
        bg={useColorModeValue('background.light', 'background.dark')}
        color={useColorModeValue('foreground.light', 'foreground.dark')}>
            <Box py={10}>
                <Text textStyle="hfLabel" textAlign={'center'}>
                    This website is still under development and will be updated in the coming days.
                </Text>
                <Text textStyle="hfLabel" textAlign={'center'}>
                    © 2021
                </Text>
            </Box>
        </Box>
    );
}