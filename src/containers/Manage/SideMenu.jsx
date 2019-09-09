import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'

import './style.scss'

const {SubMenu} = Menu;
const SideMenu = () => {
  return (
    <Menu theme="light"  mode="inline" defaultSelectedKeys={['物料管理']}>
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="mail"/>
            <span>研发管理</span>
          </span>
        }
      >
        <Menu.Item key="物料管理">
          <Link to="/manage/rd/bm">物料管理</Link>
        </Menu.Item>
        <Menu.Item key="BOM管理">
          <Link to="/manage/rd/bommanage">BOM管理</Link>
        </Menu.Item>
        <Menu.Item key="核价管理">
          <Link to="/manage/rd/checkpricelist">核价管理</Link>
        </Menu.Item>
        <Menu.Item key="工艺单管理">
          <Link to="/manage/rd/craftlist">工艺单管理</Link>
        </Menu.Item>
        <Menu.Item key="二次工艺管理">
          <Link to="/manage/rd/pplist">二次工艺管理</Link>
        </Menu.Item>
        <Menu.Item key="预处理管理">
          <Link to="/manage/rd/pre">预处理管理</Link>
        </Menu.Item>
        <Menu.Item key="裁剪管理">
          <Link to="/manage/rd/pplist">裁剪管理</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default SideMenu
