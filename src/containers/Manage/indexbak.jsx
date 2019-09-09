import React, {Component, Fragment} from 'react'
import Loadable from 'react-loadable'
import {Switch, Route} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import Media from 'react-media'
import PageHeader from './PageHeader'
import MobileHeader from './Mobile/MobileHeader'
import MobileFooter from './Mobile/MobileFooter'
import DefaultFooter from '../../components/DefaultFooter'


import './style.scss'

const ProductPlanList = Loadable({
  loader: () => import('../RDManage/ProductPlanList'),
  loading: () => null
})
const Craft = Loadable({
  loader: () => import('../RDManage/CraftV2'),
  loading: () => null
})
const ProductManage = Loadable({
  loader: () => import('../RDManage/ProductListV2'),
  loading: () => null
})
const BOM = Loadable({
  loader: () => import('../RDManage/BOMV2'),
  loading: () => null
})
const BmMaterialManage = Loadable({
  loader: () => import('../RDManage/MaterialListV2'),
  loading: () => null
})
const DetectionApply = Loadable({
  loader: () => import('../QualityManage/DetectionApply'),
  loading: () => null
})


const SupplierManage = Loadable({
  loader: () => import('../PurchaseManage/SupplierManage'),
  loading: () => null
})

const MyworkPlatform = Loadable({
  loader: () => import('../MyworkPlatform'),
  loading: () => null
})
const WorkPlatformSidebar = Loadable({
  loader: () => import('../MyworkPlatform/WorkPlatformSidebar'),
  loading: () => null
})
const BPMManage = Loadable({
  loader: () => import('../SysManage/BPMManage'),
  loading: () => null
})
const BPMBizFlow = Loadable({
  loader: () => import('../SysManage/BPMBizFlow'),
  loading: () => null
})
const UserManage = Loadable({
  loader: () => import('../SysManage/UserManageV2'),
  loading: () => null
})
const PCOrder = Loadable({
  loader: () => import('../PurchaseManage/PCOrder'),
  loading: () => null
})
const PCPlanOrder = Loadable({
  loader: () => import('../PurchaseManage/PCPlanOrderV2'),
  loading: () => null
})
//ArrivedOrderList
const ArrivedOrderList = Loadable({
  loader: () => import('../PurchaseManage/ArrivedOrderList'),
  loading: () => null
})
const ArrivedOrder = Loadable({
  loader: () => import('../PurchaseManage/ArrivedOrder'),
  loading: () => null
})
const InStockOrder = Loadable({
  loader: () => import('../StockManage/InStockOrder'),
  loading: () => null
})
const InStockTable = Loadable({
  loader: () => import('../StockManage/InStockTable'),
  loading: () => null
})
//OutStockOrder
const OutStockOrder = Loadable({
  loader: () => import('../StockManage/OutStockOrder'),
  loading: () => null
})

const OutStockTable = Loadable({
  loader: () => import('../StockManage/OutStockTable'),
  loading: () => null
})
//ArrivedNotice
const ArrivedNotice = Loadable({
  loader: () => import('../StockManage/ArrivedNotice'),
  loading: () => null
})
const PreProductApply = Loadable({
  loader: () => import('../QualityManage/PreProductApplyV2'),
  loading: () => null
})

const BigGoods = Loadable({
  loader: () => import('../QualityManage/BigGoodsReceive/indexV2'),
  loading: () => null
})


const FX = Loadable({
  loader: () => import('../QualityManage/BigGoodsFanXiu'),
  loading: () => null
})
const FXTable = Loadable({
  loader: () => import('../QualityManage/BigGoodsFanXiu/PreTable'),
  loading: () => null
})
const YJ = Loadable({
  loader: () => import('../QualityManage/ZhengGaiYJ'),
  loading: () => null
})


