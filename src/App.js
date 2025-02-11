import React, { useState, useEffect, lazy, Suspense } from 'react'
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
import { Contact } from './components/Contact'
import Error from './components/Error'
import useOnlineStatus from './utils/useOnlineStatus'
import ShimmerMenu from './components/ShimmerMenu'
import ShimmerAbout from './components/ShimmerAbout'
import UserContext from './utils/UserContext'
import FooterComponent from './components/Footer'

const { Header, Footer, Content } = Layout

const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'))
const About = lazy(() => import('./components/About'))

const headerStyle = {
  color: '#fff',
  backgroundColor: '#f0f0f0',
}

const contentStyle = {
  textAlign: 'center',
  margin: '25% 0 !important',
}

export const AppLayout = () => {
  const [searchText, setSearchText] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const data = {
      name: 'Chaitanya',
    }
    setUserName(data.name)
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={{ loggedInUser: userName }}>
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
          <Footer>
            <FooterComponent />
          </Footer>
        </Layout>
      </UserContext.Provider>
    </div>
  )
}

const HomePage = () => {
  const { searchText } = useOutletContext()

  const onlineStatus = useOnlineStatus()

  if (!onlineStatus) {
    return (
      <div className="body">
        <div className="online-container">
          <h1>Please check your internet connection</h1>
        </div>
      </div>
    )
  }

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
        element: (
          <Suspense fallback={<ShimmerAbout />}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: '/restaurant/:resId',
        element: (
          <Suspense fallback={<ShimmerMenu />}>
            <RestaurantMenu />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
