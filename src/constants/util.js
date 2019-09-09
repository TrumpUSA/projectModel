// import printJS from 'print-js'

const colors = [
  '#ff7875',
  '#ff7a45',
  '#ffa940',
  '#ffc53d',
  '#ffec3d',
  '#a0d911',
  '#52c41a',
  '#13c2c2',
  '#1890ff',
  '#597ef7'
];

const getUserInfo = (key) => {
  let userInfo = window.localStorage.getItem('userInfo') || "{}";
  // console.log(userInfo)
  userInfo = JSON.parse(userInfo);
  if (key) {
    return userInfo[key] || '';
  }

  return userInfo;
}

const getRandomColor = () => {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

// const Print = (html = '', type = 'raw-html', style = '') => {
//   return printJS({
//     printable: html,
//     type: type,
//     style: style
//   })
// }

const packageCraftData = (data) => {
  let sizeTemplate = ``;
  let fuliaoTemplate = ``;
  let imageTemplate = ``;
  Array.isArray(data.sizeTable) && data.sizeTable.forEach(element => {
    sizeTemplate += `<tr>
    <td colspan="2">${element.buweiName || ''}</td>
    <td>${element.sizeS || ''}</td>
    <td>${element.sizeM || ''}</td>
    <td>${element.sizeL || ''}</td>
    <td>${element.sizeXl || ''}</td>
    <td>${element.sizeXxl || ''}</td>
    <td>${element.sizeXxxl || ''}</td>
    <td colspan="2">${element.sizeRange || ''}</td>
  </tr>`
  });
  Array.isArray(data.fuliaoTable) && data.fuliaoTable.forEach(element => {
    fuliaoTemplate += `<tr>
    <td colspan="2">${element.fuliaodanTopic}</td>
    <td colspan="2">${element.fuliaoName}</td>
    <td>${element.danhaoUnit}</td>
    <td colspan="3">${element.weizhiPositon}</td>
    <td colspan="2">${element.beizhuComment}</td>
  </tr>`
  });
  Array.isArray(data.base64Array) && data.base64Array.forEach(element => {
    imageTemplate += `<img class="img-base64" src="data:image/png;base64,${element}" alt=""/>`
  });
  let time = data.headerTable
    && data.headerTable.createDate
    && data.headerTable.createDate.substring(0, 10).replace(/\-/g, ".");

  let template = `<table class="craft-table">
    <thead>
      <tr>
        <th class="borderN" colspan="10">xxx有限公司工艺单</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>品名</td>
        <td>${data.headerTable.pinMing}</td>
        <td>款号</td>
        <td>${data.headerTable.kuanHao}</td>
        <td>样衣颜色</td>
        <td>${data.headerTable.yangyiYanse}</td>
        <td>样衣尺码</td>
        <td>${data.headerTable.yangyiCima}</td>
        <td>制单时间</td>
        <td>${time}</td>
      </tr>
      <tr>
        <td>设计师</td>
        <td>${data.headerTable.desingerUser}</td>
        <td>版师</td>
        <td>${data.headerTable.banShiUser}</td>
        <td>放码</td>
        <td>${data.headerTable.fangMaUser}</td>
        <td>样衣工</td>
        <td>${data.headerTable.yangyigongUser}</td>
        <td>工艺师</td>
        <td>${data.headerTable.gongyishiUser}</td>
      </tr>
      <tr>
        <td colspan="10">成衣尺寸表</td>
      </tr>
      <tr>
        <td colspan="2">部位名称</td>
        <td>S</td>
        <td>M</td>
        <td>L</td>
        <td>XL</td>
        <td>XXL</td>
        <td>XXXL</td>
        <td colspan="2">正负公差</td>
      </tr>
      ${sizeTemplate}
      <tr>
        <td colspan="10">辅料单</td>
      </tr>
      <tr>
        <td colspan="2">辅料单</td>
        <td colspan="2">辅料名称</td>
        <td>单耗</td>
        <td colspan="3">位置</td>
        <td colspan="2">备注</td>
      </tr>
      ${fuliaoTemplate}
    </tbody>
  </table>
  <div class="img-list">
    ${imageTemplate}
  </div>
  <table class="craft-table">
    <thead>
      <tr>
        <th class="borderN" colspan="10">xxx有限公司工艺单</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="10">裁床工艺要求</td>
      </tr>
      <tr>
        <td>裁片信息</td>
        <td colspan="9">${data.bedTable.caipianInfo}</td>
      </tr>
      <tr>
        <td rowspan="2">裁床工艺要求</td>
        <td>面布</td>
        <td colspan="8">${data.bedTable.requireMianbu}</td>
      </tr>
      <tr>
        <td>里布</td>
        <td colspan="8">${data.bedTable.requireLiBu}</td>
      </tr>
      <tr>
        <td>注意事项</td>
        <td colspan="9">${data.bedTable.attentionComment}</td>
      </tr>
      <tr>
        <td colspan="10">车间工艺要求</td>
      </tr>
      <tr>
        <td>针号</td>
        <td>${data.shopTable.zhenHao}</td>
        <td>平车针距</td>
        <td>${data.shopTable.pingcheZhenju}</td>
        <td>拷边针距</td>
        <td>${data.shopTable.kaobianZhenju}</td>
        <td>缝位：${data.shopTable.fengWei}</td>
        <td>点样位：${data.shopTable.dianweiYang}</td>
        <td>实样数</td>
        <td>${data.shopTable.shiyangShu}</td>
      </tr>
      <tr>
        <td>粘衬、画修、包烫</td>
        <td colspan="9">${data.shopTable.niancunBaotang}</td>
      </tr>
      <tr>
        <td>领子</td>
        <td colspan="9">${data.shopTable.lingZi}</td>
      </tr>
      <tr>
        <td>袖子</td>
        <td colspan="9">${data.shopTable.xiuzi}</td>
      </tr>
      <tr>
        <td>前片、口袋、后片、拉链</td>
        <td colspan="9">${data.shopTable.qianpianLalian}</td>
      </tr>
      <tr>
        <td>里布</td>
        <td colspan="9">${data.shopTable.liBu}</td>
      </tr>
      <tr>
        <td>注意事项</td>
        <td colspan="9">${data.shopTable.attentionComment}</td>
      </tr>
      <tr>
        <td colspan="10">后道工艺要求</td>
      </tr>
      <tr>
        <td>敲扣</td>
        <td colspan="9">${data.lastTable.qiaoKou}</td>
      </tr>
      <tr>
        <td>套结</td>
        <td colspan="9">${data.lastTable.taoJie}</td>
      </tr>
      <tr>
        <td>大烫</td>
        <td colspan="9">${data.lastTable.daTang}</td>
      </tr>
      <tr>
        <td>包装</td>
        <td colspan="9">${data.lastTable.baoZhuang}</td>
      </tr>
      <tr>
        <td>气眼</td>
        <td colspan="9">${data.lastTable.qiYan}</td>
      </tr>
    </tbody>
  </table>`
  return template;
}

export {
  getUserInfo,
  // Print,
  packageCraftData,
  getRandomColor
}
