import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { redirect } from 'next/navigation'

export const authenticate = async () => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect('/auth/login')
    }
    return session;
}