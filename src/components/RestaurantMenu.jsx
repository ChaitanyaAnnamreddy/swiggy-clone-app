import React from 'react'
import {
  Collapse,
  Card,
  Divider,
  Descriptions,
  List,
  Flex,
  Image,
  Button,
} from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ShimmerMenu from './ShimmerMenu'
import { CDN_URL } from '../utils/constants'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const { Meta } = Card

const getImageUrl = (id) => `${CDN_URL}${id}`

const IconText = ({ icon, text }) => (
  <Button icon={React.createElement(icon)}>{text}</Button>
)

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)

  if (!resInfo) return <ShimmerMenu />

  const menuCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []

  // Extract menu categories dynamically
  const menuItems = menuCards
    .filter((card) => card?.card?.card?.itemCards)
    .map((card) => ({
      key: card?.card?.card?.id,
      label: card?.card?.card?.title,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={card?.card?.card?.itemCards}
          renderItem={(item) => (
            <List.Item
              key={item.card.info.id}
              extra={
                <Flex vertical align="center" gap="middle">
                  <Image
                    preview={false}
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                    src={getImageUrl(item.card.info.imageId)}
                    alt={item.card.info.name}
                  />
                  <IconText icon={PlusOutlined} text="Add" />
                </Flex>
              }
            >
              <List.Item.Meta
                style={{ textAlign: 'start', width: '60%' }}
                title={item.card.info.name}
                description={
                  <Flex vertical gap="small">
                    {item.card.info.description}
                    <span>{`₹ ${
                      item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100
                    }`}</span>
                  </Flex>
                }
              />
            </List.Item>
          )}
        />
      ),
    }))

  return (
    <Card
      className="user-card"
      cover={
        <img
          alt="Restaurant"
          src={getImageUrl(
            resInfo?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
          )}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
      }
    >
      <Meta
        title={resInfo?.data?.cards[2]?.card?.card?.info?.name}
        description={
          <Descriptions bordered>
            <Descriptions.Item label="Cuisines" span={3}>
              {resInfo?.data?.cards[2]?.card?.card?.info?.cuisines?.join(', ')}
            </Descriptions.Item>
            <Descriptions.Item label="Area">
              {resInfo?.data?.cards[2]?.card?.card?.info?.city}
            </Descriptions.Item>
            <Descriptions.Item label="Total Ratings">
              {resInfo?.data?.cards[2]?.card?.card?.info?.totalRatingsString}
            </Descriptions.Item>
          </Descriptions>
        }
      />
      <Divider />
      <Descriptions column={2}>
        <Descriptions.Item label="Avg Time">
          {resInfo?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime} mins
        </Descriptions.Item>
        <Descriptions.Item label="Cost">
          {resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Collapse
        defaultActiveKey={[menuItems[0].key]}
        expandIconPosition="end"
        accordion
        items={menuItems}
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
      />
    </Card>
  )
}

export default RestaurantMenu
