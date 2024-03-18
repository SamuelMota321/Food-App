import FoodBanner from '../../assets/FoodBanner.png'
import styles from './styles.module.css'

export const Banner = () => {

    return (
        <section className={`${styles.bannerSection} container section-padding`}>
            <div className={styles.flexBox}>
                <div>
                    <h1 className='title lg'>Descubra o melhor
                        <span className='red'> aplicativo de comida</span>
                    </h1>

                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Proin maximus tempor
                        ullamcorper. Vivamus porta lorem eu quam ultricies,
                        non imperdiet erat elementum.
                    </p>
                    <a href="#" className='btn red'>Saiba mais</a>
                </div>
                <img src={FoodBanner} alt="Imagem do Banner" />
            </div>

        </section>
    )
}