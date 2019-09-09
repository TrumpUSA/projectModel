import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import {Row, Col, Divider} from 'antd'
import Media from 'react-media'
import PageHeader from '../Manage/PageHeader'
import MobileHeader from '../Manage/Mobile/MobileHeader'
import MobileFooter from '../Manage/Mobile/MobileFooterV2'
import DefaultFooter from '../../components/DefaultFooter'

import MenuItem from './MenuItem'
import '../Manage/style.scss'
import './style.scss'

@withRouter
@inject('manageStore', 'userStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.userStore.getPermissionList();
  }

  render() {
    const {_userConfig} = this.props.userStore;
    let type = parseInt(_userConfig.v2) || 0;
    // const {_selectHeader} = this.props.manageStore;
    // let isArray = Array.isArray(_selectHeader.children);
    const {_userPermisstionMenu} = this.props.userStore;
    // console.log(_userPermisstionMenu)
    let isArray = Array.isArray(_userPermisstionMenu);
    return (

      <div className="home">
        <Media query="(max-width: 750px)">
          {matches =>
            matches ? (
              <MobileHeader/>
            ) : (
               <PageHeader/>

            )
          }
        </Media>
        <Media query="(max-width: 750px)">
          {matches =>
            matches ? (
              <div className="main-menu">
                {
                  isArray && _userPermisstionMenu.map((item, index) => (
                    <Row className="menu-item-wrap" gutter={16} key={`menufirst${index}`}>
                      <br/>
                      <Divider orientation="left">{item.name}</Divider>
                      <br/>
                      {
                        Array.isArray(item.children) && item.children.map((item2, index2) => (
                          <Col span={6} key={`${index}${index2}`}>
                            <MenuItem data={item2}/>
                          </Col>
                        ))
                      }
                    </Row>
                  ))
                }
              </div>
            ) : <div className="main-menu">
              {
                isArray && _userPermisstionMenu.map((item, index) => {
                  return (
                    <Row className="menu-item-wrap" gutter={16} key={`menufirst${index}`}>
                      <br/>
                      <Divider orientation="left">{item.name}</Divider>
                      <br/>
                      {
                        Array.isArray(item.children) && item.children.map((item2, index2) => {
                          return (
                            <Col span={3} key={`${index}${index2}`}>
                              <MenuItem data={item2}/>
                            </Col>
                          )
                        })
                      }
                    </Row>
                  )
                })
              }
            </div>
          }
        </Media>
        <Media query="(max-width: 750px)">
          {matches =>
            matches ? (
              <div>
                <div style={{height: '50px'}}></div>
                <MobileFooter/>
              </div>
            ) : <DefaultFooter/>
          }
        </Media>
      </div>

    )
  }
}

export default Home
