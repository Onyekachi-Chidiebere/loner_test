import {API_URL} from '../constants/helper';
import axios from 'axios';

const getImages = async ({dispatch, id}) => {
  try {
    //get all images for a selected news
    const response = await axios.get(`${API_URL}/news/${id}/images`);
    dispatch.NewsData.setLoading(false);

    //update image list in store
    dispatch.NewsData.setImages(response.data);
    return true;
  } catch (error) {
    //handle errors if any
      dispatch.NewsData.setError(error.response.data);
      dispatch.NewsData.setLoading(false);
    if (error.response) {
      dispatch.NewsData.setError(error.response.data);
    } else if (error.request) {
      dispatch.NewsData.setError(error.request);
      console.log('request', error.request);
    } else {
      dispatch.NewsData.setError(error.message);
      console.log('Error', error.message);
    }
    return false;
  }
};

export default getImages;
