import MobileIcon from '../../assets/MobileIcon.svg'
import styles from './styles.module.css'

export const AboutApp = () => {
    return (
        <section className={styles.AboutSection}>
            <div className={`${styles.flexBox} container section-padding`}>
                <div>
                    <img src={MobileIcon} alt="Mobile" />
                    <h2 className='title lg'>Sobre o <span className='red'>aplicativo</span></h2>
                </div>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla pariatur laboriosam repellat fugit! Excepturi maiores eos deserunt possimus quaerat, quidem est. Quo praesentium aliquid omnis voluptas, veniam similique itaque.</p>
            </div>
        </section>
    )
}