'use client'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState()
    return (
        <div className='relative w-full max-w-[360px]' >
            <input
                type='text'
                value={searchTerm}
                onInput={(e) => { setSearchTerm(e.target.value) }}
                aria-label='Search Input'
                className='bg-white rounded-[.25rem] w-full py-2 pr-12 pl-3'
            />
            <FaSearch className='absolute right-3 top-1/2 text-gray-700 text-[1.25rem] -translate-y-1/2' />
        </div>
    )
}