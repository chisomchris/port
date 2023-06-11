
export const Overlay = ({ display, hide, distributor = '', deleteDistributor, disabled }) => {

    return (
        <div className={`fixed w-screen h-screen bg-[#22222210] top-0 left-0 z-10 ${display ? 'grid place-items-center' : 'hidden'} `}>
            <div className='mx-auto bg-white rounded-lg  h-fit p-6 max-w-[90%]'>
                <p className="my-4">Are you sure you want to delete {distributor} from your customer list?</p>
                <div className='flex itmes-center justify-between gap-4'>
                    <button disabled={disabled} className='bg-red-500 text-white py-2 w-full rounded-sm disabled:bg-gray-700 ' onClick={deleteDistributor}>Delete</button>
                    <button disabled={disabled} onClick={() => hide()} className='bg-blue-500 w-full text-white rounded-sm disabled:bg-blue-300'>Cancel</button>
                </div>
            </div>
        </div>
    )
}