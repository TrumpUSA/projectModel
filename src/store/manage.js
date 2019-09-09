import {observable, action, computed, toJS} from 'mobx'

class ManageStore {

  @observable headerConfig = {

    DashboardManage: {
      name: '管理驾驶舱',
      pcItem: 0,
      mobileName: '企业',
      router: '/manage/dashBoardNew',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'appstore',
      groupFlag: false,
      children: [
        {
          name: '驾驶舱编辑',
          router: '/manage/dashBoardNew/edit'
        }
      ]
    },
    MyWork: {
      name: '我的工作',
      pcItem: 0,
      mobileName: '工作',
      router: '/',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'bulb',
      groupFlag: true,
      children: [
        {
          name: '研发管理',
          children: [
            {
              name: '物料管理',
              router: '/manage/rd/bm',
              intro: '物料建档、物料理化',
              icon: 'test'
            },
            {
              name: 'BOM管理',
              router: '/manage/rd/bommanage',
              intro: 'BOM',
              icon: 'test'
            },
            {
              name: '核价管理',
              router: '/manage/rd/checkpricelist',
              intro: 'BOM核价',
              icon: 'test'
            },
            {
              name: '工艺单管理',
              router: '/manage/rd/craftlist',
              intro: '工艺单制作、打印、查阅、外发',
              icon: 'test'
            },
            {
              name: '二次工艺管理',
              router: '/manage/rd/pplist',
              intro: '二次工艺任务列表',
              icon: 'test'
            },
            {
              name: '预处理管理',
              router: '/manage/rd/pre',
              intro: '预处理任务列表',
              icon: 'test'
            },
            {
              name: '裁剪管理',
              router: '/manage/rd/pplist',
              intro: '裁剪任务单',
              icon: 'test'
            },

          ]
        },
        {
          name: '计划管理',
          children: [
            {
              name: '生产计划管理',
              intro: '生产计划管理',
              router: '/manage/rd/ppmainlist',
              icon: 'test'
            },
            {
              name: '采购需求管理',
              router: '/manage/purchase/pcplan',
              intro: '采购计划单、预处理标准，采购单',
              icon: 'test',
            },

            {
              intro: '物料出库',
              icon: 'test',
              name: '配货单',
              router: '/manage/stock/outstock'
            },

            {
              intro: '补料采购，生产某产品少料补采购',
              icon: 'test',
              name: '补料申请单',
              router: '/manage/rd/product'
            },

          ]
        },
        {
          name: '采购管理',
          children: [
            {
              intro: '到货单申请',
              icon: 'test',
              name: '到货单',
              router: '/manage/purchase/aol'
            },
            {
              intro: '采购单、来自采购计划单',
              icon: 'test',
              name: '采购单',
              router: '/manage/purchase/pcorder'
            },

            {
              intro: '入库',
              icon: 'test',
              name: '入库单',
              router: '/manage/stock/instocktable'
            },
            {
              intro: '预处理申请单',
              icon: 'test',
              name: '预处理申请单',
              router: '/manage/purchase/supplier'
            },
            {
              intro: '理化异常、退货、会签',
              icon: 'test',
              name: '理化异常管理',
              router: '/manage/purchase/supplier'
            },
            {
              intro: '采购退货单',
              icon: 'test',
              name: '退货单',
              router: '/manage/purchase/pcreturnform'
            },
          ]
        },
        {
          name: '仓储管理',
          children: [
            {
              intro: '到货通知采购填报到货单',
              icon: 'test',
              name: '到货通知',
              router: '/manage/stock/notice'
            },

            {
              intro: '简介简介',
              icon: 'test',
              name: '仓库盘点',
              router: '/manage/stock'
            },
            {
              intro: '出入库任务单',
              icon: 'test',
              name: '出入库管理',
              router: '/manage/stock/instocktask'
            },
            {
              intro: '在途物料接收、退回',
              icon: 'test',
              name: '在途物料管理',
              router: '/manage/stock/outstocktask'
            }
          ]
        },
        {
          name: '质量管理',
          children: [
            {
              intro: '简介简介',
              icon: 'test',
              name: '产前样审核',
              router: '/manage/quality/pre'
            },
            {
              intro: '工厂现场日志',
              icon: 'test',
              name: '现场管理',
              router: '/manage/quality/xc'
            },
            {
              intro: '大货接收',
              icon: 'test',
              name: '大货接收',

              router: '/manage/quality/big'
            },
            {
              intro: '简介简介',
              icon: 'test',
              name: '大货返修',
              router: '/manage/quality/fx'
            },
            {
              intro: '简介简介',
              icon: 'test',
              name: '整改意见单',
// 款号，检查结果，时间，整改意见
              router: '/manage/quality/yj'
            }
          ]
        },
        {
          name: '理化管理',
          children: [
            {
              intro: '理化申请、采样理化、采购入库理化',
              icon: 'test',
              name: '理化申请',
              router: '/manage/rd/bm/detection'
            },
            {
              intro: '理化检测任务单',
              icon: 'test',
              name: '理化检测',
              router: '/manage/quality/task'
            },
            {
              intro: '查看理化报告、打印',
              icon: 'test',
              name: '理化报告',
              router: '/manage/quality/report'
            },
          ]
        },
        {
          name: '配置管理',
          children: [
            {
              intro: '产品相关参数、配置设置',
              icon: 'test',
              name: '产品参数配置',
              router: '/manage/SysManage/productdict'
            },
            {
              intro: '供应商信息',
              icon: 'test',
              name: '供应商管理',
              router: '/manage/purchase/supplier'
            },
            {
              intro: '产品大类、小类设置',
              icon: 'test',
              name: '产品种类配置',
              router: '/manage/SysManage/productcategory'
            },
            {
              intro: '业务综合配置',
              icon: 'test',
              name: '业务综合配置',
              router: '/manage/SysManage/businessConfig'
            },
            {
              intro: '季度设置、新季度开启',
              icon: 'test',
              name: '季度配置',
              router: '/manage/SysManage/season'
            },
            {
              intro: '物料种类设置',
              icon: 'test',
              name: '物料分类配置',
              router: '/manage/SysManage/materialcategory'
            },
            {
              intro: '物料理化项设置，参考值',
              icon: 'test',
              name: '物料理化知识库',
              router: '/manage/SysManage/materialknowledge'
            },
            // {
            //   intro: '颜色、规格字典管理',
            //   icon: 'test',
            //   name: '颜色&规格',
            //   router: '/manage/SysManage/colorsize'
            // },
            // {
            //   intro: '各种日志查询、历史问题追溯、分析',
            //   icon: 'test',
            //   name: '日志查询',
            //   router: '/manage/SysManage/log'
            // },

          ]
        },
        {
          name: '系统设置',
          children: [

            {
              intro: '研发产品列表、信息',
              icon: 'test',
              name: '产品管理',
              router: '/manage/rd/product'
            },
            {
              intro: '所有用户列表',
              icon: 'test',
              name: '用户管理',
              router: '/manage/SysManage/usermanage'
            },
            {
              intro: '角色定义、角色用户管理',
              icon: 'test',
              name: '角色管理',
              router: '/manage/SysManage/rolemanage'
            },
            // {
            //   intro: '各种日志查询、历史问题追溯、分析',
            //   icon: 'test',
            //   name: '日志查询',
            //   router: '/manage/SysManage/log'
            // },
            {
              intro: '流程引擎相关信息（技术信息），不需太多关注',
              icon: 'test',
              name: '流程管理',
              router: '/manage/SysManage/bpmmanage'
            },

          ]
        },
        {
          name: '在线帮助',
          children: [
            {
              intro: '产品使用说明、遇到问题解决方案知识库',
              icon: 'test',
              name: '使用帮助',
              router: '/manage/SysManage/intro'
            },
            {
              intro: '联系方式',
              icon: 'test',
              name: '联系方式',
              router: '/manage/SysManage/introinfo'
            },
            {
              intro: '版本更新日志',
              icon: 'test',
              name: '版本日志',
              router: '/manage/SysManage/ver'
            },
          ]
        },
      ]
    },
    MyMessage: {
      name: '我的消息',
      pcItem: 0,
      router: '/manage/myworkPlatform/process',
      mobileRouter: '/manage/myworkPlatform/process',
      mobileName: '查询',
      icon: ['fab', 'product-hunt'],
      mobileIcon: 'pie-chart',
      groupFlag: false,
      children: []
    },
    MyworkPlatform: {
      name: '我的设置',
      pcItem: 0,
      router: '/manage/myworkPlatform/function01',
      mobileRouter: '/manage/mobile/myworkPlatform',
      mobileName: '我的',
      icon: ['fab', 'product-hunt'],
      mobileIcon: 'setting',
      groupFlag: false,
      children: []
    },
    RDManage: {
      name: '研发管理',
      pcItem: 1,
      mobileName: '研发',
      router: '/manage/rd/product',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'bulb',
      children: [
        {
          name: '物料档案管理',
          router: '/manage/rd/bm'
        },
        {
          name: 'BOM管理',
          router: '/manage/rd/bommanage'
        },
        {
          name: '核价管理',
          router: '/manage/rd/pplist'
        },
        {
          name: '二次工艺管理',
          router: '/manage/rd/pplist'
        },
        {
          name: '预处理管理',
          router: '/manage/rd/pplist'
        },
        {
          name: '裁剪管理',
          router: '/manage/rd/pplist'
        },
        {
          name: '工艺单管理',
          router: '/manage/rd/craftlist'
        },

      ]
    },
    orderManage: {
      name: '计划管理',
      pcItem: 1,
      mobileName: '企业',
      router: '/manage/rd',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'appstore',
      children: [{
        name: '生产计划单',
        router: '/manage/rd/ppmainlist'
      },
        {
          name: '采购计划单',
          router: '/manage/rd/product'
        },
        {
          name: '物料配发',
          router: '/manage/rd/product'
        },
        {
          name: '出库单',
          router: '/manage/rd/product'
        },
        {
          name: '入库单在（清点那）',
          router: '/manage/rd/product'
        },
        {
          name: '补料申请单（走采购计划单通道）',
          router: '/manage/rd/product'
        },
        {
          name: '退货单',
          router: '/manage/purchase/pcreturnform'
        },
      ]
    },
    PurchaseManage: {
      name: '采购管理',
      pcItem: 1,
      mobileName: '采购',
      router: '/manage/purchase/pcrequest',
      icon: ['fas', 'store-alt'],
      mobileIcon: 'star',
      children: [
        {
          name: '到货单',
          router: '/manage/purchase/pcrequest'
        },
        {
          name: '采购单（来自采购计划单）',
          router: '/manage/purchase/pcform'
        },

        {
          name: '供应商管理',
          router: '/manage/purchase/supplier'
        },
        {
          name: '预处理申请单',
          router: '/manage/purchase/supplier'
        },
        {
          name: '理化异常管理',
          router: '/manage/purchase/supplier'
        }
      ]
    },
    OutInManage: {
      name: '仓储管理',
      pcItem: 1,
      mobileName: '仓储',
      router: '/manage/stock',
      icon: ['fas', 'warehouse'],
      mobileIcon: 'bank',
      children: [
        {
          name: '仓库盘点（存货清点）',
          router: '/manage/stock'
        },
        {
          name: '出入库管理',
          router: '/manage/stock/instocktask'
        },
        {
          name: '在途物料管理（在途物料接收、退回）',
          router: '/manage/stock/outstocktask'
        }
      ]
    },
    QualityManage: {
      name: '质量管理',
      pcItem: 1,
      mobileName: '质量',
      router: '/manage/quality',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'safety',
      children: [
        {
          name: '产前样审核',
          router: '/manage/quality/materiald'
        },
        {
          name: '现场管理',
          // 标题，内容、时间、拍照、签字
          router: '/manage/quality/productd'
        },
        {
          name: '大货接收',

          router: '/manage/quality/productd'
        },
        {
          name: '大货返修',
//
          router: '/manage/quality/productd'
        },
        {
          name: '整改意见单',
// 款号，检查结果，时间，整改意见
          router: '/manage/quality/productd'
        }
      ]
    },
    DetectionManage: {
      name: '理化管理',
      pcItem: 1,
      mobileName: '企业',
      router: '/manage/rd',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'appstore',
      children: [{
        name: '理化申请',
        router: '/manage/rd/product'
      },
        {
          name: '理化检测',
          router: '/manage/rd/product'
        },
        {
          name: '理化报告',
          router: '/manage/rd/product'
        },
      ]
    },
    SysSetting: {
      name: '系统管理',
      pcItem: 1,
      mobileName: '仓储',
      router: '/manage/SysManage',
      icon: ['fas', 'warehouse'],
      mobileIcon: 'bank',
      groupFlag: false,
      children: [
        {
          name: '用户管理',
          router: '/manage/SysManage/usermanage'
        },
        {
          name: '产品管理',
          router: '/manage/rd/product'
        },
        {
          name: '产品参数设置',
          router: '/manage/SysManage/productdict'
        },
        {
          name: '角色管理',
          router: '/manage/SysManage/rolemanage'
        },
        {
          name: '季度设置',
          router: '#'
        },
        // {
        //   name: '日志查询',
        //   router: '/manage/SysManage/log'
        // },
        {
          //TOD 产品编码扫二维码来的
          name: '扫二维码测试',
          router: '/manage/Signsture'
        },
        {
          name: '流程管理',
          router: '/manage/SysManage/bpmmanage'
        },
        {
          name: 'TableTest',
          router: '/manage/TableTest'
        },
        {
          name: '打印&签名测试',
          router: '/manage/printTest'
        }
      ]
    },


    MobileItem1: {
      name: '移动PC模式五组',
      pcItem: 5,
      mobileName: '工作',
      router: '/',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'bulb',
      groupFlag: false,
      children: [
        {
          name: '物料档案管理',
          router: '/manage/rd/bm',
          intro: '简介简介',
          icon: 'test'
        },
        {
          name: 'BOM管理',
          router: '/manage/rd/bommanage',
          intro: '简介简介',
          icon: 'test'
        },
        {
          name: '核价管理',
          router: '/manage/rd/checkpricelist',
          intro: '简介简介',
          icon: 'test'
        },
        {
          name: '二次工艺管理',
          router: '/manage/rd/pplist',
          intro: '简介简介',
          icon: 'test'
        },
        {
          name: '预处理管理',
          router: '/manage/rd/pplist',
          intro: '简介简介',
          icon: 'test'
        },
        {
          name: '裁剪管理',
          router: '/manage/rd/pplist',
          intro: '简介简介',
          icon: 'test'
        },
        {
          name: '工艺单管理',
          router: '/manage/rd/craftlist',
          intro: '简介简介',
          icon: 'test'
        }
      ]
    },

    MobileItem2: {
      name: '移动PC模式五组',
      pcItem: 5,
      mobileName: '工作',
      router: '/',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'bulb',
      groupFlag: false,
      children: [
        {
          name: '生产计划单',
          intro: '简介简介',
          router: '/manage/rd/ppmainlist',
          icon: 'test'
        },
        {
          name: '采购计划单',
          router: '/manage/rd/product',
          intro: '简介简介',
          icon: 'test',
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '物料配发',
          router: '/manage/rd/product'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '出库单',
          router: '/manage/rd/product'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '入库单在（清点那）',
          router: '/manage/rd/product'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '补料申请单（走采购计划单通道）',
          router: '/manage/rd/product'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '退货单',
          router: '/manage/purchase/pcreturnform'
        },
      ]
    },

    MobileItem3: {
      name: '移动PC模式五组',
      pcItem: 5,
      mobileName: '工作',
      router: '/',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'bulb',
      groupFlag: false,
      children: [
        {
          intro: '简介简介',
          icon: 'test',
          name: '到货单',
          router: '/manage/purchase/pcrequest'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '采购单（来自采购计划单）',
          router: '/manage/purchase/pcform'
        },

        {
          intro: '简介简介',
          icon: 'test',
          name: '供应商管理',
          router: '/manage/purchase/supplier'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '预处理申请单',
          router: '/manage/purchase/supplier'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '理化异常管理',
          router: '/manage/purchase/supplier'
        }
      ]
    },

    MobileItem4: {
      name: '移动PC模式五组',
      pcItem: 5,
      mobileName: '工作',
      router: '/',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'bulb',
      groupFlag: false,
      children: [
        {
          intro: '简介简介',
          icon: 'test',
          name: '仓库盘点（存货清点）',
          router: '/manage/stock'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '出入库管理',
          router: '/manage/stock/instocktask'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '在途物料管理（在途物料接收、退回）',
          router: '/manage/stock/outstocktask'
        }
      ]
    },

    MobileItem5: {
      name: '移动PC模式五组',
      pcItem: 5,
      mobileName: '工作',
      router: '/',
      icon: ['fas', 'layer-group'],
      mobileIcon: 'bulb',
      groupFlag: false,
      children: [
        {
          intro: '简介简介',
          icon: 'test',
          name: '产前样审核',
          router: '/manage/quality/materiald'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '现场管理',
          router: '/manage/quality/productd'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '大货接收',

          router: '/manage/quality/productd'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '大货返修',
          router: '/manage/quality/productd'
        },
        {
          intro: '简介简介',
          icon: 'test',
          name: '整改意见单',
          router: '/manage/quality/productd'
        }
      ]
    },

  };

  @observable selectHeader = 'MyWork';

  @action
  setSelectHeader(selectHeader) {
    this.selectHeader = selectHeader;
  }

  @computed
  get _headerConfig() {
    return toJS(this.headerConfig);
  }

  @computed
  get _selectHeader() {
    return toJS(this.headerConfig[this.selectHeader]);
  }
}


export default ManageStore
