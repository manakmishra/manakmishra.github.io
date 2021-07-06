import {
    Box,
    Link,
    Stack, 
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { clamp } from '../../hooks/FluidResponsive';

export default function ContactMe() {
    return (
        <>
            <Stack
                spacing={10}
                w="100%"
                alignItems="center"
            >
                <Box 
                    height="1px" 
                    width={clamp('18rem', '80vw', '50rem')}
                    bgColor={useColorModeValue('seperator.light', 'seperator.dark')}
                />
                <Text
                    textStyle="sectionTitle" 
                    textAlign="center"
                >
                    Let’s have a chat.
                </Text>
                <Box width={clamp('16rem', '80vw', '28rem')} >
                    <Text textAlign="center" textStyle="body">
                        If you would like to get in touch then feel free to shoot me an email at <Link 
                            variant="secondary"
                            fontStyle="italic"
                            href="mailto:manakmishra14@gmail.com"
                        > 
                            manakmishra14@gmail.com 
                        </Link> or fill out my contact form.
                    </Text>
                </Box>
            </Stack>
        </>
    );
}