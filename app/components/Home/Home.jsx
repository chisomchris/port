'use client'
import React from 'react'
import { Flex } from '@chakra-ui/react'
import { LeftSideBar, RightSideBar } from '../SideBar/SideBar'

export const Home = ({ isAdmin, children }) => {
    return (
        <Flex
            bg='#f1f1f1'
            justify='space-between'
        >
            <LeftSideBar isAdmin={isAdmin} />
            {children}
            <RightSideBar />
        </Flex>
    )
}
