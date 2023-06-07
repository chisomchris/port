'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { BsFill0CircleFill, BsPersonFillAdd } from 'react-icons/bs'
import { BiLogInCircle } from 'react-icons/bi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdPrecisionManufacturing, MdSpaceDashboard } from 'react-icons/md'
import Link from 'next/link';
import { Header } from '../Home/Header'
import { User } from '../User/User'
import { signOut } from 'next-auth/react';

export const LeftSideBar = ({ isAdmin }) => {
    const pathname = usePathname();
    const [expandMobile, setExpandMobile] = useState(false)
    const toggleNav = () => {
        setExpandMobile(!expandMobile)
    }

    const adminLinks = [
        { url: 'Dashboard', href: '/admin', icon: MdSpaceDashboard },
        { url: 'Manufacturer', href: '/admin/manufacturers', icon: MdPrecisionManufacturing },
    ]
    const userLinks = [
        { url: 'Dashboard', href: '/', icon: MdSpaceDashboard },
        { url: 'Add Distributor', href: '/distributors/add', icon: BsPersonFillAdd },
    ]
    const listyle = `py-4 flex gap-6 items-center`

    return (
        <div className='bg-white'>
            <div className='hidden md:block min-h-[100dvh] w-[240px] px-6'>
                <Header>
                    <div className='flex items-center gap-6 '>
                        <BsFill0CircleFill className='text-[1.5rem] ' /> {'  '} <h2 className='m-0'>Logo</h2>
                    </div>
                </Header>
                <ul className='mt-8 text-[1.125rem] font-[400]' >
                    {
                        isAdmin ? <>
                            {
                                adminLinks.map((link, index) => {
                                    return <li
                                        key={index}
                                        className={`${link.href === pathname ? 'text-green-700 ' : 'text-[#333] '}` + listyle}
                                    >
                                        <link.icon className='text-[1.5rem]' />
                                        <Link href={link.href}>{link.url}</Link>
                                    </li>
                                })
                            }
                        </> : <>
                            {userLinks.map((link, index) => {
                                return <li
                                    key={index}
                                    className={`${link.href === pathname ? 'text-green-700 ' : 'text-[#333] '}` + listyle}
                                >
                                    <link.icon className='text-[1.5rem]' />
                                    <Link href={link.href}>{link.url}</Link>
                                </li>
                            })}
                        </>
                    }
                </ul>
            </div>
            <div className='px-4 block md:hidden'>
                <header className='flex items-center justify-between'>
                    <div className='flex items-center gap-6 py-4'>
                        <BsFill0CircleFill className='text-[1.5rem] ' /> {'  '} <h2 className='m-0'>Logo</h2>
                    </div>
                    <button className='bg-white border-none text-[1.75rem] p-0 grid place-items-center' onClick={toggleNav}>{expandMobile ? <FaTimes /> : <FaBars />}</button>
                </header>
                <div className={`font-[400] overflow-hidden text-[1.125rem] ${!expandMobile ? 'h-0 p-0' : 'h-auto pt-2 px-0 pb-[3rem]'}`}>
                    <ul>
                        {
                            isAdmin ? <>
                                {
                                    adminLinks.map((link, index) => {
                                        return <li
                                            key={index}
                                            onClick={() => {
                                                setExpandMobile(false)
                                            }}
                                            className={`${link.href === pathname ? 'text-green-700 ' : 'text-[#333] '}` + listyle}
                                        >
                                            <link.icon className='text-[1.5rem]' />
                                            <Link href={link.href}>{link.url}</Link>
                                        </li>
                                    })
                                }
                            </> : <>
                                {userLinks.map((link, index) => {
                                    return <li
                                        key={index}
                                        onClick={() => {
                                            setExpandMobile(false)
                                        }}
                                        className={`${link.href === pathname ? 'text-green-700 ' : 'text-[#333] '}` + listyle}
                                    >
                                        <link.icon className='text-[1.5rem]' />
                                        <Link href={link.href}>{link.url}</Link>
                                    </li>
                                })}
                            </>
                        }
                    </ul>
                    <User isMobile />
                    <button className='w-full flex items-center bg-transparent gap-6 border-none mb-12 text-[1.125rem]'
                        onClick={
                            () => {
                                signOut()
                            }
                        }
                    >
                        <BiLogInCircle className='text-[1.5rem]' />{'  '}
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export const RightSideBar = () => {
    return (
        <div className='hidden md:block bg-white'>
            <div className='min-h-[100dvh] w-[240px] px-6'>
                <Header>
                    <button className='px-4 py-1 w-full flex items-center justify-between bg-transparent border-none text-[1.125rem] hover:shadow-[inset_0_0_10px_rgba(0,255,0,0.125)]'
                        onClick={
                            () => {
                                signOut()
                            }
                        }
                    >
                        Logout {'  '}
                        <BiLogInCircle className='text-[1.5rem]' />
                    </button>
                </Header>
                <User />
            </div>
        </div>
    )
}
