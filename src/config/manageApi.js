const manageApi = {

  getBaseMediaList: {
    method: 'GET',
    url: '/rdCraftListBase/getBaseMediaList'
  },
  getRdBaseMedia: {
    method: 'GET',
    url: '/rdCraftListBase/getRdBaseMedia'
  },
  querySysBizLog: {
    method: 'GET',
    url: '/sysBizLog/querySysBizLog'
  },
  queryKeysRdProductDict: {
    method: 'GET',
    url: '/rdProductCategory/queryKeysRdProductDict'
  },
  deleteRdProductDict: {
    method: 'DELETE',
    url: '/rdProductCategory/deleteRdProductDict'
  },
  updateRdProductDict: {
    method: 'PUT',
    url: '/rdProductCategory/updateRdProductDict'
  },
  addRdProductDict: {
    method: 'POST',
    url: '/rdProductCategory/addRdProductDict'
  },
// 物料季节管理
  selectGroupList: {
    method: 'GET',
    url: '/bmMaterial/selectGroupList'
  },
  addBmMaterialGroup: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialGroup'
  },
  updateBmMaterialGroup: {
    method: 'PUT',
    url: '/bmMaterial/updateBmMaterialGroup'
  },
  deleteBmMaterialGroup: {
    method: 'DELETE',
    url: '/bmMaterial/deleteBmMaterialGroup'
  },
  updateOnline: {
    method: 'PUT',
    url: '/bmMaterial/updateOnline'
  },
  queryOnline: {
    method: 'GET',
    url: '/bmMaterial/queryOnline'
  },
  queryBmMaterialBase: {
    method: 'GET',
    url: '/bmMaterial/queryBmMaterialBase'
  },
  //ProductCategory
  queryKeysRdProductCategory: {
    method: 'GET',
    url: '/rdProductCategory/queryKeysRdProductCategory'
  },

  queryRdProductCategoryByTwo: {
    method: 'GET',
    url: '/rdProductCategory/queryRdProductCategoryByTwo'
  },
  queryRdProductCategoryByTwoUniq: {
    method: 'GET',
    url: '/rdProductCategoryUniq/queryRdProductCategoryByTwoUniq'
  },
  queryRdProductCategoryByCraft: {
    method: 'GET',
    url: '/rdProductCategory/queryRdProductCategoryByCraft'
  },
  queryRdProductCategory: {
    method: 'GET',
    url: '/rdProductCategory/queryRdProductCategory'
  },
  queryCommonTableByparentUid: {
    method: 'GET',
    url: '/rdProductCategory/queryCommonTableByparentUid'
  },
  deleteRdProductCategory: {
    method: 'DELETE',
    url: '/rdProductCategory/deleteRdProductCategory'
  },
  deleteRdProductCategoryUniq: {
    method: 'DELETE',
    url: '/rdProductCategoryUniq/deleteRdProductCategoryUniq'
  },

  deleteRdCraftListBase: {
    method: 'DELETE',
    url: '/rdCraftListBase/deleteRdCraftListBase'
  },

  updateRdProductCategory: {
    method: 'PUT',
    url: '/rdProductCategory/updateRdProductCategory'
  },

  addRdProductLabel: {
    method: 'POST',
    url: '/rdProductCategory/addRdProductLabel'
  },

  queryRdProductLabel: {
    method: 'GET',
    url: '/rdProductCategory/queryRdProductLabel'
  },
  deleteRdProductLabel: {
    method: 'DELETE',
    url: '/rdProductCategory/deleteRdProductLabel'
  },
  deleteRdProductLabelByUid: {
    method: 'DELETE',
    url: '/rdProductCategory/deleteRdProductLabelByUid'
  },

  addRdProductCategory: {
    method: 'POST',
    url: '/rdProductCategory/addRdProductCategory'
  },

  addRdProductCategoryUniq: {
    method: 'POST',
    url: '/rdProductCategoryUniq/addRdProductCategoryUniq'
  },
  addCommonTable: {
    method: 'POST',
    url: '/rdProductCategory/addCommonTable'
  },

  addRdProductCategoryList: {
    method: 'POST',
    url: '/rdProductCategory/addRdProductCategoryList'
  },

  //MaterialCategory
  queryKeysBmMaterialCategory: {
    method: 'GET',
    url: '/bmMaterial/queryKeysBmMaterialCategory'
  },

  queryKeysBmMaterialCategoryV2: {
    method: 'GET',
    url: '/bmMaterial/queryKeysBmMaterialCategoryV2'
  },
  deleteBmMaterialCategory: {
    method: 'DELETE',
    url: '/bmMaterial/deleteBmMaterialCategory'
  },
  updateBmMaterialCategory: {
    method: 'PUT',
    url: '/bmMaterial/updateBmMaterialCategory'
  },
  addBmMaterialCategory: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialCategory'
  },

  //queryKeysBmMaterialKnowledgeGroup
  queryKeysBmMaterialKnowledgeGroup: {
    method: 'GET',
    url: '/bmMaterial/queryKeysBmMaterialKnowledgeGroup'
  },
  addBmMaterialKnowledgeGroup: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialKnowledgeGroup'
  },
  updateBmMaterialKnowledgeGroup: {
    method: 'PUT',
    url: '/bmMaterial/updateBmMaterialKnowledgeGroup'
  },
  deleteBmMaterialKnowledgeGroup: {
    method: 'DELETE',
    url: '/bmMaterial/deleteBmMaterialKnowledgeGroup'
  },
  //
  queryKeysBmMaterialKnowledge: {
    method: 'GET',
    url: '/bmMaterial/queryKeysBmMaterialKnowledge'
  },
  addBmMaterialKnowledge: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialKnowledge'
  },
  updateBmMaterialKnowledge: {
    method: 'PUT',
    url: '/bmMaterial/updateBmMaterialKnowledge'
  },
  deleteBmMaterialKnowledge: {
    method: 'DELETE',
    url: '/bmMaterial/deleteBmMaterialKnowledge'
  },

  //
  queryKeysBmMaterialDict: {
    method: 'GET',
    url: '/bmMaterial/queryKeysBmMaterialDict'
  },
  addBmMaterialDict: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialDict'
  },
  updateBmMaterialDict: {
    method: 'PUT',
    url: '/bmMaterial/updateBmMaterialDict'
  },
  deleteBmMaterialDict: {
    method: 'DELETE',
    url: '/bmMaterial/deleteBmMaterialDict'
  },

  //detection
  addBmMaterialDetectionBase: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialDetectionBase'
  },
  addBmMaterialDetectionBaseApply: {
    method: 'POST',
    url: '/bmMaterial/addBmMaterialDetectionBaseApply'
  },

  submitReport: {
    method: 'POST',
    url: '/bmMaterial/submitReport'
  },
  deleteBmMaterialDetectionBase: {
    method: 'DELETE',
    url: '/bmMaterial/deleteBmMaterialDetectionBase'
  },
  queryDetectionBaseItem: {
    method: 'GET',
    url: '/bmMaterial/queryDetectionBaseItem'
  },

  queryDetectionPrint: {
    method: 'GET',
    url: '/bmMaterial/queryDetectionPrint'
  },
  queryDetectionBaseList: {
    method: 'GET',
    url: '/bmMaterial/queryDetectionBaseList'
  },
  queryDetectionBaseListByReport: {
    method: 'GET',
    url: '/bmMaterial/queryDetectionBaseListByReport'
  },
  selectByDetectionNo: {
    method: 'GET',
    url: '/bmMaterial/selectByDetectionNo'
  },
  queryBmMaterialDetectionItem: {
    method: 'GET',
    url: '/bmMaterial/queryBmMaterialDetectionItem'
  },
  queryDetectionResult: {
    method: 'GET',
    url: '/bmMaterial/queryDetectionResult'
  },
  addbmMaterialDetectionItem: {
    method: 'POST',
    url: '/bmMaterial/addbmMaterialDetectionItem'
  },

  selectMaterialUidSize: {
    method: 'GET',
    url: '/bmMaterial/selectMaterialUidSize'
  },
  selectDetectionBaseUid: {
    method: 'GET',
    url: '/bmMaterial/selectDetectionBaseUid'
  },
  selectMaterialUid: {
    method: 'GET',
    url: '/bmMaterial/selectMaterialUid'
  },

  //采购selectState
  selectState: {
    method: 'GET',
    url: '/pcPurchaseDemand/selectState'
  },
  selectMaterialName: {
    method: 'GET',
    url: '/pcPurchaseDemand/selectMaterialName'
  },
  selectPpName: {
    method: 'GET',
    url: '/pcPurchaseDemand/selectPpName'
  },
  deletePmFactoryTrace: {
    method: 'DELETE',
    url: '/pcPurchaseDemand/deletePmFactoryTrace'
  },
  updatePmFactoryTrace: {
    method: 'PUT',
    url: '/pcPurchaseDemand/updatePmFactoryTrace'
  },

  addPmFactoryTrace: {
    method: 'POST',
    url: '/pcPurchaseDemand/addPmFactoryTrace'
  },
  selectPmFactoryTrace: {
    method: 'GET',
    url: '/pcPurchaseDemand/selectPmFactoryTrace'
  },
  savePcPurchasePlanBaseEx: {
    method: 'POST',
    url: '/pcPurchaseDemand/savePcPurchasePlanBaseEx'
  },

  //采购单
  selectPcPurchaseOrderBase: {
    method: 'GET',
    url: '/pcPurchaseDemand/selectPcPurchaseOrderBase'
  },
  addPcPurchaseOrderBase: {
    method: 'POST',
    url: '/pcPurchaseDemand/addPcPurchaseOrderBase'
  },
  updatePcPurchaseOrderBase: {
    method: 'PUT',
    url: '/pcPurchaseDemand/updatePcPurchaseOrderBase'
  },
  deletePcPurchaseOrderBase: {
    method: 'DELETE',
    url: '/pcPurchaseDemand/deletePcPurchaseOrderBase'
  },
  addPcPurchaseOrder: {
    method: 'POST',
    url: '/pcPurchaseDemand/addPcPurchaseOrder'
  },
  createPcPurchaseDemand: {
    method: 'GET',
    url: '/pcPurchaseDemand/createPcPurchaseDemand'
  },
  //到货单
  selectPcPurchaseArrivedOrder: {
    method: 'GET',
    url: '/pcPurchaseDemand/selectPcPurchaseArrivedOrder'
  },
  addPcPurchaseArrivedOrder: {
    method: 'POST',
    url: '/pcPurchaseDemand/addPcPurchaseArrivedOrder'
  },
  updatePcPurchaseArrivedOrder: {
    method: 'PUT',
    url: '/pcPurchaseDemand/updatePcPurchaseArrivedOrder'
  },
  deletePcPurchaseArrivedOrder: {
    method: 'DELETE',
    url: '/pcPurchaseDemand/deletePcPurchaseArrivedOrder'
  },
  //
  updateArriveCheck: {
    method: 'PUT',
    url: '/pcPurchaseDemand/updateArriveCheck'
  },
  updateReturnCheck: {
    method: 'PUT',
    url: '/pcPurchaseDemand/updateReturnCheck'
  },

  selectPcPurchasePlanBase: {
    method: 'GET',
    url: '/pcPurchaseDemand/selectPcPurchasePlanBase'
  },

  //selectPcPurchaseList
  selectPcPurchaseList: {
    method: 'GET',
    url: '/pcPurchaseDemand/selectPcPurchaseList'
  },
