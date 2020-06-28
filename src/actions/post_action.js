import { getPosts } from "../service/post_api.js";
export const loadPostsAction = async (dispatch) => {
  const res = await getPosts("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: "LOAD_POSTS",
    payload: res.data,
  });
};
