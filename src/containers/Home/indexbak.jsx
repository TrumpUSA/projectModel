import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import {Row, Col} from 'antd'
import Media from 'react-media'
import PageHeader from '../Manage/PageHeader'
import MobileHeader from '../Manage/Mobile/MobileHeader'
import MobileFooter from '../Manage/Mobile/MobileFooter'
import DefaultFooter from '../../components/DefaultFooter'
import {getRandomColor} from '../../constants/util'

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

  render() {
    const {_selectHeader} = this.props.manageStore;
    let isArray = Array.isArray(_selectHeader.children);
    // const { _userPermisstionMenu } = this.props.userStore;
    // let isArray = Array.isArray(_userPermisstionMenu);
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
                  isArray && _selectHeader.children.map((item, index) => (
                    <Row className="menu-item-wrap" gutter={16} key={`menufirst${index}`}>
                      <br/>
                      <h4>{item.name}</h4>
                      <div className='default-line'></div>
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
                isArray && _selectHeader.children.map((item, index) => {
                  let color = getRandomColor();
                  return (
                    <Row className="menu-item-wrap" gutter={16} key={`menufirst${index}`}>
                      <br/>
                      <h4>{item.name}</h4>
                      <div className='default-line'></div>
                      <br/>
                      {
                        Array.isArray(item.children) && item.children.map((item2, index2) => {
                          // let color = getRandomColor();
                          return (
                            <Col span={3} key={`${index}${index2}`}>
                              <MenuItem data={item2} bgcolor={color}/>
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