//
  queryStockOrderBaseList: {
    method: 'GET',
    url: '/storageOutBase/queryStockOrderBaseList'
  },
  addStockOrderBase: {
    method: 'POST',
    url: '/storageOutBase/addStockOrderBase'
  },
  updateStockOrderBase: {
    method: 'PUT',
    url: '/storageOutBase/updateStockOrderBase'
  },
  deleteStockOrderBase: {
    method: 'DELETE',
    url: '/storageOutBase/deleteStockOrderBase'
  },

  queryStockOrderList: {
    method: 'GET',
    url: '/storageOutBase/queryStockOrderList'
  },
  addStockOrder: {
    method: 'POST',
    url: '/storageOutBase/addStockOrder'
  },
  updateStockOrder: {
    method: 'PUT',
    url: '/storageOutBase/updateStockOrder'
  },
  deleteStockOrder: {
    method: 'DELETE',
    url: '/storageOutBase/deleteStockOrder'
  },
  //出库单
  queryKeysStorageOutOrderBase: {
    method: 'GET',
    url: '/storageOutBase/queryKeysStorageOutOrderBase'
  },
  addStorageOutOrderBase: {
    method: 'POST',
    url: '/storageOutBase/addStorageOutOrderBase'
  },
  updateStorageOutOrderBase: {
    method: 'PUT',
    url: '/storageOutBase/updateStorageOutOrderBase'
  },
  deleteStorageOutOrderBase: {
    method: 'DELETE',
    url: '/storageOutBase/deleteStorageOutOrderBase'
  },

  //出库单明细
  queryKeysStorageOutOrder: {
    method: 'GET',
    url: '/storageOutBase/queryKeysStorageOutOrder'
  },
  addStorageOutOrder: {
    method: 'POST',
    url: '/storageOutBase/addStorageOutOrderList'
  },
  updateStorageOutOrder: {
    method: 'PUT',
    url: '/storageOutBase/updateStorageOutOrder'
  },
  deleteStorageOutOrder: {
    method: 'DELETE',
    url: '/storageOutBase/deleteStorageOutOrder'
  },

  //质量
  queryRdProductPreApply: {
    method: 'GET',
    url: '/rdProductPreApply/queryRdProductPreApply'
  },
  queryProductPreApplyList: {
    method: 'GET',
    url: '/rdProductPreApply/queryProductPreApplyList'
  },

  selectPreApplyList: {
    method: 'GET',
    url: '/rdProductPreApply/selectPreApplyList'
  },
  addRdProductPreApply: {
    method: 'POST',
    url: '/rdProductPreApply/addRdProductPreApply'
  },

  addPreApplyTemplate: {
    method: 'POST',
    url: '/rdProductPreApply/addPreApplyTemplate'
  },
  updateRdProductPreApply: {
    method: 'PUT',
    url: '/rdProductPreApply/updateRdProductPreApply'
  },
  deleteRdProductPreApply: {
    method: 'DELETE',
    url: '/rdProductPreApply/deleteRdProductPreApply'
  },

