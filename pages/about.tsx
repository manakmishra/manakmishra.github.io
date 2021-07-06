import React from 'react';
import {
    VStack,
    Text
} from '@chakra-ui/react';
import { Construction } from '../components/svg';
import Container from '../components/Container';

const UnderConstruction: React.FC = () => {
    return (
        <>
            <Container>
                <VStack textAlign="center" spacing="4" my={16} alignSelf='center'>
                    <Construction boxSize="8rem" />
                    <Text textStyle="wip">
                        This site is currently under construction.
                    </Text>
                </VStack>
            </Container>
        </>
    );
} 

export default UnderConstruction;