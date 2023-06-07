import { Home } from "@components/Home/Home"
import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { redirect } from 'next/navigation'

const Layout = async ({ children }) => {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/auth/login')
    }
    return <Home>{children}</Home>
}

export default Layout