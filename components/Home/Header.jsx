
export const Header = ({ children }) => {

    const style = {
        paddingBottom: '.75rem',
        paddingTop: '1.5rem',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
    }

    return (
        <div style={style}>
            <div style={{ width: '100%' }}>{children}</div>
        </div>
    )
}
