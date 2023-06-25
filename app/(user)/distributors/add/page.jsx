'use client'
import { Header } from "@components/Home/Header";
import { useSession } from 'next-auth/react';
import { useState } from "react";
import Link from 'next/link'

export default function Page() {
    const { data : session } = useSession();
    const user = session?.user
    const URL = '/api/distributor/add/' + user?.id
    const token = session?.accessToken
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        if (email && token && user?.id) {
            setDisabled(true)
            const res = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (res.status !== 200) {
                setDisabled(false)
                return setError(data.msg)
            }
            if (res.status === 200 && data) {
                setDisabled(false)
                setShowModal(true)
            }
        }
    }

    return (
        <div className='w-full px-4 min-h-[calc(100dvh-56px)]'>
            <Header>
                <h2 className="font-bold text-xl">Add Distributor</h2>
            </Header>
            <p className="mt-4 mb-3">Please enter valid/registered email of customer to add as partner</p>
            <form onSubmit={onSubmit} className="relative">
                <label htmlFor="email" className="sm:mr-4">Email</label>
                <div className="relative max-w-[420px]">
                    <input type='email' placeholder="example@email.com" id='email' value={email} onInput={(e) => {
                        if (error) { setError('') };
                        setEmail(e.target.value);
                    }
                    } title='A valid email address is required' required className="block w-full mt-2 mb-4 py-2 px-4 outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900" />
                    <p className="text-red-400 absolute right-0 bottom-[calc(100%+.375rem)]">{error}</p>
                </div>
                <input type='submit' disabled={disabled} value='Add Distributor' className="bg-green-900 text-center w-full text-white py-2 max-w-[420px] hover:bg-green-800 disabled:bg-gray-700" />
            </form>
            <Modal show={showModal} setShow={setShowModal} />
        </div>
    )
}

const Modal = ({ show, setShow }) => {
    const addNew = () => { setShow(false) }
    return (
        <div className={`${show ? 'block' : 'hidden'} fixed top-0 left-0 right-0 z-[100] min-h-[100vh] bg-[#22222210] grid place-items-center`}>
            <div className='bg-white rounded-lg p-6 w-[90%] max-w-[420px] top-[calc(100%+1rem)]'>
                <p className=''>Distributor added successfully!</p>
                <div className='my-3 flex flex-wrap gap-x-6 gap-y-3 items-center'>
                    <button className='bg-green-700 py-1 px-6 text-white rounded-sm' onClick={addNew}>Add Another</button>
                    <Link href='/' className='font-bold text-green-800'>Back to Dashboard</Link>
                </div>
            </div>
        </div>
    )
}
