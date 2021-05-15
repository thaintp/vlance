import axios from "utils/axios";

class OfferService {
  async make(job_id, balance, expect_day, phone, email, exp_description, step_description) {
    return await axios({
      method: "POST",
      url: "/offer",
      data: {job_id, balance, expect_day, phone, email, exp_description, step_description}
    }).then(res => res.data).catch(err => console.error(err));
  }
  async checkCanOffer(job_id) {
    return await axios.get(`/check_can_offer?job_id=${job_id}`).then(res => res.data.data).catch(err => console.error(err));
  }
  async get(filter = {}) {
    return await axios({
      method: "GET",
      url: '/offer',
      params: filter
    }).then(res => res.data).catch(err => console.error(err));
  }
}

export default new OfferService();