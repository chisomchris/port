'use client'
import { useState } from 'react'
import { Box, Input, Container, Heading, Text, Icon } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

export function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const input_group = {
        p: '1rem 0'
    }
    const input = { borderWidth: '2px', borderRadius: '0', padding: '.25em 1em' }

    return (
        <Box
            bg={{ base: 'white', md: 'green.900' }}
            h='100dvh'
            w='100%'
            display='grid'
            placeItems='center'
            py='3rem'
        >
            <Container
                p={{ base: '1rem', md: '2rem' }}
                maxW='md'
                bg='white'
            >
                <Heading>Welcome back!</Heading>
                <Text>Sign in to your account</Text>
                <form>
                    <Box sx={input_group}>
                        <label htmlFor='email'>Email Address</label>
                        <Input
                            id='email'
                            value={email}
                            onInput={onEmailChange}
                            variant='unstyled'
                            sx={input}
                            _focusWithin={{ borderColor: 'green' }}
                            _focusVisible={{ borderColor: 'green.900' }}
                        />
                    </Box>
                    <Box sx={input_group}>
                        <label htmlFor='password'>Password</label>
                        <Box pos='relative'>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                value={password}
                                onInput={onPasswordChange}
                                variant='unstyled'
                                sx={input}
                                _focusWithin={{ borderColor: 'green' }}
                                _focusVisible={{ borderColor: 'green.900' }}
                            />
                            <Icon
                                aria-hidden
                                onClick={() => { setShowPassword(v => !v) }}
                                pos='absolute'
                                right='.75rem'
                                top='50%'
                                transform='translateY(-50%)'
                                as={showPassword ? BsEyeSlashFill : BsEyeFill}
                            />
                        </Box>
                    </Box>
                    <Box sx={input_group} >
                        <Input
                            type='submit'
                            value={'Login'}
                            bg='green.900'
                            color='white'
                            variant='unstyled'
                            sx={input}
                            borderColor='green.900'
                            mb='1rem'
                        />
                        <Link href='/auth/password-reset' color='green.900' fontWeight={500}>Forgot Login details?</Link>
                    </Box>
                </form>
            </Container>
        </Box>
    )
}