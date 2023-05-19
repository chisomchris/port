import React from 'react'
import { usePathname } from 'next/navigation';
import { Box, Icon, Flex, List, ListItem, Button } from '@chakra-ui/react'
import { BsFill0CircleFill, BsPersonFillAdd } from 'react-icons/bs'
import { GoSettings } from 'react-icons/go'
import { BiLogInCircle } from 'react-icons/bi'
import { FaUser, FaUsers } from 'react-icons/fa'
import { MdPrecisionManufacturing, MdSpaceDashboard } from 'react-icons/md'
import { Link } from '@chakra-ui/next-js'
import { Header } from '../Home/Header'
import { User } from '../User/User'

export const LeftSideBar = ({ isAdmin }) => {
    const pathname = usePathname();
    const adminLinks = [
        { url: 'Dashboard', href: '/admin', icon: MdSpaceDashboard },
        { url: 'Manufacturer', href: '/admin/manufacturers', icon: MdPrecisionManufacturing },
        { url: 'Create Manufacturer', href: '/admin/manufacturers/add', icon: BsPersonFillAdd },
        { url: 'Dashboard', href: '/admin/settings', icon: GoSettings },
    ]
    const userLinks = [
        { url: 'Dashboard', href: '/', icon: MdSpaceDashboard },
        { url: 'Suppliers', href: '/suppliers', icon: FaUser },
        { url: 'Distributors', href: '/distributors', icon: FaUsers },
        { url: 'Create Distributor', href: '/distributors/add', icon: BsPersonFillAdd },
        { url: 'Settings', href: '/settings', icon: GoSettings },
    ]
    
    return (
        <Box
            bg='white'
            minH='100dvh'
            w='2xs'
        >
            <Header>
                <Flex align='center' gap='1.5rem'>
                    <Icon as={BsFill0CircleFill} boxSize='1.5rem' /> {'  '}Logo
                </Flex>
            </Header>
            <List
                py='1.5rem'
                pl='1.5rem'
                pr='1rem'
                mt='2rem'
                fontSize='1.125rem'
                fontWeight='400'
            >
                {
                    isAdmin ? <>
                        {
                            adminLinks.map((link, index) => {
                                return <ListItem
                                    key={index}
                                    py='1rem'
                                    display='flex'
                                    gap='1.5rem'
                                    alignItems='center'
                                    color={link.href === pathname ? 'green.900' : '#333'}
                                >
                                    <Icon boxSize='1.5rem' as={link.icon} />
                                    <Link href={link.href}>{link.url}</Link>
                                </ListItem>
                            })
                        }
                    </> : <>
                        {userLinks.map((link, index) => {
                            return <ListItem
                                key={index}
                                py='1rem'
                                display='flex'
                                gap='1.5rem'
                                alignItems='center'
                                color={link.href === pathname ? 'green.900' : '#333'}
                            >
                                <Icon boxSize='1.5rem' as={link.icon} />
                                <Link href={link.href}>{link.url}</Link>
                            </ListItem>
                        })}
                    </>
                }
            </List>
        </Box >
    )
}

export const RightSideBar = ({ }) => {
    return (
        <Box
            bg='white'
            minH='100dvh'
            w='3xs'
        >
            <Header>
                <Button
                    variant='unstyled'
                    p='0'
                    w='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    h='auto'
                >
                    Logout {'  '}
                    <Icon as={BiLogInCircle} boxSize='1.5rem' />
                </Button>
            </Header>
            <User name={'Chisom Codez'} email={'dudelycodez@gmail.com'} />
        </Box>
    )
}
