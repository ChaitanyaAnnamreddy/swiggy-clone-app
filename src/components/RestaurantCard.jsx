import React from 'react'
import { Card } from 'antd'
import { CDN_URL } from '../utils/constants'

const getImageUrl = (id) => `${CDN_URL}${id}`

const { Meta } = Card

const RestaurantCard = ({ resObj }) => {
  return (
    <>
      <div
        className="res-info"
        style={{
          color: 'black',
          margin: '10px',
          fontFamily: 'Gilroy',
          fontWeight: '800',
          fontSize: '24px',
          lineHeight: '28px',
          letterSpacing: '-0.4px',
          textAlign: 'left',
        }}
      >
        Restaurants with online food delivery in Bangalore
      </div>
      <div className="res-card">
        {resObj.map((resObj) => (
          <Card
            key={resObj.info.id}
            hoverable
            style={{ width: 260 }}
            cover={
              <img
                alt="res-logo"
                src={getImageUrl(resObj.info.cloudinaryImageId)}
                width={240}
                height={240}
              />
            }
          >
            <Meta title={resObj.info.name} />
            <Meta
              description={
                <div className="res-description">
                  <div
                    style={{
                      marginTop: '10px',
                      display: 'flex',
                    }}
                  >
                    {resObj.info.avgRating ? `☆${resObj.info.avgRating}` : '-'}
                    <div style={{ margin: '0px 10px' }}>
                      {resObj.info.costForTwo}
                    </div>
                  </div>
                  <div>{resObj.info.sla.slaString}</div>
                  <div style={{ marginTop: '10px', textAlign: 'left' }}>
                    {resObj.info.cuisines.join(', ')}
                  </div>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </>
  )
}

export default RestaurantCard
