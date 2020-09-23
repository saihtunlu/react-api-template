import { SET_POST, CLEAR_POST } from "./types";

export const setPost = (post) => ({
  type: SET_POST,
  payload: post,
});

export const clearPost = () => ({
  type: CLEAR_POST,
});
