'use client'
import { useState } from 'react'
import { Box, Icon, Input } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

export const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState()

    return (
        <Box
            pos='relative'
            w='xs'
        >
            <Input
                bg='white'
                borderRadius='sm'
                p='.25rem 3rem .25rem .75rem'
                type='text'
                variant='unstyled'
                border='solid white 2px'
                value={searchTerm}
                onInput={(e) => { setSearchTerm(e.target.value) }}
                _focus={{ border: 'solid gray 2px' }}
                aria-label='Search Input'
            />
            <Icon
                as={FaSearch}
                pos='absolute'
                right='.75rem'
                top='50%'
                transform='translateY(-50%)'
                fontSize='1.25rem'
            />
        </Box>
    )
}