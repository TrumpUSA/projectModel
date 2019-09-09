import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import {Icon} from 'antd'
import * as dd from "dingtalk-jsapi";

@withRouter
@inject('manageStore', 'userStore')
@observer
class MobileFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handelMenuChange = (routerName, router) => {
    this.props.manageStore.setSelectHeader(routerName);
    this.props.history.push(router);
  }
  handleScreenToogle = () => {
    const {isCross} = this.state;
    // console.log('111')
    if (dd.version) {
      if (!isCross) {
        dd.device.screen.rotateView({
          showStatusBar: true, // 否显示statusbar
          clockwise: true, // 是否顺时针方向
          onSuccess: function (result) {
          },
          onFail: function (err) {
          }
        });
        this.state.isCross = true;
      } else {
        dd.device.screen.resetView({
          onSuccess: function (result) {
          },
          onFail: function (err) {
          }
        });
        this.state.isCross = false;
      }
    }
  }

  render() {
    const {_headerConfig, selectHeader} = this.props.manageStore;
    const {_userConfig} = this.props.userStore;
    let type = parseInt(_userConfig.v2) || 0;
    return (
      <div className="mobile-footer ">
        <div className="footer-scroll-list">
          {
            Object.keys(_headerConfig).map((item, index) => (
              <div
                hidden={_headerConfig[item].pcItem !== type}
                key={`mobilefirstmenu${index}`}
                className={selectHeader === item ? 'footer-menu-item active' : 'footer-menu-item'}
                onClick={() => this.handelMenuChange(item, _headerConfig[item].mobileRouter || _headerConfig[item].router)}
              >
                <Icon type={_headerConfig[item].mobileIcon} theme={selectHeader === item ? 'filled' : 'outlined'}
                      className={selectHeader === item ? 'footer-menu-item-icon active' : 'footer-menu-item-icon'}/>
                <span className="item-name">{_headerConfig[item].mobileName}</span>
              </div>
            ))
          }
          {/*<div className='footer-menu-item' onClick={this.handleScreenToogle}>*/}
          {/*  <Icon type="setting" className='footer-menu-item-icon'/>*/}
          {/*  <span className="item-name" >横屏试用</span>*/}
          {/*</div>*/}
        </div>
      </div>
    )

  }
}

export default MobileFooter
