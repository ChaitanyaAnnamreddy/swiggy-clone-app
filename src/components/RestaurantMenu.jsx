import React, { useEffect, useState } from 'react'
import {
  Collapse,
  Card,
  Divider,
  Descriptions,
  List,
  Flex,
  Image,
  Space,
  Button,
} from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ShimmerMenu from './ShimmerMenu'
import { CDN_URL } from '../utils/constants'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const { Meta } = Card

const getImageUrl = (id) => `${CDN_URL}${id}`

const RestaurantMenu = () => {
  const { resId } = useParams()

  const resInfo = useRestaurantMenu(resId)

  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card?.itemCards || []

  const menuItems_1 =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card
      ?.card?.itemCards || []

  const menuItems_2 =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[4]?.card
      ?.card?.itemCards || []

  const menuItems_3 =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[5]?.card
      ?.card?.itemCards || []

  const IconText = ({ icon, text }) => (
    <Space>
      <Button>
        {React.createElement(icon)}
        {text}
      </Button>
    </Space>
  )

  const items = [
    {
      key: resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
        ?.card?.card?.id,
      label:
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
          ?.card?.card?.title,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={menuItems}
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
                  <IconText
                    icon={PlusOutlined}
                    text="Add"
                    key="list-vertical-star-o"
                  />
                </Flex>
              }
            >
              <List.Item.Meta
                style={{
                  textAlign: 'start',
                  width: '60%',
                }}
                title={item.card.info.name}
                description={
                  <Flex vertical className="resMenu-description" gap="small">
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
    },
    {
      key: resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]
        ?.card?.card?.id,
      label:
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]
          ?.card?.card?.title,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={menuItems_1}
          renderItem={(item) => (
            <List.Item
              key={item.card.info.id}
              actions={[]}
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
                  <IconText
                    icon={PlusOutlined}
                    text="Add"
                    key="list-vertical-star-o"
                  />
                </Flex>
              }
            >
              <List.Item.Meta
                style={{
                  textAlign: 'start',
                  width: '60%',
                }}
                title={item.card.info.name}
                description={
                  <Flex vertical className="resMenu-description" gap="small">
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
    },
    {
      key: resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[4]
        ?.card?.card?.id,
      label:
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[4]
          ?.card?.card?.title,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={menuItems_2}
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
                  <IconText
                    icon={PlusOutlined}
                    text="Add"
                    key="list-vertical-star-o"
                  />
                </Flex>
              }
            >
              <List.Item.Meta
                style={{
                  textAlign: 'start',
                  width: '60%',
                }}
                title={item.card.info.name}
                description={
                  <Flex vertical className="resMenu-description" gap="small">
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
    },
    {
      key: resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[5]
        ?.card?.card?.id,
      label:
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[5]
          ?.card?.card?.title,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={menuItems_3}
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
                  <IconText
                    icon={PlusOutlined}
                    text="Add"
                    key="list-vertical-star-o"
                  />
                </Flex>
              }
            >
              <List.Item.Meta
                style={{
                  textAlign: 'start',
                  width: '60%',
                }}
                title={item.card.info.name}
                description={
                  <Flex vertical className="resMenu-description" gap="small">
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
    },
  ]

  return resInfo === null ? (
    <ShimmerMenu />
  ) : (
    <>
      <Card
        className="user-card"
        cover={
          <img
            alt="example"
            src={getImageUrl(
              resInfo?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
            )}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
            }}
          />
        }
      >
        <Meta
          title={resInfo?.data?.cards[2]?.card?.card?.info?.name}
          description={
            <Descriptions
              bordered
              items={[
                {
                  key: '1',
                  label: 'Cuisines',
                  span: 3,
                  children:
                    resInfo?.data?.cards[2]?.card?.card?.info?.cuisines?.join(
                      ', '
                    ),
                },
                {
                  key: '2',
                  label: 'Area',
                  span: 2,
                  children: resInfo?.data?.cards[2]?.card?.card?.info?.city,
                },
                {
                  key: '3',
                  label: 'Total ratings',
                  span: 2,
                  children:
                    resInfo?.data?.cards[2]?.card?.card?.info
                      ?.totalRatingsString,
                },
              ]}
            />
          }
        />
        <Divider />
        <Descriptions
          column={2}
          items={[
            {
              key: '1',
              label: 'Avg Time',
              children:
                resInfo?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime +
                ' mins',
            },
            {
              key: '2',
              label: 'Cost',
              children:
                resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage,
            },
          ]}
        />
        <Divider />
        <Collapse
          style={{
            textAlign: 'left',
          }}
          expandIconPosition="end"
          accordion
          items={items}
          expandIcon={({ isActive }) =>
            isActive ? <MinusOutlined /> : <PlusOutlined />
          }
        />
      </Card>
    </>
  )
}

export default RestaurantMenu
