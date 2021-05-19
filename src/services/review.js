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
    async post(job_id, message, rate) {
      return axios({
        method: "POST",
        url: "post_review",
        data: {job_id, message, rate}
      })
        .then(res => res.data)
        .catch(err => console.error(err));
    }
    async checkCanReview(job_id, user_id) {
      return await axios({
        method: "GET",
        url: 'check_review',
        params: {job_id, user_id}
      })
        .then((res) => res.data)
        .catch((err) => console.error(err));
    }
}

export default new ReviewService();