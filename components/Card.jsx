import Link from 'next/link'
import { FaTrashAlt } from 'react-icons/fa'

export const Card = ({ name, email, mobile, color, id }) => {
    return (
        <div className={'py-4 px-6 rounded-xl text-white ' + color}>
            <h2 className='font-bold'>{name}</h2>
            <p>{email}</p>
            <p>{mobile}</p>
            <div className='flex items-center gap-x-4 gap-y-2 mt-4 flex-wrap'>
                <Link href={`/distributors/${id}`} className=' bg-white gap-4 py-1 px-6 text-[#666] rounded-md inline-block'>View Details</Link>
                <button className='flex items-center bg-white gap-4 py-1 px-6 text-red-400 rounded-md '>Delete <FaTrashAlt /></button>
            </div>
        </div>
    )
}
