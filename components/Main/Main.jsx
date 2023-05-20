'use client'
import { Header } from "../Home/Header"
import { SearchBox } from "../SearchBox/SearchBox"

export const Main = ({ children, title }) => {
    return (
        <div style={{ flexGrow: '1', paddingInline: '2rem' }}>
            <Header>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <h2 style={{ fontSize: '1.25rem' }}>{title}</h2>
                    <SearchBox />
                </div>
            </Header>
            <div>{children}</div>
        </div>
    )
}
