import {observable, action, computed, toJS} from 'mobx'
import ask from '../lib/ask'

class UserStore {

  @observable userList = [];
  @observable providerList = [];
  @observable rdProductDict = [];
  @observable userConfig = {};
  @observable userPermisstion = {};
  @observable userPermisstionMenu = [];

  @action
  setUserConfig(userConfig) {
    this.userConfig = userConfig;
  }

  @computed
  get _userConfig() {
    return toJS(this.userConfig);
  }

  @action
  setUserList(userList) {
    this.userList = userList;
  }

  @computed
  get _userList() {
    return toJS(this.userList);
  }

  @action
  setProviderList(providerList) {
    this.providerList = providerList;
  }

  @computed
  get _providerList() {
    return toJS(this.providerList);
  }

  @action
  setRdProductDict(rdProductDict) {
    this.rdProductDict = rdProductDict;
  }

  @computed
  get _rdProductDict() {
    return toJS(this.rdProductDict);
  }

  @action
  setUserPermisstion(userPermisstion) {
    this.userPermisstion = userPermisstion;
  }

  @computed
  get _userPermisstion() {
    return toJS(this.userPermisstion);
  }

  @action
  setUserPermisstionMenu(userPermisstionMenu) {
    this.userPermisstionMenu = userPermisstionMenu;
  }

  @computed
  get _userPermisstionMenu() {
    return toJS(this.userPermisstionMenu);
  }

  @action
  getUsernameByUid = (uid) => {
    let array = this._userList.filter(o => o.uid === uid);
    if (array.length > 0) {
      return array[0].cnname || '';
    }
    return '';
  }

  @action
  getProvidenameByUid = (uid) => {
    let array = this._providerList.filter(o => o.uid === uid);
    if (array.length > 0) {
      return array[0].companyName || '';
    }
    return '';
  }

  @action
  getCnameByUid = (uid) => {
    let array = this._rdProductDict.filter(o => o.uid === uid);
    if (array.length > 0) {
      return array[0].dictName || '';
    }
    return '(请尝试刷新页面)';
  }

  @action
  getPermissionList = async () => {
    if (Object.keys(this._userPermisstion).length > 0) return;
    try {
      const {data, flag} = await ask('permissionList');
      if (1 !== flag || !data) return;
      let menu = [];
      data.cateLog.forEach(element => {
        let obj = {...element};
        let uid = element.uid;
        let children = data.menu.filter(o => o.parentUid === uid);
        obj.children = children;

        menu.push(obj);
      });
      this.setUserPermisstion(data);
      this.setUserPermisstionMenu(menu);
      // console.log(menu)
    } catch (error) {
      console.log(error);
    }
  }

  @action
  queryUserConfig = async () => {
    try {
      const {data, flag} = await ask('getUserConfig');
      if (1 !== flag || !data) return;
      this.setUserConfig(data);
    } catch (error) {
      console.log(error);
    }
  }
  @action
  queryUser = async (callback) => {
    try {
      if (this._userList.length > 0) {
        if (callback) {
          callback();
        }
        return;
      }
      const {data, flag} = await ask('queryUser');
      // console.log(data)
      if (1 !== flag || !data) return;
      this.setUserList(data);
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  }

  @action
  queryProvider = async (callback) => {
    try {
      // 如果已经获取到数据，则不发送请求
      if (this._providerList.length > 0) {
        callback();
        return;
      }
      const {data, flag} = await ask('queryKeysBmProviderBase');
      if (1 !== flag || !data) return;
      this.setProviderList(data.list);
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  }

  @action
  queryKeysRdProductDict = async (callback) => {
    // 这个地方只返回dictType=1的数据。因为这张表的数据量会越来越大。
    try {
      // 如果已经获取到数据，则不发送请求
      if (this._rdProductDict.length > 0) {
        if (callback)
          callback();
        return;
      }
      const {data, flag} = await ask('queryKeysRdProductDict');
      // const {data, flag} = await ask('queryKeysRdProductDict', {params: {dictType: 20}});
      if (1 !== flag || !data) return;
      this.setRdProductDict(data);
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  }

}


export default UserStore
