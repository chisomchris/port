'use client'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { MdReport } from 'react-icons/md'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useRouter } from 'next/navigation'


export const Form = () => {
    const router = useRouter()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPW, setShowPW] = useState(false)
    const [showCPW, setShowCPW] = useState(false)
    const onClick = () => { setShowPW(v => !v) }
    const onClick1 = () => { setShowCPW(v => !v) }
    const onInput = () => {
        if (error) setError('')
    }

    const formik = useFormik({
        initialValues: { password: '', confirm_password: '', otp: '' },
        validationSchema: yup.object().shape({
            password: yup.string().trim().required('Password is required').test('len', 'Must be more than 5 characters', val => val.length >= 6).test('len1', 'Must not exceed 50 characters', val => val.length < 51),
            confirm_password: yup.string().trim().required('Confirm Password is required').oneOf([yup.ref('password')], 'Password Mismatch!'),
            otp: yup.string().required().matches(/^\d{6}$/, "Must be 6 digits")
        }),
        onSubmit: async (values, { }) => {
            try {
                setLoading(true)
                const { password, otp } = values
                const res = await fetch('/api/change-password', {
                    method: 'POST',
                    hearders: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ password, otp })
                })
                const data = await res.json()
                setLoading(false)
                if (res.status !== 200) {
                    setError(data.message || 'Error Occured')
                }
                if (res.ok && res.status === 200 && data) {
                    router.push('/auth/login')
                }

            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='relative mb-2 pb-6 mt-2'>
                <label htmlFor='password'>Password <span className='text-red-600 font-bold'>*</span></label>
                {showPW ? <AiOutlineEyeInvisible onClick={onClick} className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl" /> : <AiOutlineEye onClick={onClick} className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl" />}
                <input onInput={onInput} type={showPW ? 'text' : 'password'} name='password' id='password' {...formik.getFieldProps('password')} className={`w-full py-2 px-4 ${formik.touched.password && formik.errors.password ? 'border-red-600' : 'border-gray-400'} outline-none border-solid border-[1px] focus:${formik.touched.password && formik.errors.password ? 'border-red-600' : 'border-green-900'} focus:border-2`} />
                {formik.touched.password && formik.errors.password ? <p className='text-red-600 absolute'><MdReport className='inline-block mr-1 -mt-1 text-lg' /> {formik.errors.password}</p> : null}
            </div>

            <div className='relative mb-4 pb-6 '>
                <label htmlFor='cpassword'>Confirm Password <span className='text-red-600 font-bold'>*</span></label>
                {showCPW ? <AiOutlineEyeInvisible onClick={onClick1} className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl" /> : <AiOutlineEye onClick={onClick1} className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl" />}
                <input onInput={onInput} type={showCPW ? 'text' : 'password'} name='confrim_password' id='cpassword' {...formik.getFieldProps('confirm_password')} className={`w-full py-2 px-4 ${formik.touched.confirm_password && formik.errors.confirm_password ? 'border-red-600' : 'border-gray-400'} outline-none border-solid border-[1px] focus:${formik.touched.confirm_password && formik.errors.confirm_password ? 'border-red-600' : 'border-green-900'} focus:border-2`} />
                {formik.touched.confirm_password && formik.errors.confirm_password ? <p className='text-red-600 absolute'><MdReport className='inline-block mr-1 -mt-1 text-lg' /> {formik.errors.confirm_password}</p> : null}
            </div>

            <div className='relative mb-4 pb-2'>
                <label htmlFor='otp'>OTP <span className='text-red-600 font-bold'>*</span></label>
                <input onInput={onInput} name='otp' id='otp' {...formik.getFieldProps('otp')} className='block py-2 px-4  outline-none border-solid border-[1px]  focus:border-2' />
                {formik.touched.otp && formik.errors.otp ? <p className='text-red-600 absolute'><MdReport className='inline-block mr-1 -mt-1 text-lg' /> {formik.errors.otp}</p> : null}
            </div>
            {error && <p className='text-red-600 capitalize mb-2'><MdReport className='inline-block mr-1 -mt-1 text-lg' />{error}</p>}
            <input type='submit' disabled={loading} value={loading ? 'Loading...' : 'Change Password'} className='bg-green-900 text-white py-2 px-4 w-full hover:bg-green-700 disabled:bg-gray-800' />
        </form>
    )
}