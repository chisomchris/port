'use client'

export const Email = () => {
    return (
        <div className="mb-6">
            <label htmlFor="email" className="text-[#222222] ">Email</label>
            <input type="text" className="py-2 px-4 text-lg w-full block border-secondary/50 border-2 border-solid rounded-none outline-none focus:border-primary" id='email' placeholder="example@email.com" />
        </div>
    )
}
