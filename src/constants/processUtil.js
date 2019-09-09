import ask from "../lib/ask";
import qs from 'qs'


const startProcess = async (uid, bizName, bizType, bizTable, bizPkName, uri, info, callback) => {

  try {
    let {data, flag} = await ask('startProcess', {
      data: qs.stringify({
        bizId: uid,
        bizName: bizName,
        bizType: bizType,
        bizTable: bizTable,
        callBack: uri,
        info: info,
        bizPkName: bizPkName,
      })
    });
    callback(flag);
  } catch (error) {
    console.log(error);
  }
}

export {
  startProcess,
}
