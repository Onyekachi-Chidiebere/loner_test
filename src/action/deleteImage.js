import { API_URL } from "../constants/helper";
import axios from 'axios'
import handleError from "./handleError";

const deleteImage = async ({dispatch,newsId, imageId}) => {
    try {
        dispatch.NewsData.setLoading(true);
        //send request to get all news
        const response = await axios.delete(`${API_URL}/news/${newsId}/images/${imageId}`);
        dispatch.NewsData.setLoading(false);
        console.log({response})
        //update news list in store
        dispatch.NewsData.updateDeletedImage(imageId);
        return true;
    } catch (error) {

        //handle errors if any
        handleError(error, dispatch);
      return false
    }
  };

  export default deleteImage;