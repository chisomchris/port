'use client'
import { Header } from "@components/Home/Header";
import { useSession } from 'next-auth/react';
import { useToken } from '@lib/useToken'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter()
    const { data } = useSession();
    const user = useToken(data)
    const URL = '/api/distributor/add/' + user?.user
    const token = user?.token
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        if (email && token && user?.user) {
            const res = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return setError(data.msg)
            }
            if (res.status === 200 && data) {
                return router.push('/')
            }
        }
    }

    return (
        <div className='w-full px-4 min-h-[calc(100dvh-56px)]'>
            <Header>
                <h2 className="font-bold ">Add Distributor</h2>
            </Header>
            <p className="mt-4 mb-3">Please enter valid/registered email of customer to add as partner</p>
            <form onSubmit={onSubmit} className="">
                <label htmlFor="email" className="sm:mr-4">Email</label>
                <div className="relative max-w-[420px]">
                    <input type='email' placeholder="example@email.com" id='email' value={email} onInput={(e) => {
                        if (error) { setError('') };
                        setEmail(e.target.value);
                    }
                    } title='A valid email address is required' required className="block w-full mt-2 mb-4 py-2 px-4 outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900" />
                    <p className="text-red-400 absolute right-0 bottom-[calc(100%+.375rem)]">{error}</p>
                </div>
                <input type='submit' value='Add Distributor' className="bg-green-900 text-center w-full text-white py-2 max-w-[420px] hover:bg-green-700" />
            </form>
        </div>
    )
}