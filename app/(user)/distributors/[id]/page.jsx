'use client'
import { useRouter } from 'next/navigation'

const Page = ({ params }) => {
    const router = useRouter()
    const id = params.id

    return (
        <div className='p-4 min-h-[calc(100dvh-56px)] w-full desktop:px-8'>
            <button onClick={() => { router.back() }} className='bg-green-800 text-white py-2 px-8 rounded-sm block mb-4'>Back</button>
            page yet to be implemented
        </div>
    )
}

export default Page