'use client'
import { useState } from 'react'
import { Banner } from '@components/Banner'
import { Card } from '@components/Card'
import { Overlay } from './Overlay'
import { DateUI } from './Date'

export default function Client({ distributors: dist, user }) {
    const [showOverlay, setShowOverlay] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [toDelete, setToDelete] = useState('')
    const [distributors, setDistributors] = useState(dist)

    const showModal = (id) => {
        setToDelete(id)
        setShowOverlay(true)
    }
    const hideModal = () => {
        setToDelete('')
        setShowOverlay(false)
    }

    const deleteDistributor = async () => {
        if (user.user && toDelete) {
            try {
                setDisabled(true)
                const res = await fetch(`/api/distributors/${user.user}/${toDelete}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                })
                const data = await res.json()
                if (res.ok && data) {
                    const filtered = distributors.filter(distributor => distributor._id !== toDelete)
                    setDistributors(filtered)
                    setDisabled(false)
                    hideModal()
                }
                if (!res.ok && data) {
                    console.log(data)
                    alert('error')
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    const bgs = [
        'bg-purple-500',
        'bg-red-400',
        'bg-gray-700',
        'bg-green-600',
        'bg-blue-600',
    ]

    const getIndex = (index) => {
        return index % bgs.length
    }

    return (
        <div className='min-h-[calc(100dvh-56px)] px-4 w-full'>
            <Overlay display={showOverlay} hide={hideModal} deleteDistributor={deleteDistributor} toDelete={toDelete} disabled={disabled} />
            <header className='flex py-4 justify-between items-center'>
                <h1 className='font-bold text-2xl'>Dashboard</h1>
                <div>
                    <DateUI />
                </div>
            </header>
            <Banner name={user?.organization} email={user?.email} phone={user?.phone} />
            <h2 className='mt-4 font-bold text-xl pt-4 pb-3'>Distributors</h2>
            {distributors && distributors.length ?
                <ul className='grid grid-layout gap-6 pb-6'>
                    {distributors.map((distributor, index) => {
                        return (
                            <li key={distributor._id}>
                                <Card name={distributor.organization} email={distributor.email} mobile={distributor.phone} color={bgs[getIndex(index)]} id={distributor._id} show={showModal} />
                            </li>
                        )
                    })}
                </ul> :
                <p>
                    You dont have any Distributor yet. Click <a className='font-bold text-green-900' href='/distributors/add'>here</a> to add distributor
                </p>}
        </div>
    )
}


