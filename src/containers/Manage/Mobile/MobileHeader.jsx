import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'
import { inject, observer } from 'mobx-react'

import './style.scss'

@inject('manageStore')
@observer
class MobileHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    const { _selectHeader } = this.props.manageStore;
    let isArray = Array.isArray(_selectHeader.children);
    const menu = (
      <Menu className={isArray && 0 < _selectHeader.children.length?'has-children':'no-children'}>
        {
          isArray && _selectHeader.children.map((item,index) => (
            <Menu.Item key={index}>
              <Link to={item.router || '/'}>{item.name}</Link>
            </Menu.Item>
          ))
        }
      </Menu>
    );
    return (
      <div className={_selectHeader.name === '我的工作台'?'hiddenI':'mobile-header'}>
        <div className="header-left">
        
        </div>
        {
          !_selectHeader.groupFlag?
          <Dropdown overlay={menu} trigger={['click']}>
            <Link className="ant-dropdown-link" to={_selectHeader.router}>
              {_selectHeader.name} <Icon type="down" />
            </Link>
          </Dropdown>:
          <span>{_selectHeader.name}</span>
        }
        
      </div>
    )
  }
}
export default MobileHeader