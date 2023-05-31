'use client'
import { useState } from "react"
import Link from "next/link"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export const Password = () => {
    const [showPassword, setShowPassword] = useState(false)
    const onClick = () => {
        setShowPassword(v=>!v)
    }

    return (
        <div className="mb-3">
            <label htmlFor="email" className="text-secondary ">Password</label>
            <div className="relative">
                <input type={ showPassword ?  'text' : 'password'} className="py-2 px-4 text-lg w-full block border-secondary/50 border-2 border-solid rounded-none outline-none focus:border-primary" id='password' placeholder="password"/>
                {showPassword ? <AiOutlineEyeInvisible onClick={onClick} className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl"/> : <AiOutlineEye onClick={onClick} className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl"/> }
            </div>
            <Link href='/auth/password-reset' className="font-[500] mt-3 text-primary">Forgot password?</Link>
        </div>
    )
}
