'use client'
import { useSession } from 'next-auth/react';
import { useToken } from '@lib/useToken'

export default async function Page() {
  const { data } = useSession();
  const user = useToken(data)

  return (
    <div className='min-h-[calc(100dvh-56px)] px-4'>
      <p>{user?.email}</p>
    </div>
  )
}
