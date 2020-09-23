import axios from "../axios";

class AuthService {
  login(username, password) {
    return axios.post("login/", { username, password }).then((response) => {
      if (response.data.access) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.access)
        );
        localStorage.setItem("isLoggedIn", true);
      }

      return response.data.access;
    });
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.setItem("isLoggedIn", false);
  }

  register(username, email, password) {
    return axios.post("register/", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
