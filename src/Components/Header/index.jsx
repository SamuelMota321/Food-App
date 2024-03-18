import Logo from '../../assets/FoodApp.svg'
import styles from './style.module.css'

export const Header = () => {
    return (
        <header className='container'>
            <div className={styles.logoBox}>
            <img src={Logo} alt="Logo Food App" />
            </div>
        </header>
    )
}