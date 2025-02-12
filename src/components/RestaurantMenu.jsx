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
  notification,
} from 'antd'
import {
  PlusOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import ShimmerMenu from './ShimmerMenu'
import { CDN_URL } from '../utils/constants'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import { useNavigate } from 'react-router'

const { Meta } = Card

const getImageUrl = (id) => `${CDN_URL}${id}`

const RestaurantMenu = ({ menuItems1 }) => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [api, contextHolder] = notification.useNotification()
  console.log('menuItems', menuItems1)

  const handleAddItem = (item) => {
    dispatch(addItem(item))

    // Show notification
    api.success({
      description: (
        <Flex vertical gap="small">
          {item.card.info.name} has been added to cart
          <Flex align="center" justify="center">
            <Button type="primary" onClick={() => navigate('/cart')}>
              View Cart
            </Button>
          </Flex>
        </Flex>
      ),
      icon: <ShoppingCartOutlined style={{ color: '#52c41a' }} />,
      placement: 'bottom',
      duration: 10,
      showProgress: true,
    })
  }

  if (!resInfo) return <ShimmerMenu />

  const menuCards =
    menuItems1[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    []
  const cover =
    resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  const selectedRestaurant = cover?.find((r) => r.info.id === resId)
  console.log('resInfo-2', resInfo)

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
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() => handleAddItem(item)}
                  >
                    Add
                  </Button>
                </Flex>
              }
            >
              <List.Item.Meta
                style={{ textAlign: 'start', width: '60%' }}
                title={item.card.info.name}
                description={
                  <Flex vertical gap="small">
                    {item.card.info.description}
                    <span>
                      ₹{' '}
                      {(item.card.info.price ?? item.card.info.defaultPrice) /
                        100}
                    </span>
                  </Flex>
                }
              />
            </List.Item>
          )}
        />
      ),
    }))

  return (
    <>
      {contextHolder}
      <Card
        className="user-card user-card-menu"
        cover={
          <img
            alt="Restaurant"
            src={getImageUrl(selectedRestaurant?.info?.cloudinaryImageId)}
            style={{ height: '400px', objectFit: 'cover' }}
          />
        }
      >
        <Meta
          title={selectedRestaurant?.info?.name}
          description={
            <Descriptions bordered>
              <Descriptions.Item label="Cuisines" span={3}>
                {selectedRestaurant?.info?.cuisines?.join(', ')}
              </Descriptions.Item>
              <Descriptions.Item label="Total Ratings" span={1}>
                {selectedRestaurant?.info?.totalRatingsString}
              </Descriptions.Item>
              <Descriptions.Item label="Cost" span={1}>
                {selectedRestaurant?.info?.costForTwo}
              </Descriptions.Item>
              <Descriptions.Item label="Avg Time">
                {selectedRestaurant?.info?.sla?.deliveryTime} mins
              </Descriptions.Item>
            </Descriptions>
          }
        />
        <Divider />

        <Collapse
          size="large"
          defaultActiveKey={[menuItems[0]?.key]}
          expandIconPosition="end"
          accordion
          items={menuItems}
          expandIcon={({ isActive }) =>
            isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />
          }
        />
      </Card>
    </>
  )
}

export default RestaurantMenu
