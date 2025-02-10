import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from 'antd'
import HeaderComponent from './components/Header'
import Carousal from './components/Carousel'
import carouselData from './utils/carousel-data'
import BestCuisines from './components/BestCuisines'
import bestCuisines from './utils/best-cuisines'
import Body from './components/Body'

const { Header, Footer, Content } = Layout

const headerStyle = {
  color: '#fff',
  backgroundColor: '#f0f0f0',
}

const contentStyle = {
  textAlign: 'center',
  color: '#fff',
  margin: '50px',
}

const footerStyle = {
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '#f0f0f0',
}

const AppLayout = () => {
  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <HeaderComponent />
        </Header>
        <Content style={contentStyle}>
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
          <Carousal restaurants={carouselData} />
          <Body />
          <BestCuisines bestCuisines={bestCuisines} />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
