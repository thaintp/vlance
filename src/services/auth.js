import axios from "utils/axios";

class AuthService {
  async login(email, password) {
    return await axios({
      method: "POST",
      url: "/auth/signin",
      data: { email, password },
    }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  async update() {
    return await axios({
      method: "POST",
      url: "/auth/update",
      data: { method: "post" },
    }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  async register(name, email, password) {
    return await axios({
      method: "POST",
      url: "/auth/signup",
      data: { name, email, password },
    });
  }
}

export default new AuthService();
