
export const Input = ({ formik, type, name, ...rest }) => {
    return (
        <input
            type={type || 'text'}
            className='w-full py-2 px-4 rounded-none outline-none border-[1px] border-solid border-[#777] focus:border-2 focus:border-green-900'
            id={name}
            name={name}
            // placeholder='Business name'
            {...formik.getFieldProps(name)}
            {...rest}
        />
    )
}