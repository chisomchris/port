import { Avatar, Circle, Box, Icon, Text, Flex } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'

export const User = ({ name, email, avatar }) => {

    return (
        <Flex
            flexDir='column'
            align='center'
            py='2rem'
        >
            <Avatar
                name={name}
                src={avatar}
                size='xl'
                pos='relative'
            >
                {!avatar && <Circle
                    boxSize='1.25rem'
                    bg='twitter.500'
                    pos='absolute'
                    right='5%'
                    bottom='5%'
                ><Icon as={FaPlus} fontSize='.675rem' /></Circle>}
            </Avatar>
            <Text fontWeight='bold' mt='.75rem'>{name}</Text>
            <Text >{email}</Text>
        </Flex>
    )
}