import { RestaurantCard } from "./RestaurantCard"
import { restaurants } from "../../../data/restaurant"
import styles from './styles.module.css'
export const RestaurantList = () => {

    return( 
        <ul className={styles.restaurantlist}>
            {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
            
            ))}
            
        </ul>
    )
}