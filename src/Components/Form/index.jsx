import { ConvertingForm } from "./ConvertingForm"
import styles from './styles.module.css'

export const Form = ()  => {
     return(
      <section  className={`${styles.form} section-red section-padding`}>
            <h2 className="title md center white">Conheça nosso aplicativo</h2>
           <ConvertingForm />
        </section>
      )
}