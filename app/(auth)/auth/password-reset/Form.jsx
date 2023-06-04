'use client'
import { MdReport } from 'react-icons/md'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'

export const Form = () => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: { email: '' },
        validationSchema: yup.object().shape({
            email: yup.string().email('Invalid Email Address').required('Email address is required')
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const { email } = values
                const res = await fetch('/api/forgot-password', {
                    method: 'POST',
                    body: JSON.stringify({ email }),
                    headers: { 'Content-Type': 'application/json' }
                })
                const data = await res.json()
                console.log(data)
                if (res.status === 200 && data) {
                    router.push('/auth/password-change')
                }

            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='relative pb-2'>
                <input type='email' placeholder='Email address' name='email' {...formik.getFieldProps('email')} className={`w-full py-2 px-4 text-[1.125rem] outline-none border-solid border-[1px] ${formik.touched.email && formik.errors.email ? 'border-red-600' : 'border-gray-400'} mt-8 mb-4 focus:border-2 focus:${formik.touched.email && formik.errors.email ? 'border-red-600' : 'border-green-900'}`} />
                {formik.touched.email && formik.errors.email ? <p className='text-red-600 absolute right-0 bottom-0'> <MdReport className='inline-block mr-1 -mt-1 text-lg' />{formik.errors.email} </p> : null}
            </div>
            <input type='submit' value='Change password' className='w-full py-2 px-4 text-[1.125rem] outline-none bg-green-900 text-white mt-6 hover:bg-green-700 active:bg-green-700' />
        </form>
    )
}