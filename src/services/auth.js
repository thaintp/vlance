import axios from "utils/axios";

class AuthService {
  async login(email, password) {
    return await axios({
      method: "POST",
      url: "/auth/login",
      data: { email, password },
    }).then((response) => {
      if (response.data.access_token) {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem("user", JSON.stringify(response.data.user_record));
        return response.data;
      } else {
        throw "Email / Password invalid";
      }
    });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  async update() {
    return await axios({
      method: "POST",
      url: "/auth/update",
      data: { method: "post" },
    }).then((response) => {
      if (response.data.access_token) {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem("user", JSON.stringify(response.data.user_record));
      }
      return response.data;
    });
  }

  async register(name, email, password, repassword, fullname, phone, address) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("repassword", repassword);
    return await axios({
      method: "POST",
      url: "/user",
      data: {
        name,
        email,
        password,
        repassword,
        fullname,
        phone,
        address,
      },
    }).then((response) => {
      if (response.data.status === false) {
        throw "Username or Email already exist";
      } else {
        return "Account registered successfully";
      }
    });
  }
}

export default new AuthService();
