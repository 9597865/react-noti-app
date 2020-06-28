import { getPosts } from "../service/post_api.js";
export const loadPhotosAction = async (dispatch) => {
    const res = await getPosts("https://jsonplaceholder.typicode.com/photos");
    const payload = res.data.splice(0,100)
    const dis = {
      type: "LOAD_PHOTOS",
      payload: payload,
    };
    dispatch(dis);
  };
  