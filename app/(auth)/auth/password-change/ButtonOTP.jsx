'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export const Button = () => {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const [showBtn, setShowBtn] = useState(false)
    const resendOTP = async () => {
        if (email) {
            try {
                fetch('/api/otp/rsend', {
                    method: 'POST',
                    body: JSON.stringify(email),
                    headers: { "Content-Type": "application/json" }
                })
                setShowBtn(false)
                setTimeout(() => {
                    setShowBtn(true)
                }, 30000)
            } catch (error) {
                console.error(error.message)
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setShowBtn(true)
        }, 30000)
    })

    return (
        <div className={`${showBtn ? '' : 'hidden'} pt-4 flex mt-4 flex-wrap items-center`}>
            {/* <p className='mr-6 font-[500]'>Didn&#39;t get an OTP email? </p> */}
            <button className={`bg-green-900 text-white py-2 px-6 mt-2 disabled:bg-green-600 hover:bg-green-700`} onClick={() => { resendOTP() }}  >Resend OTP</button>
        </div>
    )
}

