'use client'
import style from '../login/controls.module.css'
import { useRouter } from "next/navigation"

export const Button = () => {
    const router = useRouter()
    return (
        <button
            onClick={() => { router.back() }}
            className={style.backBtn}
        >
            Back
        </button>
    )
}

export const SubmitButton = () => {
    return (
        <button type="submit" className={style.submitBtn}  >
        Reset my password
    </button>
    )
}