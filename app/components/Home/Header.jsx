import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

export const Header = ({ children }) => {
    return (
        <Flex
            pt='1.5rem'
            pb='.75rem'
            pl='1.5rem'
            pr='1rem'
            h='4rem'
            align='flex-end'
        >
            <Box w='100%' >{children}</Box>
        </Flex>
    )
}
