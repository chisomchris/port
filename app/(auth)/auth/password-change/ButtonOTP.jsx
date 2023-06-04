'use client'
import { useState, useEffect } from 'react'

export const Button = () => {
    const [showBtn, setShowBtn] = useState(false)
    const [loading, setLoading] = useState(false)
    const resendOTP = () => {
        // send request
    }

    useEffect(() => {
        setTimeout(() => {
            setShowBtn(true)
        }, 30000)
    })

    return (
        <div className={`${showBtn ? '' : 'hidden'} pt-4 flex mt-4 flex-wrap items-center`}>
            {/* <p className='mr-6 font-[500]'>Didn&#39;t get an OTP email? </p> */}
            <button className={`bg-green-900 text-white py-2 px-6 mt-2 disabled:bg-green-600 hover:bg-green-700`}  >Resend OTP</button>
        </div>
    )
}