import { Flex, Skeleton, Card } from 'antd'

const Shimmer = () => {
  return (
    <Flex vertical>
      <Flex gap="large">
        <div
          className="res-info"
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
          Restaurants with online food delivery in Bangalore
        </div>
        <div
          className="res-info"
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
          <Skeleton.Input active />
        </div>
      </Flex>
      <Flex wrap gap="large" justify="center">
        <Card style={{ width: 260 }}>
          <Skeleton.Image active />
          <Skeleton active />
        </Card>
        <Card style={{ width: 260 }}>
          <Skeleton.Image active />
          <Skeleton active />
        </Card>
        <Card style={{ width: 260 }}>
          <Skeleton.Image active />
          <Skeleton active />
        </Card>
        <Card style={{ width: 260 }}>
          <Skeleton.Image active />
          <Skeleton active />
        </Card>
        <Card style={{ width: 260 }}>
          <Skeleton.Image active />
          <Skeleton active />
        </Card>
        <Card style={{ width: 260 }}>
          <Skeleton.Image active />
          <Skeleton active />
        </Card>
        <Card style={{ width: 260 }}>
          <Skeleton.Image active />
          <Skeleton active />
        </Card>
        <Card style={{ width: 260 }}>
          <Skeleton.Image active />
          <Skeleton active />
        </Card>
      </Flex>
    </Flex>
  )
}

export default Shimmer
