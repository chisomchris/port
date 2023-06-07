'use client'
import { Button } from "@components/button";
import { Email } from "@components/input/Email";
import { Password } from "@components/input/Password";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useFormik } from 'formik'
import * as yup from 'yup'

const UI = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const onSubmit = async (values,) => {
        const { email, password } = values

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
            setError(error?.message)
            setIsLoading(false)
        }
    }

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: yup.object().shape({
            password: yup.string().trim().required('Password is required').test('len', 'Must be more than 5 characters', val => val.length >= 6).test('len1', 'Must not exceed 50 characters', val => val.length < 51),
            email: yup.string().trim().email('Invalid Email Address').required('Email is required'),
        }),
        onSubmit
    })

    return (
        <main className="grid place-items-center w-full min-h-[100dvh] bg-white sm:bg-primary py-4">
            <div className="bg-white py-8 px-4 w-full text-lg sm:w-[480px] sm:px-8">
                <h1 className="text-primary text-3xl">Welcome back!</h1>
                <p className="mb-4">Sign in to your account</p>
                <form onSubmit={formik.handleSubmit} onChange={(e) => {
                    if (error) {
                        setError('')
                    }
                }}>
                    <Email name='email' formik={formik} />
                    <Password name='passord' formik={formik} />
                    {error && <p className="text-red-600">{error}</p>}
                    <Button isLoading={isLoading} />
                </form>
                <p className="pt-4">New to app? {' '}<Link href='/auth/signup' className="font-[500] text-primary">Create an Account</Link></p>
            </div>
        </main>
    )
}

export default UI