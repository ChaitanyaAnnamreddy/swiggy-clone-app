import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'

const Body = ({ searchText }) => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    )

    const json = await data.json()
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    setAllRestaurants(restaurants)
    setFilteredRestaurants(restaurants)
  }

  useEffect(() => {
    if (searchText) {
      const filtered = allRestaurants.filter(
        (restaurant) =>
          restaurant.info.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          restaurant.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(searchText.toLowerCase())
          )
      )
      setFilteredRestaurants(filtered)
    } else {
      setFilteredRestaurants(allRestaurants)
    }
  }, [searchText, allRestaurants])

  const handleFilterTopRated = () => {
    const topRated = filteredRestaurants.filter(
      (resObj) => resObj.info.avgRating >= 4.5
    )
    setFilteredRestaurants(topRated)
  }

  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard
          restaurants={filteredRestaurants}
          onFilterTopRated={handleFilterTopRated}
        />
      </div>
    </div>
  )
}

export default Body
