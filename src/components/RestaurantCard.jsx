import React from 'react'
import { Card, Popover, Tooltip, Button, Flex } from 'antd'
import { CDN_URL } from '../utils/constants'
import { FilterOutlined, StarOutlined } from '@ant-design/icons'
import Shimmer from '../components/Shimmer'
import { Link } from 'react-router'

const getImageUrl = (id) => `${CDN_URL}${id}`

const { Meta } = Card

// Higher-Order Component to add a discount badge to images
const withDiscountBadge = (WrappedComponent) => {
  return ({ discountInfo, ...props }) => (
    <div style={{ position: 'relative' }}>
      <WrappedComponent {...props} />
      {discountInfo && (
        <div
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px',
            textAlign: 'center',
            fontSize: '12px',
          }}
        >
          <strong>{` ${discountInfo.header} ${discountInfo.subHeader}`}</strong>
        </div>
      )}
    </div>
  )
}

// Wrapped component for displaying restaurant images with discount badges
const DiscountedImage = withDiscountBadge(({ src }) => (
  <img
    alt="res-logo"
    src={src}
    style={{
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    }}
  />
))

const RestaurantCard = ({ restaurants, onFilterTopRated }) => {
  return !restaurants || restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <Flex vertical>
      <Flex gap="large" className="res-info">
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
          onClick={onFilterTopRated}
        >
          Top rated restaurants
        </Button>
      </Flex>
      <div className="res-card">
        {restaurants.map((resObj) => {
          const discountInfo = resObj.info?.aggregatedDiscountInfoV3

          return (
            <Link to={`/restaurant/${resObj.info?.id}`} key={resObj.info?.id}>
              <Card
                key={resObj.info.id}
                hoverable
                style={{
                  width: 260,
                  position: 'relative',
                  borderRadius: '8px',
                }}
                cover={
                  <DiscountedImage
                    src={getImageUrl(resObj.info.cloudinaryImageId)}
                    discountInfo={discountInfo}
                  />
                }
              >
                <Popover content={resObj.info.name}>
                  <Meta
                    title={resObj.info.name}
                    style={{ textAlign: 'left !important' }}
                  />
                </Popover>
                <Meta
                  description={
                    <div className="res-description">
                      <div style={{ marginTop: '10px', display: 'flex' }}>
                        {resObj.info.avgRating ? (
                          <Flex gap={4}>
                            <StarOutlined />
                            {resObj.info.avgRating}
                          </Flex>
                        ) : (
                          'No rating'
                        )}
                        <div style={{ margin: '0px 10px' }}>{'|'}</div>
                        <div>{resObj.info.costForTwo}</div>
                      </div>
                      <div>{resObj.info.sla.slaString}</div>
                      <Tooltip
                        title={resObj.info.cuisines.join(', ')}
                        placement="bottomLeft"
                      >
                        <div
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {resObj.info.cuisines.join(', ')}
                        </div>
                      </Tooltip>
                    </div>
                  }
                />
              </Card>
            </Link>
          )
        })}
      </div>
    </Flex>
  )
}

export default RestaurantCard
