import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { useToken } from '@lib/useToken'
// import Link from 'next/navigation'
import { Banner } from '@components/Banner'
import { Card } from '@components/Card'

export default async function Page() {
  const session = await getServerSession(authOptions)
  const user = useToken(session)
  if (!user) {
    return
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

  const res = await fetch(process.env.API_BASE_URL + '/allDistributor/' + user?.user, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user?.token}`
    }
  })
  const data = await res.json()
  const distributors = data.data

  return (
    <div className='min-h-[calc(100dvh-56px)] px-4 w-full md:px-8'>
      <header className='flex py-4 justify-between'>
        <h1 className='font-bold text-2xl'>Dashboard</h1>
        <div>
          <p>29, Sep 2023, Friday</p>
        </div>
      </header>
      <Banner name={user?.organization} email={user?.email} phone={user?.phone} />
      <h2 className='mt-4 font-bold text-xl pt-4 pb-3'>Distributors</h2>
      {distributors.length ?
        <ul className='grid grid-layout gap-6 pb-6'>
          {distributors.map((distributor, index) => {
            return (
              <li key={distributor._id}>
                <Card name={distributor.organization} email={distributor.email} mobile={distributor.phone} color={bgs[getIndex(index)]} id={distributor._id} />
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
