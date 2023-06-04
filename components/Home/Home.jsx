'use client'
import { LeftSideBar, RightSideBar } from '../SideBar/SideBar'

export const Home = ({ isAdmin, children }) => {
    return (
        <div className='bg-[#f1f1f1] md:flex md:justify-between w-screen'>
            <LeftSideBar isAdmin={isAdmin} />
            {children}
            <RightSideBar />
        </div>
    )
}
