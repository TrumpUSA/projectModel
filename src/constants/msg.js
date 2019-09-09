import {notification} from "antd";

const  openNotification = (type, title, msg) => {
  notification[type]({
    message: title,
    description: msg,
    duration: 4.5,
  });
};

export {
  openNotification
}
