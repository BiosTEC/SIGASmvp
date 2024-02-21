'use client'
import { useFormState } from "react-dom";
import styles from './form.module.css'
import { useEffect } from "react";
import { useRouter } from "next/navigation";


type FormularioProps = {
    children: React.ReactNode,
    //recebendo a função por props
    // actionHook: (formData: any) => Promise<{} | undefined> | ((formData: FormData) => void) | undefined | (() => Promise<void>) | Promise<void>
    actionHook: any
}

type FormState = {
    success?: boolean
    error?: string
}

export default function Formulario({ children, actionHook }: FormularioProps) {


    //useStateForm hook para lidar com erros
    const [state, formAction] = useFormState<FormState | undefined>(actionHook, undefined);
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('login')
    }, [state?.success, router])

    return (
        <form className={styles.form} action={formAction}>
            {children}
            {state?.error}
        </form>
    )
}