'use client'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'

export const MyForm = () => {
    const router = useRouter()
    const signUpSchema = Yup.object().shape({
        name: Yup.string().required('Business Name is Required'),
        email: Yup.string().required('Email is Required').email('Invalid Email address'),
        phone: Yup.string().required('Phone number is Required'),
        cac: Yup.string().required('Business registration is Required'),
        country: Yup.string().required('Country required'),
        state: Yup.string().required('State required'),
        city: Yup.string().required('City required'),
        address: Yup.string().required().min(6, 'Required at least six(6) letters'),
        postal: Yup.string().required(),
        password: Yup.string().required().min(6, 'Password must be more than 6 characters').max(50, 'Password must not exceed 50 characters'),
        cpassword: Yup.string().required('Password confirmation required').oneOf([Yup.ref('password')], 'Password must match'),
    })

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        cac: '',
        country: '',
        state: '',
        city: '',
        address: '',
        postal: '',
        password: '',
        cpassword: '',
    }

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })

        const { data } = await res.json()

        if (res.status === 200 && data) {
            setSubmitting(false)
            router.push(`/auth/signup/confirm-otp?email=${data.email}`)
        }
    }

    const formik = useFormik({ initialValues: initialValues, validationSchema: signUpSchema, onSubmit: onSubmit })

    return (
        <form className='py-4 px-3 mt-4 rounded-sm bg-[#0a690f08] md:px-8 rounded-lg pb-8' onSubmit={formik.handleSubmit}>
            <fieldset className='border-solid border-[1px] border-black px-4 pb-4 rounded-md mb-6'>
                <legend className='italic'>Details</legend>
                <div className='py-2'>
                    <label className='' htmlFor='organization'>Name of Business</label>
                    <input
                        type='text'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='organization'
                        name='name'
                        placeholder='Business name'
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? <p className='text-red-400'>{formik.errors.name}</p> : null}
                </div>

                <div className='py-2'>
                    <label className='' htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='email'
                        name='email'
                        placeholder='example@email.com'
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email ? <p className='text-red-400'>{formik.errors.email}</p> : null}
                <div className='py-2'>
                    <label className='' htmlFor='phone'>Phone</label>
                    <input
                        type='text'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='phone'
                        placeholder='0000-000-0000'
                        name='phone'
                        {...formik.getFieldProps('phone')}
                    />
                    {formik.touched.phone && formik.errors.phone ? <p className='text-red-400'>{formik.errors.phone}</p> : null}
                </div>
                <div className='py-2'>
                    <label className='' htmlFor='cac'>CAC Number</label>
                    <input
                        type='text'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='cac'
                        placeholder='CAC Number'
                        name='cac'
                        {...formik.getFieldProps('cac')}
                    />
                    {formik.touched.cac && formik.errors.cac ? <p className='text-red-400'>{formik.errors.cac}</p> : null}
                </div>
            </fieldset>

            <fieldset className='border-solid border-[1px] border-black px-4 pb-4 rounded-md mb-6'>
                <legend className='italic'>Location</legend>
                <div className='py-2'>
                    <label className='' htmlFor='country'>Country</label>
                    <input
                        type='text'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='country'
                        name='country'
                        placeholder='Country'
                        list='countrylist'
                        {...formik.getFieldProps('country')}
                    />
                    {formik.touched.country && formik.errors.country ? <p className='text-red-400'>{formik.errors.country}</p> : null}
                    <datalist id='countrylist'>
                        <option value='China'>China</option>
                        <option value='niger'>niger</option>
                        <option value='nigeria'>nigeria</option>
                        <option value='chad'>chad</option>
                        <option value='ghana'>ghana</option>
                        <option value='togo'>togo</option>
                        <option value='zambia'>zambia</option>
                    </datalist>
                </div>
                <div className='py-2'>
                    <label className='' htmlFor='state'>State</label>
                    <input
                        type='text'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='state'
                        placeholder='State'
                        name='state'
                        {...formik.getFieldProps('state')}
                    />
                    {formik.touched.state && formik.errors.state ? <p className='text-red-400'>{formik.errors.state}</p> : null}
                </div>
                <div className='py-2'>
                    <label className='' htmlFor='city'>City</label>
                    <input
                        type='text'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='city'
                        placeholder='City'
                        name='city'
                        {...formik.getFieldProps('city')}
                    />
                    {formik.touched.city && formik.errors.city ? <p className='text-red-400'>{formik.errors.city}</p> : null}
                </div>
                <div className='py-2'>
                    <label className='' htmlFor='address'>Address</label>
                    <input
                        type='text'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='address'
                        placeholder='Address'
                        name='address'
                        {...formik.getFieldProps('address')}
                    />
                    {formik.touched.address && formik.errors.address ? <p className='text-red-400'>{formik.errors.address}</p> : null}
                </div>
                <div className='py-2'>
                    <label className='' htmlFor='postal'>Postal Code</label>
                    <input
                        type='text'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='postal'
                        placeholder='postal code'
                        name='postal'
                        {...formik.getFieldProps('postal')}
                    />
                </div>{formik.touched.postal && formik.errors.postal ? <p className='text-red-400'>{formik.errors.postal}</p> : null}
            </fieldset>

            <fieldset className='border-solid border-[1px] border-black px-4 pb-4 rounded-md mb-6'>
                <legend className='italic'>Credentials</legend>
                <div className='py-2'>
                    <label className='' htmlFor='password'>Password</label>
                    <input
                        type='password'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        placeholder='password'
                        name='password'
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? <p className='text-red-400'>{formik.errors.password}</p> : null}
                </div>
                <div className='py-2'>
                    <label className='' htmlFor='cpassword'>Confirm Password</label>
                    <input
                        type='password'
                        className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
                        id='cpassword'
                        placeholder='password'
                        name='cpassword'
                        {...formik.getFieldProps('cpassword')}
                    />
                    {formik.touched.cpassword && formik.errors.cpassword ? <p className='text-red-400'>{formik.errors.cpassword}</p> : null}
                </div>
            </fieldset>

            <input type='submit' value={formik.isSubmitting ? 'Signing Up ...' : 'Sign Up'} disabled={formik.isSubmitting} className='bg-green-900 text-white py-2 mt-4 w-full text-[1.125rem] disabled:bg-[#333]' />
        </form>
    )
}
