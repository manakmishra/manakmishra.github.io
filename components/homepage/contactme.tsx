import {
    Box,
    Link,
    Stack, 
    Text,
    SimpleGrid,
    GridItem,  
    FormControl,
    FormLabel,
    Input,
    chakra,
    Button,
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
                    <Box >
                        <SimpleGrid
                            display={{ base: "initial", md: "grid" }}
                            columns={{ md: 3 }}
                            spacing={{ md: 6 }}
                        >
                            <GridItem colSpan={{ md: 1 }}>
                                <Box width={clamp('18rem', '80vw', '18rem')} >
                                    <Text textAlign="center" textStyle="body">
                                        If you would like to get in touch then feel free to shoot me an email at <Link 
                                            variant="secondary"
                                            fontStyle="italic"
                                            href="mailto:manakmishra14@gmail.com"
                                        > 
                                            manakmishra14@gmail.com 
                                        </Link> or fill out the contact form.
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
                                <chakra.form
                                    method="POST"
                                    shadow="base"
                                    rounded={[null, "md"]}
                                    overflow={{ sm: "hidden" }}
                                    boxShadow='none'
                                >
                                    <Stack
                                        pt={5}
                                        p={[null, 6]}
                                        bg={useColorModeValue('background.light', 'background.dark')}
                                        spacing={6}
                                    >
                                        <SimpleGrid columns={6} spacing={6}>
                                        <FormControl as={GridItem} colSpan={[6, 3]}>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue('foreground.light', 'foreground.dark')}
                                            >
                                                First name
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                autoComplete="given-name"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={[6, 3]}>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue('foreground.light', 'foreground.dark')}
                                            >
                                                Last name
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                autoComplete="family-name"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={[6, 4]}>
                                            <FormLabel
                                                for="email_address"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue('foreground.light', 'foreground.dark')}
                                            >
                                                Email address
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="email_address"
                                                id="email_address"
                                                autoComplete="email"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={6}>
                                            <FormLabel
                                                for="street_address"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue('foreground.light', 'foreground.dark')}
                                            >
                                                Street address
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="street_address"
                                                id="street_address"
                                                autoComplete="street-address"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>
                                        </SimpleGrid>
                                    </Stack>
                                    <Box
                                        px={{ base: 4, sm: 6 }}
                                        py={3}
                                        bg={useColorModeValue('background.light', 'background.dark')}
                                        textAlign="right"
                                    >
                                        <Button
                                            type="submit"
                                            color={useColorModeValue('foreground.light', 'foreground.dark')}
                                            _focus={{ shadow: "" }}
                                            fontWeight="md"
                                        >
                                            Save
                                        </Button>
                                    </Box>
                                </chakra.form>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                
            </Stack>
        </>
    );
}