import { FaPlus, FaUser } from 'react-icons/fa'

export const User = ({ name, email, avatar }) => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBlock: '2rem',
            }}
        >
            <div
                style={{
                    width: '5.5rem',
                    height: '5.5rem',
                    position: 'relative',
                    borderRadius: '50%',
                    border: 'solid 4px #ddd',
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                <div
                    style={{
                        height: '1.25rem',
                        width: '1.25rem',
                        backgroundColor: 'blue',
                        position: 'absolute',
                        right: '1%',
                        bottom: '1%',
                        borderRadius: '50%',
                        display: 'grid',
                        placeItems: 'center'
                    }}
                ><FaPlus style={{ fontSize: '.75rem', color: 'white' }} />
                </div>
                <div>
                    <FaUser style={{fontSize: '3rem', color: '#aaa'}}/>
                </div>
            </div>
            <p style={{ fontWeight: 'bold', margin: '0', marginTop: '.5rem' }}>{name}</p>
            <p style={{margin: '0'}}>{email}</p>
        </div>
    )
}