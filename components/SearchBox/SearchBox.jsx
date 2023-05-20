'use client'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState()
    const divStyle = {
        position: 'relative',
        width: '20rem',
    }
    const inputStyle = {
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRadius: '.25rem',
        padding: '.5rem 3rem .5rem .75rem',
        border: 'solid white 2px',
        width: '100%'
    }

    return (
        <div style={divStyle}  >
            <input
                type='text'
                value={searchTerm}
                onInput={(e) => { setSearchTerm(e.target.value) }}
                // _focus={{ border: 'solid gray 2px' }}
                aria-label='Search Input'
                style={inputStyle}
            />
            <FaSearch
                style={{
                    position: 'absolute',
                    right: '.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '1.25rem',
                    color: 'gray'
                }}
            />
        </div>
    )
}