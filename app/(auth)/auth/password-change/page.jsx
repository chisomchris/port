import { Form } from './Form'
import { Button } from './ButtonOTP'

export const metadata = {
    title: 'Change Password'
}

export default function Page() {

    return (
        <div className='w-screen h-[100dvh]'>
            <div className='p-4 max-w-[540px] mx-auto md:py-8 md:px-6'>
                <h2 className='text-[2rem] font-bold text-green-900'>Change password</h2>
                <p className='mt-4'>A verification code has been sent to your email. Enter the code with your new password.</p>
                <Form />
                <Button />
            </div>
        </div>
    )
}