/**
* 采购API
* @author bkhao
* @date 2019-04-26
*/
const purchaseApi = {

	addBmProviderBase: {
		method: 'POST',
		url: '/bmProviderBase/addBmProviderBase'
  },
  queryKeysBmProviderBase: {
		method: 'GET',
		url: '/bmProviderBase/queryKeysBmProviderBase'
	},
  updateBmProviderBase: {
		method: 'PUT',
		url: '/bmProviderBase/updateBmProviderBase'
	},

}


export default purchaseApi
