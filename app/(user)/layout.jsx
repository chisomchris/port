import { Home } from "@components/Home/Home"
import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { redirect } from 'next/navigation'
import { useToken } from '@lib/useToken'

const Layout = async ({ children }) => {
    const session = await getServerSession(authOptions)
    
    if (!session) {
        redirect('/auth/login')
    }
    const user = useToken(session)
    return <Home>{children}</Home>
}

export default Layout