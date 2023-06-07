import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { useToken } from '@lib/useToken'
import Link from 'next/navigation'

export default async function Page() {
  const session = await getServerSession(authOptions)
  const user = useToken(session)
  if (!user) {
    return
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
    <div className='min-h-[calc(100dvh-56px)] px-4 w-full'>
      <h2 className='text-green-900 font-bold text-xl pt-4 pb-3'>Distributors</h2>
      {distributors.length ? (<>
        <ul>
          {distributors.map(distributor => {
            return (
              <li key={distributor._id} className='mb-4'>
                <h2 className='font-bold text-lg'>{distributor.organization}</h2>
                <p>{distributor.email}</p>
                <p>{distributor.phone}</p>
              </li>
            )
          })}
        </ul>
      </>) : (<>
        <p>You don&#39;t have any Distributor yet. Click <Link className='font-bold text-green-900' href='/distributors/add'>here</Link> to add distributor</p>
      </>)
      }
      {/* <>{JSON.stringify(data)}</> */}
    </div>
  )
}
