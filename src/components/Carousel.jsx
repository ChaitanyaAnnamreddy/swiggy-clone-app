import React from 'react'
import { Card, Image, Carousel } from 'antd'
import { CDN_URL } from '../utils/constants'

const { Meta } = Card

const getImageUrl = (id) => `${CDN_URL}${id}`

export const Carousal = ({ restaurants }) => {
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
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="carousel-item">
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
