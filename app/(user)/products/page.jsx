import { DateUI } from '@app/(user)/Date'
import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'

export default async function Page() {
    const session = await getServerSession(authOptions);
    const user = session.user;

    if (!user) {
        return
    }

    const res = await fetch(process.env.API_BASE_URL + '/users/' + user?.id + '/products', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session?.accessToken}`
        }
    })
    const data = await res.json()
    const products = data.data

    return (
        <div className='min-h-[calc(100dvh-56px)] px-4 w-full'>
            <header className='flex py-4 justify-between items-center'>
                <h1 className='font-bold text-2xl'>Products</h1>
                <div>
                    <DateUI />
                </div>
            </header>
        </div>
    )
}
