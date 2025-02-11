import { Flex, Skeleton, Card } from 'antd'

const Shimmer = () => {
  return (
    <Flex wrap gap="large" justify="center">
      <Card style={{ width: 700, height: 600 }}>
        <Skeleton.Image active style={{ marginBottom: '20px' }} />
        <Skeleton active />
        <br></br>
        <Skeleton active />
        <br></br>
        <Skeleton active />
      </Card>
    </Flex>
  )
}

export default Shimmer
