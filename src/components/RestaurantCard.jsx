import React, { useState } from 'react'
import { Card, Popover, Tooltip, Button, Flex } from 'antd'
import { CDN_URL } from '../utils/constants'
import { FilterOutlined } from '@ant-design/icons'

const getImageUrl = (id) => `${CDN_URL}${id}`

const { Meta } = Card

const RestaurantCard = ({ resObj }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(resObj)

  return (
    <Flex vertical>
      <Flex gap="large">
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
        <Button
          style={{ margin: '8px' }}
          className="filter"
          icon={<FilterOutlined />}
          onClick={() => {
            const filteredRestaurantsList = resObj.filter(
              (resObj) => resObj.info.avgRating > 4.4
            )
            setFilteredRestaurants(filteredRestaurantsList)
          }}
        >
          Top rated restaurants
        </Button>
      </Flex>
      <div className="res-card">
        {filteredRestaurants.map((resObj) => (
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
            <Popover content={resObj.info.name}>
              <Meta title={resObj.info.name} />
            </Popover>
            <Meta
              description={
                <div className="res-description">
                  <div
                    style={{
                      marginTop: '10px',
                      display: 'flex',
                    }}
                  >
                    {resObj.info.avgRating
                      ? `☆ ${resObj.info.avgRating}`
                      : 'No rating'}
                    <div style={{ margin: '0px 10px' }}>{'|'}</div>
                    <div>{resObj.info.costForTwo}</div>
                  </div>
                  <div>{resObj.info.sla.slaString}</div>
                  <Tooltip
                    title={resObj.info.cuisines.join(', ')}
                    placement="bottom"
                  >
                    <div
                      style={{
                        marginTop: '10px',
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        width: '100%',
                      }}
                    >
                      {resObj.info.cuisines.join(', ')}
                    </div>
                  </Tooltip>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </Flex>
  )
}

export default RestaurantCard
