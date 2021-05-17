import axios from "utils/axios";

class UserService {
  async getByID(id) {
    return await axios({
      method: "GET",
      url: `user/${id}`,
    }).then(res => res.data).catch(err => console.error(err));
  }
  async get(filter = {}) {
    return axios({
      method: "GET",
      url: "user",
      params: filter
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  }
}

export default new UserService();