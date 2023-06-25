import { DateUI } from '@app/(user)/Date'
import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { useToken } from '@lib/useToken'
import Link from 'next/link'
import { Client } from './Client'

export default async function Page() {
    const session = await getServerSession(authOptions);
    const user = useToken(session);
    if (!user) {
        return
    }

    const res = await fetch(process.env.API_BASE_URL + '/users/' + user?.user + '/distributors', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${user?.token}`
        }
    })
    const data = await res.json()
    const distributors = data.data

    return (
        <div className='min-h-[calc(100dvh-56px)] px-4 w-full'>
            <header className='flex py-4 justify-between items-center'>
                <h1 className='font-bold text-2xl'>Distributors</h1>
                <div>
                    <DateUI />
                </div>
            </header>

            <div className='py-2 pb-6'>
                <Link href='/distributors/add' className='py-2 px-6 bg-green-700 rounded-md text-white'>Add Retailer</Link>
            </div>

            <Client distributors={distributors} user={user} accessToken={session.accessToken} />
        </div>
    )
}

