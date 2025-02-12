import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'

const Body = ({ searchText }) => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  // const RestaurantOfferCard = withOffer(RestaurantCard)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      `https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999`
    )

    const json = await data.json()
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    setAllRestaurants(restaurants)
    setFilteredRestaurants(restaurants)
    console.log(restaurants)
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
        {/* )} */}
      </div>
    </div>
  )
}

export default Body