const XianChangManage = Loadable({
  loader: () => import('../QualityManage/XianchangManageV2'),
  loading: () => null
})
const DetectionTask = Loadable({
  loader: () => import('../QualityManage/DetectionTask'),
  loading: () => null
})
//
const DetectionExceptionMgr = Loadable({
  loader: () => import('../QualityManage/DetectionExceptionMgr'),
  loading: () => null
})
const DetectionReportList = Loadable({
  loader: () => import('../QualityManage/DetectionReportView/ReportViewTabs'),
  loading: () => null
})
const DetectionReportView = Loadable({
  loader: () => import('../QualityManage/DetectionReportView/ReportPDF'),
  loading: () => null
})
const RoleManage = Loadable({
  loader: () => import('../SysManage/RoleManage'),
  loading: () => null
})
// const DashBoard = Loadable({
//   loader: () => import('../DashBoard'),
//   loading: () => null
// })
// const DashBoardEdit = Loadable({
//   loader: () => import('../DashBoard/DashBoardEdit'),
//   loading: () => null
// })
const DashBoardNew = Loadable({
  loader: () => import('../DashBoardNew'),
  loading: () => null
})
const DashBoardEditNew = Loadable({
  loader: () => import('../DashBoardNew/DashboardEdit'),
  loading: () => null
})
const BOMManage = Loadable({
  loader: () => import('../RDManage/BOMList'),
  loading: () => null
})
const PreManage = Loadable({
  loader: () => import('../RDManage/PreManage'),
  loading: () => null
})
const CraftList = Loadable({
  loader: () => import('../RDManage/CraftList'),
  loading: () => null
})
const PPMainList = Loadable({
  loader: () => import('../RDManage/PPMainListV2'),
  loading: () => null
})
const PPMainOrder = Loadable({
  loader: () => import('../RDManage/PPMainOrderV2'),
  loading: () => null
})
const CheckPriceList = Loadable({
  loader: () => import('../RDManage/CheckPriceList'),
  loading: () => null
})
const CheckPrice = Loadable({
  loader: () => import('../RDManage/CheckPriceV2'),
  loading: () => null
})
const BizLogInfoQuery = Loadable({
  loader: () => import('../SysManage/BizLogInfoQuery'),
  loading: () => null
})
const ProductDict = Loadable({
  loader: () => import('../SysManage/ProductDictV2/indexV2'),
  loading: () => null
})
const MaterialSeason = Loadable({
  loader: () => import('../SysManage/MaterialSeason'),
  loading: () => null
})
const ProductCategory = Loadable({
  loader: () => import('../SysManage/ProductCategoryV5'),
  loading: () => null
})
//MaterialCategory
const MaterialCategory = Loadable({
  loader: () => import('../SysManage/MaterialCategory'),
  loading: () => null
})
const MaterialKnowledge = Loadable({
  loader: () => import('../SysManage/MaterialKnowledge'),
  loading: () => null
})
const ColorSize = Loadable({
  loader: () => import('../SysManage/ColorSize'),
  loading: () => null
})
const Intro = Loadable({
  loader: () => import('../SysManage/SysIntro'),
  loading: () => null
})
const IntroInfo = Loadable({
  loader: () => import('../SysManage/SysIntroInfo'),
  loading: () => null
})
const BusinessConfig = Loadable({
  loader: () => import('../SysManage/BusinessConfig'),
  loading: () => null
})

const Version = Loadable({
  loader: () => import('../SysManage/VersionLog'),
  loading: () => null
})
const DataManage = Loadable({
  loader: () => import('../SysManage/DataManage'),
  loading: () => null
})
const SysMenu = Loadable({
  loader: () => import('../SysManage/SysMenu'),
  loading: () => null
})

@inject('defaultStore')
@observer
class Manage extends Component {


