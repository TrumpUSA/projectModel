const manageApi = {
  // 产品计划
  queryKeysRdProductionPlan: {
    method: 'GET',
    url: '/rdProductionPlan/queryKeysRdProductionPlan'
  },
  addRdProductionPlan: {
    method: 'POST',
    url: '/rdProductionPlan/addRdProductionPlan'
  },
  updateRdProductionPlan: {
    method: 'PUT',
    url: '/rdProductionPlan/updateRdProductionPlan'
  },
  deleteRdProductionPlan: {
    method: 'DELETE',
    url: '/rdProductionPlan/deleteRdProductionPlan'
  },
  //计划单
  queryRdProductionPlanOrder: {
    method: 'GET',
    url: '/rdProductionPlan/queryRdProductionPlanOrder'
  },

  selectRdProductionPlanOrder: {
    method: 'GET',
    url: '/rdProductionPlan/selectRdProductionPlanOrder'
  },
  queryPPOrderListByPPUid: {
    method: 'GET',
    url: '/rdProductionPlan/queryPPOrderListByPPUid'
  },
  addRdProductionPlanOrder: {
    method: 'POST',
    url: '/rdProductionPlan/addRdProductionPlanOrder'
  },
  addRdProductionPlanOrderList: {
    method: 'POST',
    url: '/rdProductionPlan/addRdProductionPlanOrderList'
  },
  updateRdProductionPlanOrder: {
    method: 'PUT',
    url: '/rdProductionPlan/updateRdProductionPlanOrder'
  },
  deleteRdProductionPlanOrder: {
    method: 'DELETE',
    url: '/rdProductionPlan/deleteRdProductionPlanOrder'
  },

  queryRdProductionPlan: {
    method: 'GET',
    url: '/rdProductionPlan/queryRdProductionPlan'
  },
  queryPlanOrderList: {
    method: 'GET',
    url: '/rdProductionPlan/queryPlanOrderList'
  },
  queryProductPlanView: {
    method: 'GET',
    url: '/rdProductionPlan/queryProductPlanView'
  },

  // 生产子计划api
  queryKeysRdProductionPlanDate: {
    method: 'GET',
    url: '/rdProductionPlanDate/queryKeysRdProductionPlanDate'
  },
  addRdProductionPlanDate: {
    method: 'POST',
    url: '/rdProductionPlanDate/addRdProductionPlanDate'
  },
  updateRdProductionPlanDate: {
    method: 'PUT',
    url: '/rdProductionPlanDate/updateRdProductionPlanDate'
  },
  deleteRdProductionPlanDate: {
    method: 'DELETE',
    url: '/rdProductionPlanDate/deleteRdProductionPlanDate'
  },

  // 工艺单api
  addRdCraftList: {
    method: 'POST',
    url: '/rdCraftListBase/addRdCraftList'
  },
  queryRdCraftList: {
    method: 'GET',
    url: '/rdCraftListBase/queryRdCraftList'
  },
  queryRdCraftListBase: {
    method: 'GET',
    url: '/rdCraftListBase/queryRdCraftListBase'
  },
  updateRdCraftList: {
    method: 'PUT',
    url: '/rdCraftListBase/updateRdCraftList'
  },
  updateListMediaForBizType: {
    method: 'PUT',
    url: '/rdCraftListBase/updateListMediaForBizType'
  },

  // 产品管理api
  //获取产品列表
  queryKeysRdProductInfoBase: {
    method: 'POST',
    url: '/rdProductCategory/queryKeysRdProductInfoBase'
  },
  selectRdProductInfoBase: {
    method: 'POST',
    url: '/rdProductCategory/selectRdProductInfoBase'
  },
  addRdProductInfoBase: {
    method: 'POST',
    url: '/rdProductCategory/addRdProductInfoBase'
  },
  addRdProductInfoBaseList: {
    method: 'POST',
    url: '/rdProductCategory/addRdProductInfoBaseList'
  },
  //updateRdProductInfoBase
  updateRdProductInfoBase: {
    method: 'PUT',
    url: '/rdProductCategory/updateRdProductInfoBase'
  },
  deleteRdProductInfoBase: {
    method: 'DELETE',
    url: '/rdProductCategory/deleteRdProductInfoBase'
  },
  updateRdProductCategoryUniq: {
    method: 'PUT',
    url: '/rdProductCategoryUniq/updateRdProductCategoryUniq'
  },

  queryRdProductInfoBase: {
    method: 'GET',
    url: '/rdProductCategory/queryRdProductInfoBase'
    //查询单个产品基本信息
  },
  // 产品分类
  queryProductCategory: {
    method: 'GET',
    url: '/rdProductCategory/queryProductCategory'
  },

  // 物料管理Api
  queryKeysBmMaterialCategory: {
    method: 'GET',
    url: '/bmMaterial/queryKeysBmMaterialCategory'
  },
  deleteBmMaterialCategory: {
    method: 'DELETE',
    url: '/bmMaterial/deleteBmMaterialCategory'
  },
  updateBmMaterialCategory: {
    method: 'PUT',
    url: '/bmMaterial/updateBmMaterialCategory'
  },
  updateSubmitState: {
    method: 'PUT',
    url: '/bmMaterial/updateSubmitState'
  },
  updateDetectionBase: {
    method: 'PUT',
    url: '/bmMaterial/updateDetectionBase'
  },
  updateByUid: {
    method: 'PUT',
    url: '/bmMaterial/updateByUid'
  },
  addBmMaterialCategory: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialCategory'
  },
  addBmMaterialBase: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialBase'
  },
  getMaterialCode: {
    method: 'GET',
    url: '/bmMaterial/getMaterialCode'
  },
  updateBmMaterialBase: {
    method: 'PUT',
    url: '/bmMaterial/updateBmMaterialBase'
  },
  insertColorList: {
    method: 'POST',
    url: '/bmMaterial/insertColorList'
  },
  insertSizeList: {
    method: 'POST',
    url: '/bmMaterial/insertSizeList'
  },
  queryBmMaterialGroup: {
    method: 'GET',
    url: '/bmMaterial/queryBmMaterialGroup'
  },
  queryKeysBmMaterialBase: {
    method: 'GET',
    url: '/bmMaterial/queryKeysBmMaterialBase'
  },
  queryOnline: {
    method: 'GET',
    url: '/bmMaterial/queryOnline'
  },
  // 物料理化api
  queryBmMaterialDetection: {
    method: 'GET',
    url: '/bmMaterial/queryBmMaterialDetection'
  },
  addBmMaterialDetection: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialDetection'
  },
  updateBmMaterialDetection: {
    method: 'PUT',
    url: '/bmMaterial/updateBmMaterialDetection'
  },
  // bom api
  addRdBomList: {
    method: 'POST',
    url: '/rdBomBase/addRdBomList'
  },
  updateRdBomList: {
    method: 'PUT',
    url: '/rdBomBase/updateRdBomList'
  },
  addRdBomMaterialList: {
    method: 'POST',
    url: '/rdBomBase/addRdBomMaterialList'
  },
  queryRdBomList: {
    method: 'GET',
    url: '/rdBomBase/queryRdBomList'
  },
  queryKeysRdBomMaterial: {
    method: 'GET',
    url: '/rdBomBase/queryKeysRdBomMaterial'
  },
  //核价
  selectRdBomMaterialList: {
    method: 'GET',
    url: '/rdBomBase/selectRdBomMaterialList'
  },
  addRdBomMaterialPrice: {
    method: 'POST',
    url: '/rdBomBase/addRdBomMaterialPrice'
  },
}

export default manageApi
