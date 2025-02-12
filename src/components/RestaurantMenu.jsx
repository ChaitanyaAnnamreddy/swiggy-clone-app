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
  MinusOutlined,
  MinusCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import ShimmerMenu from './ShimmerMenu'
import { CDN_URL } from '../utils/constants'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { useDispatch } from 'react-redux'
import { addItem, removeItem, clearCart } from '../utils/cartSlice'
import { useSelector } from 'react-redux'

const { Meta } = Card

const getImageUrl = (id) => `${CDN_URL}${id}`

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)
  const dispatch = useDispatch()

  const [api, contextHolder] = notification.useNotification()

  const handleAddItem = (item) => {
    dispatch(addItem(item))

    // Show notification
    api.success({
      message: `${item.card.info.name}`,
      description: `${item.card.info.name} has been added to cart`,
      icon: <ShoppingCartOutlined style={{ color: '#52c41a' }} />,
      placement: 'bottomLeft',
      duration: 5,
    })
  }

  if (!resInfo) return <ShimmerMenu />

  const menuCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []

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
              <Descriptions.Item label="Cuisines" span={2}>
                {resInfo?.data?.cards[2]?.card?.card?.info?.cuisines?.join(
                  ', '
                )}
              </Descriptions.Item>
              <Descriptions.Item label="Total Ratings" span={2}>
                {resInfo?.data?.cards[2]?.card?.card?.info?.totalRatingsString}
              </Descriptions.Item>
              <Descriptions.Item label="Address" span={3}>
                {resInfo?.data?.cards[2]?.card?.card?.info?.labels[1].message}
              </Descriptions.Item>
            </Descriptions>
          }
        />
        <Divider />
        <Descriptions column={2} style={{ margin: '0px 0 0 15%' }}>
          <Descriptions.Item label="Avg Time">
            {resInfo?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime} mins
          </Descriptions.Item>
          <Descriptions.Item label="Cost">
            {resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </Descriptions.Item>
        </Descriptions>
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
