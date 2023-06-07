'use client'

export const Email = ({ name, formik }) => {
    return (
        <div className="mb-6 relative">
            <label htmlFor={name} className="text-[#222222] ">Email</label>
            <input type="text" className="py-2 px-4 text-lg w-full block border-secondary/50 border-2 border-solid rounded-none outline-none focus:border-primary" id='email' name={name} placeholder="example@email.com" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? <p className='text-red-600 absolute' >{formik.errors.email}</p> : null}
        </div>
    )
}