  render() {
    return (
      <div className="manage">
        <Media query="(max-width: 750px)">
          {matches =>
            matches ? (
              <MobileHeader/>
            ) : (
              <PageHeader/>
            )
          }
        </Media>
        <main>
          <Switch>

            {/*<Route exact path="/manage/dashBoard" component={DashBoard}></Route>*/}
            {/*<Route exact path="/manage/dashBoard/edit" component={DashBoardEdit}></Route>*/}
            <Route exact path="/manage/dashBoardNew" component={DashBoardNew}></Route>
            <Route exact path="/manage/dashBoardNew/edit" component={DashBoardEditNew}></Route>

            <Route exact path="/manage/rd/bommanage" component={BOMManage}></Route>
            <Route exact path="/manage/rd/pre" component={PreManage}></Route>
            <Route exact path="/manage/rd/ppmainlist" component={PPMainList}></Route>
            <Route exact path="/manage/rd/ppmainOrder/:uid/:ppName" component={PPMainOrder}></Route>
            <Route exact path="/manage/rd/pplist" component={ProductPlanList}></Route>
            <Route exact path="/manage/rd/product" component={ProductManage}></Route>
            <Route exact path="/manage/rd/bm" component={BmMaterialManage}></Route>
            <Route exact path="/manage/rd/craftlist" component={CraftList}></Route>
            <Route exact path="/manage/rd/craft/:productUid" component={Craft}></Route>
            <Route exact path="/manage/rd/bom/:productUid" component={BOM}></Route>
            <Route exact path="/manage/rd/checkpricelist" component={CheckPriceList}></Route>
            <Route exact path="/manage/rd/checkprice/:productUid" component={CheckPrice}></Route>

            <Route exact path="/manage/purchase/pcplan" component={PCPlanOrder}></Route>
            <Route exact path="/manage/purchase/aol" component={ArrivedOrderList}></Route>
            <Route exact path="/manage/purchase/ao/:purchaseNo/:sUid" component={ArrivedOrder}></Route>
            <Route exact path="/manage/purchase/pcorder" component={PCOrder}></Route>
            <Route exact path="/manage/purchase/supplier" component={SupplierManage}></Route>


            <Route exact path="/manage/stock/instockorder/:purchaseNo" component={InStockOrder}></Route>
            <Route exact path="/manage/stock/instocktable" component={InStockTable}></Route>
            <Route exact path="/manage/stock/outstock" component={OutStockOrder}></Route>
            <Route exact path="/manage/stock/outstocktable/:uid" component={OutStockTable}></Route>
            <Route exact path="/manage/stock/notice" component={ArrivedNotice}></Route>

            <Route exact path="/manage/quality/pre" component={PreProductApply}></Route>
            <Route exact path="/manage/quality/big" component={BigGoods}></Route>
            <Route exact path="/manage/quality/fx" component={FX}></Route>
            <Route exact path="/manage/quality/fxtable/:productUid/:productNo" component={FXTable}></Route>
            <Route exact path="/manage/quality/yj" component={YJ}></Route>
            <Route exact path="/manage/rd/bm/detection" component={DetectionApply}></Route>
            <Route exact path="/manage/quality/xc" component={XianChangManage}></Route>
            <Route exact path="/manage/quality/task" component={DetectionTask}></Route>
            <Route exact path="/manage/quality/task/:detectionNo" component={DetectionTask}></Route>
            <Route exact path="/manage/quality/report" component={DetectionReportList}></Route>
            <Route exact path="/manage/quality/reportview/:uid/:groupUid" component={DetectionReportView}></Route>
            <Route exact path="/manage/quality/dem" component={DetectionExceptionMgr}></Route>
            <Route path="/manage/myworkPlatform" component={MyworkPlatform}></Route>
            <Route exact path="/manage/mobile/myworkPlatform" component={WorkPlatformSidebar}></Route>

            <Route exact path="/manage/SysManage/bpmmanage" component={BPMManage}></Route>
            <Route exact path="/manage/SysManage/bpmbizflow/:uid" component={BPMBizFlow}></Route>
            <Route exact path="/manage/SysManage/usermanage" component={UserManage}></Route>
            <Route exact path="/manage/SysManage/rolemanage" component={RoleManage}></Route>
            <Route exact path="/manage/SysManage/log" component={BizLogInfoQuery}></Route>
            <Route exact path="/manage/SysManage/productdict" component={ProductDict}></Route>
            <Route exact path="/manage/SysManage/productcategory" component={ProductCategory}></Route>
            <Route exact path="/manage/SysManage/season" component={MaterialSeason}></Route>
            <Route exact path="/manage/SysManage/materialcategory" component={MaterialCategory}></Route>
            <Route exact path="/manage/SysManage/materialknowledge" component={MaterialKnowledge}></Route>
            <Route exact path="/manage/SysManage/colorsize" component={ColorSize}></Route>
            <Route exact path="/manage/SysManage/intro" component={Intro}></Route>
            <Route exact path="/manage/SysManage/introinfo" component={IntroInfo}></Route>
            <Route exact path="/manage/SysManage/businessConfig" component={BusinessConfig}></Route>
            <Route exact path="/manage/SysManage/ver" component={Version}></Route>
            <Route exact path="/manage/rd/menu" component={SysMenu}></Route>
            <Route exact path="/manage/SysManage/datamanage" component={DataManage}></Route>

          </Switch>
        </main>
        <Media query="(max-width: 750px)">
          {matches =>
            matches ? (
              <Fragment>
                <div style={{height: '50px'}}></div>
                <MobileFooter/>
              </Fragment>
            ) : <DefaultFooter/>
          }
        </Media>
      </div>
    )
  }
}

export default Manage
