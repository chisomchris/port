'use client'
import { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const input = { borderRadius: '0', padding: '.5em 1em', width: '100%', boxSizing: 'border-box', fontSize: '1.125rem', cursor: 'pointer', outline: 'none' }

const iconStyle = { position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#555', fontSize: '1.125rem' }

export const PasswordInput = (props) => {

    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const onPasswordChange = (e) => { setPassword(e.target.value) }
    const toggleVisibility = () => { setShowPassword(v => !v) }

    return (
        <>
            <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onInput={onPasswordChange}
                style={input}
                {...props}
            />
            {showPassword ? <BsEyeSlashFill style={iconStyle} onClick={toggleVisibility} /> : <BsEyeFill style={iconStyle} onClick={toggleVisibility} />}
        </>
    )

}
export const EmailInput = (props) => {
    const [email, setEmail] = useState('')
    const onEmailChange = (e) => { setEmail(e.target.value) }
    return (
        <input
            id='email'
            value={email}
            onInput={onEmailChange}
            style={input}
            {...props}
        />
    )

}