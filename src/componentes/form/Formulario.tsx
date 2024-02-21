import styles from './form.module.css'

type FormularioProps = {
    children: React.ReactNode,
    action: string | ((formData: FormData) => void) | undefined

}

export default function Formulario({ children, action }: FormularioProps) {


    return (
        <form className={styles.form} action={action}>
            {children}
        </form>
    )
}