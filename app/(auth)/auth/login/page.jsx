import Link from "next/link"
import style from './controls.module.css'
import { EmailInput, PasswordInput } from "./Controls"

export const metadata = {
    title: "Login | Dashboard"
}

export default function Page() {
    const input_group = { padding: '1rem 0' }
    return (
        <div className={style.bg} style={{ height: '100dvh', width: '100%', display: 'grid', placeItems: 'center', }}>
            <div style={{ padding: '1rem', maxWidth: '540px', backgroundColor: 'white', }}>
                <h2>Welcome back!</h2>
                <p>Sign in to your account</p>
                <form>
                    <div style={input_group}>
                        <label htmlFor='email'>Email Address</label>
                        <EmailInput className={style.input} />
                    </div>
                    <div style={input_group}>
                        <label htmlFor='password'>Password</label>
                        <div style={{ position: 'relative' }}>
                            <PasswordInput className={style.input}/>
                        </div>
                    </div>
                    <div style={input_group} >
                        <input
                            type='submit'
                            value={'Login'}
                            className={style.submit}
                        />
                        <Link href='/auth/password-reset' style={{ color: '#014201', fontWeight: '500' }}>Forgot Login details?</Link>
                    </div>
                </form>
            </div>
        </div >
    )
}