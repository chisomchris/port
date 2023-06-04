import Link from 'next/link'
import { Form } from './Form'

export const metadata = {
  title: 'Forgot Password'
} 

function Page() {
  return (
    <div className='w-screen h-[100dvh] bg-white grid place-items-center'>
      <div className='p-4 max-w-[540px] md:py-8 md:px-6'>
        <h2 className='text-[2rem] font-bold'>Forgot password</h2>
        <p className='mt-4'>Enter the email address you registered with and we will send you further instructions to create a new password</p>
        <Form />
        <p className='mt-6'>Remember password? <Link href='/auth/login' className='text-green-900 font-bold'>Sign in now</Link></p>
      </div>

    </div>
  )
}

export default Page

// alt='snawy white crystal pattern hd images png free download @transparentpng.com'