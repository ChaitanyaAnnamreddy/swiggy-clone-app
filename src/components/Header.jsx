import React, { useState } from 'react'
import { Input, Image, Tabs, Avatar, Button, Flex } from 'antd'
import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { LOGO_URL } from '../utils/constants'
import { useState } from 'react'
const { Search } = Input

export const HeaderComponent = ({ searchText, setSearchText }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="header">
      <div className="logo-container">
        <Image preview={false} width={50} src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <div className="search-bar">
          <Search
            className="search-input"
            placeholder="Search for restaurants..."
            allowClear
            enterButton
            size="large"
            style={{ width: 300 }}
            value={searchText}
            onSearch={(value) => setSearchText(value)}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          <Tabs
            // indicator={{ size: (origin) => origin, align: 'center' }}
            defaultActiveKey="1"
            items={[
              {
                key: '1',
                label: 'Home',
                icon: <HomeOutlined />,
              },
              {
                key: '2',
                label: 'About',
                icon: <UserOutlined />,
              },
              {
                key: '3',
                label: 'Contact',
                icon: <ContactsOutlined />,
              },
              {
                key: '4',
                label: 'Cart',
                icon: <ShoppingCartOutlined />,
              },
              {
                key: '5',
                label: 'User',
                icon: (
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                ),
              },
            ]}
          />
        </div>
        <Flex gap="medium" style={{ margin: '10px' }}>
          <Button
            width={100}
            size="large"
            type="primary"
            danger={!isLoggedIn}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? 'Login' : 'Logout'}
          </Button>
        </Flex>
      </div>
    </div>
  )
}
