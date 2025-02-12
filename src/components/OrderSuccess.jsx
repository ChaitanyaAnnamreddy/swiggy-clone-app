import React, { useState } from 'react'
import { Result, Modal, Button } from 'antd'

const OrderSuccess = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)

  return (
    <Modal
      open={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      footer={[
        <Button
          key="ok"
          type="primary"
          onClick={() => setIsModalVisible(false)}
        >
          OK
        </Button>,
      ]}
    >
      <Result
        style={{ marginTop: '9%' }}
        status="success"
        title="Successfully Placed Order!"
        subTitle={`Order ID: ${Math.floor(Math.random() * 10000)}`}
      />
    </Modal>
  )
}

export default OrderSuccess
