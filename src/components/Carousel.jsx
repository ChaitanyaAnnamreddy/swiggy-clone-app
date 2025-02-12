import React, { useEffect, useState } from 'react'
import { Card, Image, Carousel } from 'antd'
import { CDN_URL } from '../utils/constants'
import { Link } from 'react-router'
import ShimmerCarousel from './ShimmerCarousel'

const { Meta } = Card

const getImageUrl = (id) => `${CDN_URL}${id}`

export const Carousal = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999`
      )
      const json = await data.json()
      const fetchedRestaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []

      console.log('res', fetchedRestaurants)
      setRestaurants(fetchedRestaurants)
    } catch (error) {
      console.error('Error fetching restaurants:', error)
    }
  }

  return (
    <Carousel
      dots={false}
      arrows
      infinite
      responsive={[
        { breakpoint: 3000, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ]}
    >
      {restaurants.length > 0 ? (
        [...restaurants] // Clone the array to avoid mutating the original state
          .sort(() => Math.random() - 0.5) // Shuffle the array
          .map((restaurant) => (
            <div key={restaurant?.info?.id} className="carousel-item">
              <Link to={`/restaurant/${restaurant?.info?.id}`}>
                <Card
                  hoverable
                  style={{
                    width: '90%',
                    maxWidth: '300px',
                    margin: 'auto',
                  }}
                >
                  <Meta
                    description={
                      <div className="res-description">
                        <Image
                          style={{
                            margin: '10px auto',
                            display: 'block',
                            borderRadius: '10px',
                          }}
                          preview={false}
                          width="100%"
                          src={getImageUrl(restaurant?.info?.cloudinaryImageId)}
                          alt="res-logo"
                        />
                        <div
                          style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'black',
                          }}
                        >
                          {restaurant?.info?.name}
                        </div>
                        <div>{restaurant?.info?.areaName}</div>
                        <div>{restaurant?.info?.sla?.slaString}</div>
                        <div>{restaurant?.info?.costForTwo}</div>
                      </div>
                    }
                  />
                </Card>
              </Link>
            </div>
          ))
      ) : (
        <ShimmerCarousel />
      )}
    </Carousel>
  )
}
