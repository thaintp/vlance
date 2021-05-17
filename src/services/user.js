import axios from "utils/axios";

class UserService {
  async getByID(id) {
    return await axios({
      method: "GET",
      url: `user/${id}`,
    }).then(res => res.data).catch(err => console.error(err));
  }
  async get(filter = {}) {
    return await axios({
      method: "GET",
      url: "user",
      params: filter
    })
      .then(res => res.data)
      .catch(err => console.error(err));
    }
    async changeInfo(info) {
      return await axios({
        method: "POST",
        url: "change_information",
        data: info
      })
      .then(res => res.data)
      .catch(err => console.error(err));
    }
    async changePassword(password) {
      return await axios({
        method: "POST",
        url: "change_password",
        data: password
      })
      .then(res => res.data)
      .catch(err => console.error(err));
    }
}

export default new UserService();