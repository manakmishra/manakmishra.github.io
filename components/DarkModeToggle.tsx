import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const iconColor = {
        light: '#383A42',
        dark: '#E5C07B'
    }

    const bgColor = {
        light: '#FAFAFA',
        dark: '#282C34'
    }

    return (
        <IconButton 
            aria-label="Toggle Color Mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
            variant="ghost"
            _hover={{}}
            isRound={true}
            size={'lg'}
        />
    );
}

export default DarkModeToggle;