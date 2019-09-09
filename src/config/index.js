import BaseApi from './baseApi';
import ManageApi from './manage';
import PurchaseApi from './purchase';
import SysManage from './sysManage'
import manageApi from './manageApi'
import dashboardApi from './dashboardApi'


export default Object.assign({},
  BaseApi,
  ManageApi,
  PurchaseApi,
  SysManage,
  manageApi,
  dashboardApi
);
