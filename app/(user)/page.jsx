'use client'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'

export default function Layout({ }) {
  const { data: session, status } = useSession();
  
  if (status === 'loading') {
    return <h2>Loading...</h2>
  }

  if (status === 'authenticated') {
    return <p>{JSON.stringify(session)}</p>;
  }

  return (
    redirect('/auth/login')
  )
}
