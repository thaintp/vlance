import axios from 'utils/axios';

class CategoryService {
  async get(filter = {}) {
    return axios({
      method: "GET",
      url: "category",
      params: filter
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  }
}

export default new CategoryService();