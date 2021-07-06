import {
    Box,
    Text,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import { Logo } from '../svgs/logo';

export default function Footer() {
    return (
        <Box py={10}>
            <Flex
                align={'center'}
                _before={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('foreground.light', 'foreground.dark'),
                    flexGrow: 1,
                    mr: 8,
                }}
                _after={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('foreground.light', 'foreground.dark'),
                    flexGrow: 1,
                    ml: 8,
            }}>
                <Logo boxSize={{base: "2.75rem", lg: "3rem"}} />
            </Flex>
            <Text pt={6} textAlign={'center'} textStyle="fLabel" mx={2}>
                Built with Next.js & Chakra UI. <br />
                © 2021
            </Text>
        </Box>
    );
}