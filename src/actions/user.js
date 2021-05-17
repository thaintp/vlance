import { CHANGE_INFORMATION, CHANGE_PASSWORD} from './types';
import Toast from 'utils/toast';

import UserService from 'services/user';

export const changeInfo = (info) => dispatch => {
  return UserService.changeInfo(info).then(data => {
    if (data?.status) {
      Toast.fire({
        icon: "success",
        title: "Thay đổi thông tin thành công",
      }); 
      dispatch({
        type: CHANGE_INFORMATION,
        payload: data
      })
    } else {
      Toast.fire({
        icon: "error",
        title: "Thay đổi thông tin thất bại",
      }); 
    }
  })
}

export const changePassword = (password) => dispatch => {
  return UserService.changePassword(password).then(data => {
    if (data.status) {
      Toast.fire({
        icon: "success",
        title: "Thay đổi mật khẩu thành công",
      }); 
      dispatch({
        type: CHANGE_PASSWORD,
        payload: data
      })
    } else {
      Toast.fire({
        icon: "error",
        title: "Thay đổi mật khẩu thất bại",
      }); 
    }
  })
}