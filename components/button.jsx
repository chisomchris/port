export const Button = ({ isLoading }) => {
    return (
        <input
            type='submit'
            className="bg-primary hover:bg-green-900 text-white w-full rounded-none font-[500] py-2 px-4  focus:outline-none disabled:bg-[#303030]"
            value={isLoading ? 'Loading...' : 'Sign In'}
            disabled={isLoading}
        />
    )
}
