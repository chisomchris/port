import Link from 'next/link'
import { MyForm } from './Form'

export const metadata = {
  title: 'Sign Up'
}

function Page() {
  return (
    <div className='min-h-[100dvh] p-4 max-w-[640px] mx-auto pt-8'>
      <h2 className='font-bold text-[2rem] text-green-900'>Welcome!!!</h2>
      <p className='pt-4'>Please fill the form below with your correct details to get started</p>
      <MyForm />
      <p className='my-6'>Already have an account? <Link href='/auth/login' className='font-bold text-green-900'>Sign in now</Link></p>
    </div>
  )
}

export default Page