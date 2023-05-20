'use client'
import React from 'react'
import { LeftSideBar, RightSideBar } from '../SideBar/SideBar'

export const Home = ({ isAdmin, children }) => {
    return (
        <div
            style={{
                display: 'flex',
                backgroundColor: '#f1f1f1',
                justify: 'space-between',
            }}
        >
            <LeftSideBar isAdmin={isAdmin} />
            {children}
            <RightSideBar />
        </div>
    )
}
