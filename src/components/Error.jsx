import { Empty, Flex } from 'antd'
import { useRouteError } from 'react-router'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{ margin: '20% auto' }}
    >
      <Empty />
      {/* <h1 style={{ margin: '6px 0px' }}>{error.status}</h1> */}
      {/* <p style={{ margin: '6px 0px' }}>{error.statusText}</p> */}
    </Flex>
  )
}
export default Error
