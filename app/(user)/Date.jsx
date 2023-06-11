import { format } from 'date-fns'
import { useEffect, useRef } from 'react'

export const DateUI = () => {
    const date = useRef()
    const intervalID = useRef()
    date.current = new Date()

    useEffect(() => {
        intervalID.current = setInterval(() => {
            date.current = new Date()
        }, 60000)

        return () => {
            clearInterval(intervalID.current)
        }
    }, [])

    return (
        <p className='md:text-lg italic tracking-tight'>{format(date.current, 'd, MMM yyyy, EEEE')}</p>
    )
}