'use client'
import { Button } from "@components/button";
import { Email } from "@components/input/Email";
import { Password } from "@components/input/Password";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const UI = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const onSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.querySelector('#email')?.value
        const password = event.target.querySelector('#password')?.value
        try {
            setIsLoading(true)
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl
            })
            if (!res?.error) {
                router.push(callbackUrl)
            } else {
                setError('Invalid email or password')
                setIsLoading(false)
            }
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }
    return (
        <main className="grid place-items-center w-full min-h-[100dvh] bg-white sm:bg-primary py-4">
            <div className="bg-white py-8 px-4 w-full text-lg sm:w-[480px] sm:px-8">
                <h1 className="text-primary text-3xl">Welcome back!</h1>
                <p className="mb-4">Sign in to your account</p>
                <form onSubmit={onSubmit} onChange={(e) => {
                    if(error){
                        setError('')
                    }
                }}>
                    <Email />
                    <Password />
                    {error && <p className="text-red-700">{error}</p>}
                    <Button isLoading={isLoading}/>
                </form>
                <p className="pt-4">New to app? {' '}<Link href='/auth/signup' className="font-[500] text-primary">Create an Account</Link></p>
            </div>
        </main>
    )
}

export default UI