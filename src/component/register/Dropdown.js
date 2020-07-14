import React from 'react'
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import './register.css'

function Dropdowns(props) {
    const menu = (
        <Menu >
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd item
          </Menu.Item>
        </Menu>)
    return (
        <div>
                    
  <Dropdown overlay={menu} >
      <Button className="dropdown" style={{top:props.top,left:props.left}}>
       {props.name} <DownOutlined />
      </Button>
    </Dropdown>
        </div>
    )
}

export default Dropdowns
