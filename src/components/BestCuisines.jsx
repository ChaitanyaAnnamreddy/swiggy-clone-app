import { Card, Flex } from 'antd'

const { Meta } = Card

export default BestCuisines = ({ bestCuisines }) => {
  return (
    <Flex vertical>
      <div
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
        Best Cuisines Near Me
      </div>
      <Flex wrap gap="small">
        {bestCuisines.map((cuisine) => (
          <Card href={cuisine.link}>
            <Meta title={cuisine.text} />
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}
