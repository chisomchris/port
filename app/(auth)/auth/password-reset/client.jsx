'use client'
import { useRouter } from "next/navigation"
import { Button, Box, Container, Heading, Text, Grid, Input } from "@chakra-ui/react"

export const Page = () => {
    const router = useRouter()
    return (
        <Box
            h='100dvh'
            pt='2rem'
        >
            <Container
                maxW='xl'
                mt='5rem'
            >
                <Heading fontSize='3xl'>Reset Password</Heading>
                <Text>Enter the email address you registered with and we will send you instructions on how to create a new password.</Text>

                <Box
                    my='2rem'
                >
                    <Text as='label' htmlFor="email">Email Address <sub style={{ color: 'red', fontSize: '1.5em' }}>*</sub></Text>
                    <Input
                        id='email'
                        placeholder="example@email.com"
                        variant='unstyled'
                        bg='green.50'
                        borderRadius={0}
                        p='.5em 1em'
                        mt='.375em'
                        _focus={{ borderBottom: 'solid #1c4532 2px' }}
                    />
                </Box>

                <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap='1rem' mt='1.5rem'>
                    <Button
                        variant='unstyled'
                        bg='green.900'
                        color='white'
                        borderRadius={0}
                        _hover={{ bg: 'green.800' }}
                    >
                        Reset my password
                    </Button>
                    <Button
                        onClick={() => { router.back() }}
                        variant='unstyled'
                        borderRadius={0}
                        border='solid #1c4532 2px'
                        color='green.900'
                        _hover={{ color: 'white', bg: 'green.800' }}
                    >
                        Back
                    </Button>
                </Grid>
            </Container>
        </Box>
    )
}
