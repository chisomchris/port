import React from 'react'

export const Banner = ({ name, phone, email }) => {
    return (
        <div className='bg-red-100 rounded-xl p-4 mt-4 md:p-8'>
            <h2 className='text-red-400 font-bold text-lg'>Welcome back {name}!</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}
