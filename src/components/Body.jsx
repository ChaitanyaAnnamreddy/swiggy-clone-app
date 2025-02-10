import RestaurantCard from './RestaurantCard'
import RestaurantsList from '../utils/restaurant-list'

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard resObj={RestaurantsList} />
      </div>
    </div>
  )
}

export default Body
