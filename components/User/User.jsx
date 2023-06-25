import { FaPlus, FaUser } from 'react-icons/fa'
import { useSession } from 'next-auth/react'

export const User = ({ isMobile }) => {
    const { data: session } = useSession();

    const user = session?.user;

    return (
        <div className={`mt-6 mb-6 flex pr-4 ${isMobile ? 'gap-4' : 'gap-0'} ${isMobile ? 'flex-row' : 'flex-col'} items-center`} >
            <div className={`grid place-items-center rounded-full relative ${isMobile ? 'h-[3rem]' : 'h-[5.5rem]'} ${isMobile ? 'w-[3rem]' : 'w-[5.5rem]'} border-[3px] border-solid border-[#ddd]`}>
                <div className={`h-4 w-4 bg-blue-700 absolute rounded-full grid place-items-center ${isMobile ? 'right-[-10%]' : 'right-[2%]'} ${isMobile ? 'bottom-[-10%]' : 'bottom-[3%]'}`}>
                    <FaPlus className='text-[.5rem] text-white' />
                </div>
                <div>
                    <FaUser className={`text-gray-300 ${isMobile ? 'text-[1.75rem]' : 'text-[3rem]'}`} />
                </div>
            </div>
            <div className={` ${isMobile ? 'text-left' : 'text-center'}`}>
                <p className='font-bold m-0 mt-2' >{user?.name}</p>
                <p className='m-0'>{user?.email}</p>
            </div>
        </div>
    )
}