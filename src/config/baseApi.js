/**
 * @description 基础API
 * @author --
 * date: --
 */

const baseApi = {

  login: {
    method: 'POST',
    url: '/user/login'
  },

  dingTalkLogin: {
    method: 'GET',
    url: '/user/dingTalk/login'
  },

  getFile: {
    method: 'GET',
    url: '/rdCraftListBase/getFile'
  },

  getFileBase64: {
    method: 'GET',
    url: '/rdCraftListBase/getFileBase64'
  },

  imgDelete: {
    method: 'DELETE',
    url: '/rdCraftListBase/imagedelete'
  },

  upload: {
    method: 'POST',
    url: '/rdCraftListBase/upload'
  },

  queryUser: {
    method: 'GET',
    url: '/user/queryUser'
  },

  queryKeysRdProductDict: {
    method: 'GET',
    url: '/rdProductCategory/queryKeysRdProductDict'
  },
  selectSizeLabel: {
    method: 'GET',
    url: '/rdProductCategory/selectSizeLabel'
  },
  permissionList: {
    method: 'GET',
    url: '/user/permissionList'
  },

  getAllPermission: {
    method: 'GET',
    url: '/user/getAllPermission'
  },
  deletePermission: {
    method: 'DELETE',
    url: '/user/deletePermission'
  },
  updateSysPermission: {
    method: 'PUT',
    url: '/user/updateSysPermission'
  },
  getPermissionListByRole: {
    method: 'GET',
    url: '/user/getPermissionListByRole'
  },
  addSysPermissionRole: {
    method: 'POST',
    url: '/user/addSysPermissionRole'
  },
  getPermissionsAll: {
    method: 'GET',
    url: '/user/getPermissionsAll'
  },

  getAllDeptList: {
    method: 'GET',
    url: '/user/getAllDeptList'
  },
  getDeptUserList: {
    method: 'GET',
    url: '/user/getDeptUserList'
  },
}


export default baseApi
