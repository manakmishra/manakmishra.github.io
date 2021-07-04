import React from 'react';
import { 
    Center,
    VStack,
    Text
} from '@chakra-ui/react';
import { Construction } from '../components/svg';
import Container from '../components/Container';

const UnderConstruction: React.FC = () => {
    return (
        <>
            <Container>
                <Center h="80vh" w="100vw">
                    <VStack textAlign="center" spacing="4">
                        <Construction boxSize="8rem" />
                            <Text textStyle="wip">
                                This site is currently under construction.
                            </Text>
                    </VStack>
                </Center>
            </Container>
        </>
    );
} 

export default UnderConstruction;