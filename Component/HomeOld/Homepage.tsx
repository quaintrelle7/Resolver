'use client'

import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
} from '@chakra-ui/react'
import AddDelegates from '../Delegates/AddDelegates'
import { useState } from 'react';
import UpdateAddress from '../Delegates/UpdateAddress';



export default function Homepage() {

    const [showForm, setShowForm] = useState<Boolean>(false);
    const scroll2El = elID => {
        if (document.getElementById(elID) != null) {
            let height = document.getElementById(elID)?.offsetTop;
            if (height) {
                window.scrollTo({
                    top: height - 60,
                    behavior: 'smooth',
                });
            }
        }

    };

    const onBtnClick = (e) => {
        e.preventDefault();
        setShowForm(true);
        // const goto = e.target.getAttribute('goto');
        setTimeout(() => {
            scroll2El("addDelegate");
        }, 100);

    }
    return (
        <Container maxW={'8xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Wallet resolving{' '}
                    <Text as={'span'} color={'orange.400'}>
                        made easy
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Introducing a groundbreaking project dedicated to providing security solutions for hacked crypto wallets! We aim to revolutionize the way users recover stolen assets and prevent future breaches.
                </Text>
                <Text style={{ color: "#6f1ab6", fontWeight: "700", fontSize: "20px" }}>Join us in building a safer crypto ecosystem.</Text>
                <Stack spacing={6} direction={'row'}>
                    <Button

                        rounded={'full'}
                        px={6}
                        colorScheme={'orange'}
                        bg={'orange.400'}
                        _hover={{ bg: 'orange.500' }} onClick={onBtnClick}>
                        Get started
                    </Button>
                    {/* <Button rounded={'full'} px={6}>
                        Learn more
                    </Button> */}
                    <UpdateAddress />
                </Stack>
                <Flex w={'full'}>
                    {/* <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} /> */}
                </Flex>

            </Stack>
            <section id="addDelegate">
                {showForm ? <AddDelegates /> : <></>}

            </section>
        </Container>
    )
}