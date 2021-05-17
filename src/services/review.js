import axios from 'utils/axios';

class ReviewService {
  async get(filter = {}) {
    return axios({
      method: "GET",
      url: "review",
      params: filter
    })
      .then(res => res.data)
      .catch(err => console.error(err));
  }
}

export default new ReviewService();