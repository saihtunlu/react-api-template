import axios from "axios";

var access = JSON.parse(localStorage.getItem("accessToken"));
axios.defaults.baseURL = `http://moviecity.saihtunlu.me/`;
if (access) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
}

export default axios;
