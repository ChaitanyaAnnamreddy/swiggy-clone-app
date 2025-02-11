import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from 'antd'
import { HeaderComponent } from './components/Header'
import { Carousal } from './components/Carousel'
import { CarouselInfo } from './utils/carousel-data'
import { BestCuisines } from './components/BestCuisines'
import { bestCuisines } from './utils/best-cuisines'
import Body from './components/Body'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useOutletContext,
} from 'react-router'
import About from './components/About'
import { Contact } from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'

const { Header, Footer, Content } = Layout

const headerStyle = {
  color: '#fff',
  backgroundColor: '#f0f0f0',
}

const contentStyle = {
  textAlign: 'center',
  margin: '25% 0 !important',
}

const footerStyle = {
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '#f0f0f0',
}

export const AppLayout = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <HeaderComponent
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </Header>

        <Content style={contentStyle}>
          <Outlet context={{ searchText }} />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  )
}

const HomePage = () => {
  const { searchText } = useOutletContext()

  return (
    <>
      <div
        className="carousel"
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
        Top restaurant chains in Bangalore
      </div>
      <Carousal restaurants={CarouselInfo} />
      <Body searchText={searchText} />
      <BestCuisines bestCuisines={bestCuisines} />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <Error />,
      },
      {
        path: '/about',
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
