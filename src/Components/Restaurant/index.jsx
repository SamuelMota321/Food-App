import { RestaurantList } from './RestaurantList'
import RestaurantIcon from '../../assets/RestaurantIcon.svg'
import styles from './styles.module.css'
export const Restaurant = () => {
    return (
        <section className={`${styles.restaurantSection} section-green section-padding`}>
            <div className='container'>
                <img src={RestaurantIcon} alt='Icone restaurante' />
                <h2 className='title md white '> Restaurantes Famosos</h2>
                <RestaurantList />
            </div>
        </section>
    )
}