/**
 * 登录
 * @author bkhao
 * @date 2019-04-15
 */

import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Base64} from 'js-base64'
import {Form, Input, Button, message, Checkbox, Tabs} from 'antd'
import qs from 'qs'
import * as dd from 'dingtalk-jsapi'
import ask from '../../lib/ask'
import {Label} from "../../constants/label"
import {openNotification} from "../../constants/msg"

import './style.scss';

const TabPane = Tabs.TabPane;

@inject('userStore')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dingLoading: false,
      isLogin: false,
      activeKey: "1",
      type: 1,
      loadining: false,
      caplockFlag: false,  // 控制大写打开的信息提示
      caplockOpen: false,      // 纪录大写锁的打开关闭
      remember: window.localStorage.getItem('remember') === 'true' ? true : false
    };
  }

  componentDidMount() {
    if (!dd.version) {
      // 浏览器环境
      this.setState({activeKey: "1", type: 2}, () => {
        this.initDingCodeLogin();
      });
    } else {
      // 钉钉环境
      this.setState({activeKey: "2", type: 1});
      this.getDingCode();
    }
  }

  initDingCodeLogin = () => {
    let _this = this;
    // 钉钉登录二维码
    window.dingLogin();
    if (typeof window.addEventListener != 'undefined') {
      window.addEventListener('message', _this.hanndleMessage, false);
    } else if (typeof window.attachEvent != 'undefined') {
      window.attachEvent('onmessage', _this.hanndleMessage);
    }
  }

  hanndleMessage = (event) => {
    var origin = event.origin;
    if (origin == "https://login.dingtalk.com") {
      var loginTmpCode = event.data;
      //emp
      // var appid = 'dingoacrzzomwuegusb3z8';

      //zuose
      var appid = 'dingoadjah7aabekdad4xl';
      var ruri = encodeURIComponent('' + window.location.origin + '/dingLogin');
      let jump = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${ruri}&loginTmpCode=${loginTmpCode}`
      window.location = jump;
    }
  };

  checkboxChange = (e) => {
    this.setState({remember: e.target.checked}, () => {
      window.localStorage.setItem('remember', e.target.checked);
      if (e.target.checked === false) {
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('passWord');
      } else {
        let values = this.props.form.getFieldsValue();
        window.localStorage.setItem('userName', values.userName ? values.userName : '');
        window.localStorage.setItem('passWord', values.passWord ? Base64.encode(values.passWord) : '');
      }
    });
  }
  //绑定键盘事件回车搜索
  keyUpEnter = (e) => {
    let key = e.keyCode;
    if (key === 13) {
      this.handleSubmit();
    }
    // 判断是否为打开大写锁
    if (key === 20) {
      this.setState({
        caplockOpen: !this.state.caplockOpen
      }, () => {
        if (this.state.caplockOpen === false) return;
        this.setState({
          caplockFlag: true
        }, () => {
          setTimeout(() => {
            this.setState({
              caplockFlag: false
            });
          }, 1000);
        })
      });

    }
  }
  handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let {userName, passWord} = values;
        passWord = Base64.encode(passWord);
        let params = qs.stringify({userName, passWord});
        this.login(params);
      }
    });
  }

  login = async (params) => {
    try {
      this.setState({loading: true});
      const {flag, data, msg} = await ask('login', {
        data: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      this.setState({loading: false});
      if (flag !== 1 || !data) {
        openNotification(Label.msg_type_error, Label.msg_title_error, msg);
      } else {
        this.setLocalStorage(data);
        this.props.userStore.getPermissionList()
          .then(() => {
            this.props.history.push('/manage/myworkPlatform');
          });
      }
    } catch (error) {
      this.setState({loading: false});
      console.log(error);
    }
  }

  getDingCode = () => {
    if (!dd.version) {
      message.warning('当前环境不支持');
      return;
    }
    let _this = this;
    this.setState({dingLoading: true});
    dd.runtime.permission.requestAuthCode({
      //zuose
      corpId: "dingff9ceef4cde4ac8e",

      // corpId: "ding290c453f545ba7d635c2f4657eb6378f",
      onSuccess: function (result) {
        _this.dingTalkLogin(result.code);
      },
      onFail: function (err) {
        _this.setState({dingLoading: false});
      }
    })
  }

  dingTalkLogin = async (code) => {
    try {
      const {flag, data, msg} = await ask('dingTalkLogin', {params: {code: code, type: 1}});
      if (flag !== 1 || !data) {
        openNotification(Label.msg_type_error, Label.msg_title_error, msg);
      } else {
        this.setLocalStorage(data);
        this.props.userStore.getPermissionList()
          .then(() => {
            this.props.history.push('/manage/myworkPlatform');
          });
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({dingLoading: false});
  }

  setLocalStorage = (data) => {
    window.localStorage.setItem("token", data.token);
    window.localStorage.setItem("userInfo", JSON.stringify(data));
    //登录成功获取RdProductDict数据
    this.props.userStore.queryKeysRdProductDict();
  }

  handelTabChange = (key) => {
    this.setState({activeKey: key})
  }

  render() {
    const {remember, caplockFlag, dingLoading, activeKey, type, loading} = this.state;
    const FormItem = Form.Item;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const {userName, passWord} = window.localStorage;
    return (

      <div className="Login">
        <div className="loginCenter">
          <div className="loginLeft"></div>
          <div className="loginRight">
            <span className="loginTitle">欢迎登录</span>
            <Tabs activeKey={activeKey} onChange={this.handelTabChange} className="loginForm">
              <TabPane tab="账号密码登录" forceRender={true} key="1">
                <Form>
                  <FormItem {...formItemLayout} label="用户名：">
                    {getFieldDecorator('userName', {
                      rules: [{
                        required: true, message: '请输入用户名',
                      }],
                      initialValue: userName ? userName : ''
                    })(
                      <Input onKeyUp={this.keyUpEnter.bind(this)}/>
                    )}
                  </FormItem>
                  <FormItem {...formItemLayout} label="密码：">
                    {getFieldDecorator('passWord', {
                      rules: [{
                        required: true, message: '请输入密码',
                      }],
                      initialValue: passWord ? Base64.decode(passWord) : ''
                    })(
                      <div className="pwd-wrap">
                        <span className="pwd-caplock-info" style={{'opacity': caplockFlag ? 1 : 0}}>大写锁已打开</span>
                        <Input type="passWord" onKeyUp={this.keyUpEnter.bind(this)}/>
                      </div>
                    )}
                  </FormItem>
                  <FormItem {...formItemLayout} label=" " colon={false} style={{marginBottom: 0}}>
                    <Checkbox checked={remember} onChange={this.checkboxChange.bind(this)}>记住密码</Checkbox>
                  </FormItem>
                  <FormItem>
                    <Button
                      type="primary"
                      className="loginBtn"
                      loading={loading}
                      onKeyUp={this.keyUpEnter.bind(this)}
                      onClick={this.handleSubmit.bind(this)}
                    >登录
                    </Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane tab="钉钉登录" key="2" forceRender={true} className="ding-login-wrap">
                {
                  type === 2 ? <div id="login_container"></div> :
                    <Button
                      type="primary"
                      className="ding-btn"
                      loading={dingLoading}
                      onClick={this.getDingCode}
                    >一键登录
                    </Button>
                }
              </TabPane>
            </Tabs>

          </div>
        </div>
      </div>
    )

  }
}

Login = Form.create()(Login);

export default Login;
