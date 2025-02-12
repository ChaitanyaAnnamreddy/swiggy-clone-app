import { Flex, Skeleton, Card } from 'antd'

const ShimmerCarousel = () => {
  return (
    <Flex gap="large">
      <Card style={{ height: 430 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
      </Card>
      <Card style={{ height: 430 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
      </Card>
      <Card style={{ height: 430 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
      </Card>
      <Card style={{ height: 430 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
      </Card>
      <Card style={{ height: 430 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
      </Card>
      <Card style={{ height: 430 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
      </Card>
      <Card style={{ height: 430 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
      </Card>
      <Card style={{ height: 430 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
      </Card>
    </Flex>
  )
}

export default ShimmerCarousel
