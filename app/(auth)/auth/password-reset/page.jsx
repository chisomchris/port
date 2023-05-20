import { Button, SubmitButton } from "./client"
import style from '../login/controls.module.css'

export const metadata = {
    title: 'Password Reset | Dashboard'
}
export default function ResetPassword() {
    return (
        <div style={{ minHeight: '100dvh' }}
        >
            <div
                style={{
                    maxWidth: '580px',
                    margin: '0 auto',
                    padding: '2rem 1rem',
                    paddingTop: '4rem'
                }}
            >
                <h1 style={{ marginTop: '0' }}>Reset Password</h1>
                <p>Enter the email address you registered with and we will send you instructions on how to create a new password.</p>

                <div style={{ marginBlock: '2rem' }}  >
                    <p as='label' htmlFor="email">Email Address <sub style={{ color: 'red', fontSize: '1.5em' }}>*</sub></p>
                    <input
                        id='email'
                        placeholder="example@email.com"
                        className={style.email}
                    />
                </div>

                <div className={style.grid}>
                    <SubmitButton />
                    <Button />
                </div>
            </div>
        </div>
    )
}