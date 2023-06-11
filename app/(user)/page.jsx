import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { useToken } from '@lib/useToken'
import Client from './ClientUI'

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
    <Client distributors={distributors} user={user}/>
  )
}


