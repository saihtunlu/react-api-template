import axios from "../axios";
class UserService {
  getPublicPosts() {
    return axios.get("posts/");
  }

  getPrivatePosts() {
    return axios.get("all-posts/");
  }
}

export default new UserService();
