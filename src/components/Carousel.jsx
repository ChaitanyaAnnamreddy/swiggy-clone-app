import React from 'react'
import { Card, Image, Carousel } from 'antd'
import { CDN_URL } from '../utils/constants'

const { Meta } = Card

const getImageUrl = (id) => `${CDN_URL}${id}`

export default Carousal = ({ restaurants }) => {
  return (
    <Carousel
      dots={false}
      arrows
      slidesToShow={4}
      slidesToScroll={4}
      infinite
      autoplay
    >
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="carousel-item">
          <Card hoverable style={{ width: 300, margin: 'auto' }}>
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
                    width={'auto'}
                    src={getImageUrl(restaurant.cloudinaryImageId)}
                    alt="res-logo"
                  />
                  <div
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    {restaurant.name}
                  </div>
                  <div>{restaurant.areaName}</div>
                  <div>{restaurant.sla.slaString}</div>
                  <div>{restaurant.costForTwo}</div>
                </div>
              }
            />
          </Card>
        </div>
      ))}
    </Carousel>
  )
}
