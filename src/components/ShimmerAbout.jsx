import { Flex, Skeleton, Card } from 'antd'

const ShimmerAbout = () => {
  return (
    <Flex vertical>
      <Card style={{ width: 700, height: 600, margin: '20px auto 0px' }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
        <Skeleton active />
      </Card>
    </Flex>
  )
}

export default ShimmerAbout
