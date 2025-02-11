import React, { useState } from 'react'
import { Input, Image, Tabs, Avatar, Button, Flex, Typography } from 'antd'
import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { LOGO_URL } from '../utils/constants'
import { useState, useContext } from 'react'
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'

const { Text } = Typography

const { Search } = Input

export const HeaderComponent = ({ searchText, setSearchText }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const data = useContext(UserContext)

  const isOnline = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Image preview={false} width={50} src={LOGO_URL} alt="logo" />
        </Link>
      </div>

      <div className="nav-items">
        <Flex
          align="center"
          gap={8}
          style={{ marginTop: '-10px', marginRight: '10px' }}
        >
          {isOnline ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              className="bi bi-wifi"
              viewBox="0 0 16 16"
            >
              <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
              <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-wifi-off"
              viewBox="0 0 16 16"
            >
              <path d="M10.706 3.294A12.6 12.6 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4q.946 0 1.852.148zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.45 8.45 0 0 1 3.51-1.27zm2.596 1.404.785-.785q.947.362 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.5 8.5 0 0 0-1.98-.932zM8 10l.933-.933a6.5 6.5 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.53.53 0 0 1-.611.09A5.5 5.5 0 0 0 8 10m4.905-4.905.747-.747q.886.451 1.685 1.03a.485.485 0 0 1 .047.737.52.52 0 0 1-.668.05 11.5 11.5 0 0 0-1.811-1.07M9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A2 2 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75z" />
            </svg>
          )}
          <Text>{isOnline ? 'Online' : 'Offline'}</Text>
        </Flex>
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
                label: <Link to="/">Home</Link>,
                icon: <HomeOutlined />,
              },
              {
                key: '2',
                label: <Link to="/about">About</Link>,
                icon: <UserOutlined />,
              },
              {
                key: '3',
                label: <Link to="/contact">Contact</Link>,
                icon: <ContactsOutlined />,
              },
              {
                key: '4',

                icon: (
                  <div class="relative py-2">
                    <div class="t-0 absolute left-3">
                      <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        3
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="file: mt-4 h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                key: '5',
                label: (
                  <Button type="primary" icon={<UserOutlined />}>
                    {data.loggedInUser}
                  </Button>
                ),
              },
            ]}
          />
        </div>
        <Flex gap="small" style={{ margin: '10px' }}>
          <Button
            width={100}
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
