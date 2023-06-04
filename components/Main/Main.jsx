'use client'
import { Header } from "../Home/Header"
import { SearchBox } from "../components/SearchBox/SearchBox"

export const Main = ({ children, title, showSearchBox }) => {
    return (
        <div className='grow px-6 min-h-[100dvh] md:px-4'>
            <Header>
                <div className='flex flex-col-reverse gap-3 md:flex-row md:justify-between items-center p-0' >
                    <h2>{title}</h2>
                    { showSearchBox && <SearchBox />}
                </div>
            </Header>
            <div>{children}</div>
        </div>
    )
}
