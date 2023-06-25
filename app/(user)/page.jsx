import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import Client from './ClientUI'

export default async function Page() {
  const  session  = await getServerSession(authOptions);
  if (!session) {
    return
  }
  
  const user = session?.user;

  const res = await fetch(process.env.API_BASE_URL + '/users/' + user?.id + '/distributors', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.accessToken}`
    }
  })
  const data = await res.json()
  const distributors = data.data

  return (
    <Client distributors={distributors} user={user} />
  )
}
