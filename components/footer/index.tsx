import {
    Box,
    Text,
    Flex,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import { Logo } from '../svgs/logo';
import { clamp } from '../../hooks/FluidResponsive';

export default function Footer() {
    return (
        <Box pb={10} pt={{base: "40px", md: "60px"}}>
            <Flex
                align={'center'}
                _before={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('seperator.light', 'seperator.dark'),
                    flexGrow: 1,
                    mr: 8,
                }}
                _after={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('seperator.light', 'seperator.dark'),
                    flexGrow: 1,
                    ml: 8,
                }}>
                <Logo />
            </Flex>
            <Text pt={clamp('0.75rem', '5vw', '1.5rem')} textAlign={'center'} textStyle="fLabel" mx={2}>
                <Link variant='noStyle' href="https://github.com/manakmishra/portfolio" isExternal> 
                    Built with Next.js & Chakra UI. 
                </Link> <br />
                © 2021 Manak Mishra
            </Text>
        </Box>
    );
}