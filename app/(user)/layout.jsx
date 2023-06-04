'use client'
import { redirect } from 'next/navigation'
import { Home } from "@components/Home/Home"
import { useSession } from 'next-auth/react';

const Layout = ({ children }) => {
    const { data: session, status } = useSession();

    if (session && status === 'authenticated') {
        return <Home>{children}</Home>
    }
    return redirect('/auth/login')


}

export default Layout