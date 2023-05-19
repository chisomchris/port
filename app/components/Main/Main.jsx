'use client'
import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { SearchBox } from '../SearchBox/SearchBox'
import { Header } from '../Home/Header'

export const Main = ({ children, title }) => {
    return (
        <Box flexGrow='1'>
            <Header>
                <Flex
                    justify='space-between'
                    align='center'
                >
                    <Heading fontSize='1.25rem'>{title}</Heading>
                    <SearchBox />
                </Flex>
            </Header>
            <Box
                px='1.5rem'
            >
                {children}
            </Box>
        </Box>
    )
}
