import { DateUI } from '@app/(user)/Date'
export default async function Page() {
    return (
        <div className='min-h-[calc(100dvh-56px)] px-4 w-full'>
            <header className='flex py-4 justify-between items-center'>
                <h1 className='font-bold text-2xl'>Branches</h1>
                <div>
                    <DateUI />
                </div>
            </header>
        </div>
    )
}


