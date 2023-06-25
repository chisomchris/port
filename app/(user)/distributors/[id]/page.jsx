// import { useRouter } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import Link from 'next/link'
import { DateUI } from '@app/(user)/Date'

const Page = async ({ params }) => {
    const session = await getServerSession(authOptions);
    const user = session.user;
    if (!user) {
        return
    }
    const distributorId = params.id

    const res = await fetch(process.env.API_BASE_URL + '/users/' + user?.id + '/distributors/' + distributorId, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session?.accessToken}`
        }
    })
    const data = await res.json()
    const distributor = data.data
    // const router = useRouter()

    return (
        <div className='p-4 min-h-[calc(100dvh-56px)] w-full desktop:px-8'>
            <header className='flex py-4 justify-between items-center'>
                <Link href='/distributors' className='bg-green-800 text-white py-2 px-8 rounded-md'>Back</Link>
                <div>
                    <DateUI />
                </div>
            </header>
            <h1 className='font-bold text-2xl'>{distributor?.organization}</h1>
        </div>
    )
}

export default Page