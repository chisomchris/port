'use client'
import { useRef, useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Page() {
    const otpRef = useRef()
    const [showResend, setShowResend] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [loading, setLoading] = useState(false)
    const searchParams = useSearchParams();
    const router = useRouter()
    const email = searchParams.get('email');

    const sendOTP = async () => {
        const otp = otpRef.current.value
        if (otp.trim().length !== 6) {
            alert("Invalid format")
        } else {
            setLoading(true)
            try {
                const res = await fetch('/api/otp/confirm', {
                    method: 'POST',
                    body: JSON.stringify({ otp }),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await res.json()
                console.log(data)
                setLoading(false)
                if (res.ok && res.status === 200 && data) {

                    return router.push('/auth/login')
                }
                if (res.status !== 200) {
                    setInvalid(true)
                }
            } catch (error) {
                setReqError(error.message)
            }

        }
    }

    const resendOTP = async () => {
        if (email) {
            try {
                fetch('/api/otp/resend', {
                    method: 'POST',
                    body: JSON.stringify(email),
                    headers: { "Content-Type": "application/json" }
                })
                setShowResend(false)
                setTimeout(() => {
                    setShowResend(true)
                }, 45000)
            } catch (error) {
                console.error(error.message)
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setShowResend(true)
        }, 45000)
    }, [])

    return (
        <div className='min-h-[100dvh] grid place-items-center'>
            <div className='w-full p-4 max-w-[520px] mx-auto'>
                <h2 className='font-bold text-2xl text-green-900 mb-4'>Verify Your Identity</h2>
                <p>A verification code has been sent to <strong>{email}</strong>. Enter the code to continue and be redirected.</p>
                <div className=' py-4 min-[520px]:flex min-[520px]:items-center relative'>
                    {invalid && <p className='text-red-400 min-[520px]:absolute min-[520px]:top-[85%]'>Invalid OTP</p>}
                    <input className='shadow-[inset_0px_0px_4px_2px_rgba(0,0,0,0.25)] outline-none mr-2 h-12 text-xl px-4 focus:border-solid focus:border-2 focus:border-green-900' type='text' name='input-one' ref={otpRef} onInput={() => {
                        if (invalid) { setInvalid(false) }
                    }} />

                    <button className='bg-green-900 text-white py-2 px-6 mt-4 disabled:bg-[#444] hover:bg-green-700 h-12 min-[520px]:mt-0' onClick={sendOTP} disabled={loading}>{loading ? 'Verifying...' : 'Verify Account'}</button>
                </div>
                <div className={`${showResend ? 'block' : 'hidden'} min-[520px]:my-6`}>
                    <p>Didn&#39;t get an OTP email? </p>
                    <button className='bg-green-900 text-white py-2 px-6 h-12 my-4 disabled:bg-green-600 hover:bg-green-800' onClick={resendOTP} disabled={loading}>Send Again</button>
                </div>
            </div>
        </div>
    )
}