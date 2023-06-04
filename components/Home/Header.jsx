
export const Header = ({ children }) => {
    return (
        <div className='pb-2 pt-3 flex items-center md:h-12 md:pt-6 md:pb-3'>
            <div className='w-full'>{children}</div>
        </div>
    )
}
