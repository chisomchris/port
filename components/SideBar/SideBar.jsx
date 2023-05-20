import React from 'react'
import { usePathname } from 'next/navigation';
import { BsFill0CircleFill, BsPersonFillAdd } from 'react-icons/bs'
import { GoSettings } from 'react-icons/go'
import { BiLogInCircle } from 'react-icons/bi'
import { FaUser, FaUsers } from 'react-icons/fa'
import { MdPrecisionManufacturing, MdSpaceDashboard } from 'react-icons/md'
import Link from 'next/link';
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
    const liStyle = {
        paddingBlock: '1rem',
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
    }

    return (
        <div >
            <div
                style={{
                    backgroundColor: 'white',
                    minHeight: '100dvh',
                    width: '260px',
                    boxSizing: 'border-box',
                    paddingInline: '1.5rem',
                }}
            >
                <Header>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <BsFill0CircleFill style={{ fontSize: '1.5rem' }} /> {'  '} <h2 style={{ margin: 0 }}>Logo</h2>
                    </div>
                </Header>
                <ul
                    style={{
                        padding: '1.5rem 0rem 1.5rem 0rem',
                        marginTop: '2rem',
                        fontSize: '1.125rem',
                        fontWeight: '400',
                    }}
                >
                    {
                        isAdmin ? <>
                            {
                                adminLinks.map((link, index) => {
                                    return <li
                                        key={index}
                                        style={{
                                            color: `${link.href === pathname ? 'green' : '#333'}`,
                                            ...liStyle
                                        }}
                                    >
                                        <link.icon style={{ fontSize: '1.5rem' }} />
                                        <Link href={link.href}>{link.url}</Link>
                                    </li>
                                })
                            }
                        </> : <>
                            {userLinks.map((link, index) => {
                                return <li
                                    key={index}
                                    style={{
                                        color: `${link.href === pathname ? 'green' : '#333'}`,
                                        ...liStyle
                                    }}
                                >
                                    <link.icon style={{ fontSize: '1.5rem' }} />
                                    <Link href={link.href}>{link.url}</Link>
                                </li>
                            })}
                        </>
                    }
                </ul>
            </div >
        </div>
    )
}

export const RightSideBar = ({ }) => {
    return (
        <div>
            <div
                style={{
                    backgroundColor: 'white',
                    minHeight: '100dvh',
                    width: '240px',
                    paddingInline: '1.5rem',
                    boxSizing: 'border-box',
                }}
            >
                <Header>
                    <button
                        style={{
                            padding: '0',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: 'transparent',
                            padding: '.25rem 0',
                            border: 'none',
                            fontSize: '1.125rem'
                        }}
                    >
                        Logout {'  '}
                        <BiLogInCircle style={{ fontSize: '1.5rem' }} />
                    </button>
                </Header>
                <User name={'dudely Codez'} email={'dudelycodez@gmail.com'} />
            </div>
        </div>
    )
}
