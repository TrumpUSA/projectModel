import React, {Component} from 'react'
import qs from 'qs'
import {inject, observer} from 'mobx-react'
import ask from '../../lib/ask'
import {Label} from "../../constants/label";
import {openNotification} from "../../constants/msg";

@inject('userStore')
@observer
class DingLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    let search = this.props.location.search.substring(1);
    let searchParse = qs.parse(search);
    this.dingTalkLogin(searchParse.code);
  }

  dingTalkLogin = async (code) => {
		try {
			const { flag, data, msg } = await ask('dingTalkLogin',{params: {code: code, type: 2}});
			if(flag !== 1 || !data){
        openNotification(Label.msg_type_error, Label.msg_title_error, msg);
      }else {
        this.setLocalStorage(data);
        //登录成功获取RdProductDict数据
        this.props.userStore.queryKeysRdProductDict(); 
        this.props.userStore.getPermissionList()
        .then(() => {
          this.props.history.push('/manage/myworkPlatform');
        });
      }
      this.setState({dingLoading: false});
		} catch (error) {
      this.setState({dingLoading: false});
			console.log(error);
		}
  }

  setLocalStorage = (data) => {
    window.localStorage.setItem("token", data.token);
    window.localStorage.setItem("userInfo", JSON.stringify(data));
  }

  render(){
    return (
      <div></div>
    )
  }
}
export default DingLogin
