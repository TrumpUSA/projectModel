import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import {Badge, Icon} from 'antd'
import * as dd from 'dingtalk-jsapi'

import {getUserInfo} from '../../constants/util'

import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

@withRouter
@inject('manageStore', 'userStore')
@observer
class PageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDing: false
    }
  }

  componentDidMount() {
    if (!dd.version) {
      // 浏览器环境
      this.setState({isDing: false});
    } else {
      // 钉钉环境
      this.setState({isDing: true});
    }
    this.props.userStore.queryUserConfig();
  }

  handelMenuChange = (e, routerName, router) => {
    e.stopPropagation();
    if (null !== routerName) {
      this.props.manageStore.setSelectHeader(routerName);
    }
    this.props.history.push(router);
  }

  layout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userInfo");
    this.props.history.push('/login');
  }

  render() {
    const {_headerConfig} = this.props.manageStore;
    const {_userPermisstionMenu} = this.props.userStore;
    const {_userConfig} = this.props.userStore;
    let type = parseInt(_userConfig.v2) || 0;
    const {isDing} = this.state;
    // console.log(_userPermisstionMenu)
    return (
      <header>
        <div className="header-left">
          <Link to="/login">项目模版</Link>
        </div>
        <div className="header-right">
          <ul className="menu-first">
            {/*{*/}
            {/*  Array.isArray(_userPermisstionMenu) && _userPermisstionMenu.map((item, index) => (*/}
            {/*    <li*/}
            {/*      key={`firstmenu${index}`}*/}
            {/*      // onClick={(e, t) => this.handelMenuChange(e, item, _headerConfig[item].router)}*/}
            {/*    >*/}
            {/*      <Icon type="bank"/>*/}
            {/*      <span>{item.name}</span>*/}
            {/*      {*/}
            {/*        Object.keys(item.children).length > 0 ?*/}
            {/*          <ul className="menu-secend">*/}
            {/*            {*/}
            {/*              item.children.map((child, i) => (*/}
            {/*                <li*/}
            {/*                  key={`secendmenu${i}`}*/}
            {/*                  onClick={(e, t) => this.handelMenuChange(e, null, child.url)}*/}
            {/*                >*/}
            {/*                  <span>{child.name}</span>*/}
            {/*                </li>*/}
            {/*              ))*/}
            {/*            }*/}
            {/*          </ul> : null*/}
            {/*      }*/}
            {/*    </li>*/}
            {/*  ))*/}
            {/*}*/}

            {
              Object.keys(_headerConfig).map((item, index) => (
                <li
                  hidden={item === 'MyMessage' ? true : _headerConfig[item].pcItem !== type}
                  key={`firstmenu${index}`}
                  onClick={(e, t) => this.handelMenuChange(e, item, _headerConfig[item].router)}
                >
                  <FontAwesomeIcon icon={_headerConfig[item].icon}/>
                  {index > 18 ?
                    <Badge count={5} style={{backgroundColor: '#2db7f5'}}>
                      <span>{_headerConfig[item].name}</span>
                    </Badge>
                    : <span>{_headerConfig[item].name}</span>
                  }
                  {
                    (_headerConfig[item].children.length > 0 && !_headerConfig[item].groupFlag) ?
                      <ul className="menu-secend">
                        {
                          _headerConfig[item].children.map((child, i) => (
                            <li
                              key={`secendmenu${i}`}
                              onClick={(e, t) => this.handelMenuChange(e, null, child.router)}
                            >

                              <span>{child.name}</span>

                            </li>
                          ))
                        }
                      </ul> : null
                  }
                </li>
              ))
            }

          </ul>
        </div>
        < div
          className="layout-wrap"
          hidden={isDing}>
      < span
        className="username"> {getUserInfo('cnname'
      )
      }</span>
          <span onClick={this.layout}>注销</span>
        </div>
      </header>
    )
  }
}

export default PageHeader
