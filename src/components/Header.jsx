import React from 'react'
import { Input, Image, Tabs, Avatar } from 'antd'
import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { LOGO_URL } from '../utils/constants'

const { Search } = Input

export default HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Image preview={false} width={50} src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <div className="search-bar">
          <Search
            placeholder="Search..."
            allowClear
            enterButton="Search"
            size="large"
            style={{ width: 300 }}
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
      </div>
    </div>
  )
}
