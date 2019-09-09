const Label = {
  vesion: '版本：v1.6.2',

  msg_type_error: 'error',
  msg_type_info: 'info',
  msg_type_warning: 'warning',
  msg_type_success: 'success',

  msg_title_error: '错误提示',
  msg_title_info: '信息提示',
  msg_title_warning: '警告',
  msg_title_success: '成功',

};


const tips = {
  please_input_name: '请输入名称',
  please_input_value: '不能为空，请输入',
  please_select_value: '不能为空，请选择',
  please_chioce_user: '请选择用户',
  please_choice_beginTime: '请选择开始时间',
  please_choice_endTime: '请选择结束时间',
  please_choice_oneRow: '请选择一行',
  please_choice_type: '请选择分类',
  please_choice_group: '请选择季度',
};
const Const_values = {
  page_size: 20,

};
const Color = {
  white: '#fff',
  black: '#000',

}
const stateColor = {
  404: "#f50",
  500: "#f50",
  1: "#108ee9",
  2: "#87d068",
  0: "#2db7f5",
  100: "#87d068",
};
const stateName = {
  404: "已删除",
  500: "审批驳回",
  1: "审批中",
  2: "审批通过",
  0: "提交审批",
  100: "已下线",
};
const submitState = {
  404: "已删除",
  500: "已拒绝",
  1: "已提交",
  2: "已通过",
  0: "新建",
  100: "已下线",
};
const reportState = {
  404: "已删除",
  500: "报告审核不通过",
  1: "报告审核中",
  2: "已出报告",
  0: "未提交报告",
  100: "已下线",
};
const productSize = [
  {
    'key': 1, 'value': 'M', 'info': 'A(82)'
  },
  {
    'key': 2, 'value': 'S', 'info': 'A(82)'
  },
  {
    'key': 3, 'value': 'L', 'info': 'A(82)'
  },
  {
    'key': 4, 'value': 'XL', 'info': 'A(82)'
  },
  {
    'key': 5, 'value': 'XXL', 'info': 'A(82)'
  }
]

export {
  Label,
  Color,
  tips,
  stateColor,
  stateName,
  productSize,
  submitState,
  reportState,
}
