/**
 * 采购API
 * @author bkhao
 * @date 2019-04-26
 */
const sysManageApi = {

  //BPM
  getProcessDefinitionList: {
    method: 'GET',
    url: '/process/processDefinitionList'
  },
  getProcesslist: {
    method: 'GET',
    url: '/process/getProcesslist'
  },
  deployFile: {
    method: 'POST',
    url: '/process/deployFile'
  },
  startProcess: {
    method: 'POST',
    url: '/process/start'
  },
  todoList: {
    method: 'GET',
    url: '/userTask/todoList'
  },
  doneList: {
    method: 'GET',
    url: '/userTask/doneList'
  },
  flowInfo: {
    method: 'GET',
    url: '/userTask/flowInfo'
  },
  processApproval: {
    method: 'POST',
    url: '/userTask/processApproval'
  },

  getUserList: {
    method: 'GET',
    url: '/user/list'
  },

  deleteUser: {
    method: 'GET',
    url: '/user/delete'
  },
  sysRolelist: {
    method: 'GET',
    url: '/sysRole/sysRolelist'
  },

  sysRolelistAll: {
    method: 'GET',
    url: '/sysRole/sysRolelistAll'
  },
  addSysRole: {
    method: 'POST',
    url: '/sysUserRole/addSysRole'
  },
  updateSysRole: {
    method: 'PUT',
    url: '/sysUserRole/updateSysRole'
  },
  querySysUserRole: {
    method: 'GET',
    url: '/sysUserRole/queryUserUidListByRoleUid'
  },
  getRoleListByUser: {
    method: 'GET',
    url: '/sysUserRole/getRoleListByUser'
  },

  getUserListByRole: {
    method: 'GET',
    url: '/sysUserRole/getUserListByRole'
  },

  getKnowledgeList: {
    method: 'GET',
    url: '/sysUserRole/getKnowledgeList'
  },

  getUserListNotInRole: {
    method: 'GET',
    url: '/sysUserRole/getUserListNotInRole'
  },
  getUserHasRole: {
    method: 'GET',
    url: '/sysUserRole/getUserHasRole'
  },
  deleteSysRole: {
    method: 'DELETE',
    url: '/sysUserRole/deleteSysRole'
  },
  addSysUserRole: {
    method: 'POST',
    url: '/sysUserRole/addSysUserRole'
  },
  AddRoleListForUser: {
    method: 'POST',
    url: '/sysUserRole/AddRoleListForUser'
  },
  addBmDetectionResultMap: {
    method: 'POST',
    url: '/sysUserRole/addBmDetectionResultMap'
  },
  deleteSysUserRole: {
    method: 'DELETE',
    url: '/sysUserRole/deleteSysUserRole'
  },

  deleteDetectionResult: {
    method: 'DELETE',
    url: '/sysUserRole/deleteDetectionResult'
  },
  getUserConfig: {
    method: 'GET',
    url: '/userConfig/get'
  },
  addUserConfig: {
    method: 'POST',
    url: '/userConfig/save'
  },
  addRdBaseMedia: {
    method: 'POST',
    url: '/rdCraftListBase/addRdBaseMedia'
  },

  addRdCraftListBase: {
    method: 'POST',
    url: '/rdCraftListBase/addRdCraftListBase'
  },

  addCraftTemplate: {
    method: 'POST',
    url: '/rdCraftListBase/addCraftTemplate'
  },

  updateRdCraftListBase: {
    method: 'PUT',
    url: '/rdCraftListBase/updateRdCraftListBase'
  },
  historyNodeList: {
    method: 'GET',
    url: '/process/historyNodeList'
  },
  taskList: {
    method: 'GET',
    url: '/process/taskList'
  },
  //
  updateProductState: {
    method: 'GET',
    url: '/common/updateProductState'
  },
  queryRdTypeTree: {
    method: 'GET',
    url: '/rdTypeTree/queryRdTypeTree'
  },
  queryKeysRdTypeTree: {
    method: 'GET',
    url: '/rdTypeTree/queryKeysRdTypeTree'
  },
  sendddmsg: {
    method: 'POST',
    url: '/message/sendddmsg'
  },
  addRdTypeTree: {
    method: 'POST',
    url: '/rdTypeTree/addRdTypeTree'
  },
  updateRdTypeTree: {
    method: 'PUT',
    url: '/rdTypeTree/updateRdTypeTree'
  },
  deleteRdTypeTree: {
    method: 'DELETE',
    url: '/rdTypeTree/deleteRdTypeTree'
  }
}


export default sysManageApi
