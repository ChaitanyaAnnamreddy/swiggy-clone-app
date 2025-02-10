import { Card, Flex } from 'antd'

const { Meta } = Card

export const BestCuisines = ({ bestCuisines }) => {
  return (
    <Flex vertical>
      <div
        style={{
          color: 'black',
          margin: '30px auto',
          fontFamily: 'Gilroy',
          fontWeight: '800',
          fontSize: '24px',
          letterSpacing: '-0.4px',
        }}
      >
        Best Cuisines Near Me
      </div>
      <Flex wrap gap="large" direction="row" justify="center">
        {bestCuisines.map((cuisine) => (
          <Card
            href={cuisine.link}
            key={cuisine.id}
            hoverable
            style={{ width: 400 }}
          >
            <Meta title={cuisine.text} />
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}
