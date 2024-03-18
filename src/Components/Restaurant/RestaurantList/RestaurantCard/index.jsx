import styles from './styles.module.css'

export const RestaurantCard = ({ restaurant }) => {
    return (
        <li className={styles.restaurantcard}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3 className="title white sm">{restaurant.name}</h3>
            <p className="paragraph white">{restaurant.description}</p>
        </li>
    )
} 