//sysProductTrace
  addSysProductTrace: {
    method: 'POST',
    url: '/sysProductTrace/addSysProductTrace'
  },
  queryCommonBaeApi: {
    method: 'GET',
    url: '/sysProductTrace/queryCommonBaeApi'
  },
  queryCommonBaeApiPage: {
    method: 'GET',
    url: '/sysProductTrace/queryCommonBaeApiPage'
  },

  //addRdBomBasePrice
  addRdBomBasePrice: {
    method: 'POST',
    url: '/rdBomBase/addRdBomBasePrice'
  },

  selectRdBomBasePrice: {
    method: 'GET',
    url: '/rdBomBase/selectRdBomBasePrice'
  },
//rdProductColor
  queryKeysRdProductColor: {
    method: 'GET',
    url: '/rdProductColor/queryKeysRdProductColor'
  },
  queryProductSize: {
    method: 'GET',
    url: '/rdProductColor/queryProductSize'
  },
//addRdProductColorList
  addRdProductColorList: {
    method: 'POST',
    url: '/rdProductColor/addRdProductColorList'
  },

  deleteRdProductColor: {
    method: 'DELETE',
    url: '/rdProductColor/deleteRdProductColor'
  },
  //addRdBomMaterialList
  addRdBomMaterialList: {
    method: 'POST',
    url: '/rdBomBase/addRdBomMaterialList'
  },
  deleteBmMaterialBase: {
    method: 'DELETE',
    url: '/bmMaterial/deleteBmMaterialBase'
  },
}


export default manageApi
