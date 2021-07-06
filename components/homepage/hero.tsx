import {
    Text,
    Stack,
    Box,
    Icon,
    Link,
    useColorModeValue
} from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { clamp } from '../../hooks/FluidResponsive';

const SocialLink = ({ icon, to }: any) => (
    <Link href={to} isExternal>
    <Icon
        aria-label="Toggle color mode"
        variant="ghost"
        as={icon}
        width={9}
        height={9}
        m={2}
        color={useColorModeValue('foreground.light', 'foreground.dark')}
        backgroundColor="transparent"
        _hover={{
            color: useColorModeValue('cyan.light', 'cyan.dark'),
            margin: "4px",
            width: "44px",
            height: "44px",
        }}
    />
</Link>
)

export const Hero: React.FC = () => {
    return (
        <>
        <Stack justifyContent="flex-start" alignItems="flex-start" mb={10}>
            <Text textStyle="body">Hey There! I'm - </Text>
            <Text textStyle="name">
                manak mishra.
            </Text>
            <Box>
                <Text 
                    w={{base: "100%", md: "90%", lg: "80%", xl: "60%"}} 
                    mt={clamp(1.5, 6.67, 2.125)}
                    mb={8} 
                    textStyle="title"
                >
                    I’m currently a senior at <Link href="https://www.lnmiit.ac.in" variant="primary" isExternal>LNMIIT Jaipur</Link> studying Communication and Computer Engineering. I’m a self taught developer who loves building software and solving problems.
                </Text>
            </Box>
            <Stack isInline spacing={7} alignSelf={{base: "center", md: "flex-start"}}>
                <SocialLink icon={FaGithub} to="https://www.github.com/manakmishra" />
                <SocialLink icon={FaLinkedin} to="https://www.linkedin.com/in/manakmishra" />
                <SocialLink icon={FaEnvelope} to={"mailto:manakmishra14@gmail.com"}/>
            </Stack>
        </Stack>
        </>
    );
};