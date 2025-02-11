import React from 'react'
import { Button, Form, Input, Card } from 'antd'

const { TextArea } = Input

export const Contact = () => (
  <Card title="Contact me" className="user-card">
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <TextArea rows={12} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Card>
)
