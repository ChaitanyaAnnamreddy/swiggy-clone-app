import React from 'react'
import { Card, Skeleton } from 'antd'
import { Link } from 'react-router'

const { Meta } = Card

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: '',
        html_url: '',
        location: '',
        avatar_url: '',
      },
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/chaitanyaannamreddy')
    console.log(data)
    const json = await data.json()
    this.setState({ userInfo: json })
  }

  render() {
    const { name, html_url, avatar_url } = this.state.userInfo

    return (
      <Card
        className="user-card"
        cover={
          avatar_url ? (
            <img
              alt={name}
              src={avatar_url}
              style={{
                width: '50%',
                height: '50%',
                alignItems: 'center',
                margin: '20px auto 0px',
                borderRadius: '50%',
              }}
            />
          ) : (
            <Skeleton.Image
              active
              style={{
                margin: '10px',
              }}
            />
          )
        }
      >
        <Meta
          title={name ? name : <Skeleton.Input />}
          description={
            <div className="justify-start">
              <p className="text-gray-500 mt-2">
                <b>Github URL: </b>
                <Link to={html_url}>{html_url}</Link>
              </p>
              <p className=" mt-2 text-md leading-8 text-gray-800">
                I am currently interning as a Frontend Developer and Webflow
                Developer at Atomicwork, where I contribute to creating a modern
                service management platform designed to revolutionize the
                digital workplace experience. My work focuses on combining
                cutting-edge technologies with intuitive design to simplify
                complex workflows and drive business success.
              </p>
              <p className="text-gray-500 mt-2">
                <b>Location: </b> Bangalore
              </p>
            </div>
          }
        />
      </Card>
    )
  }
}

export default UserClass
