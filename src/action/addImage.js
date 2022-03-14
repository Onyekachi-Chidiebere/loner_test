import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const addImage = async ({dispatch, newsId, image}) => {
  //this adds an image to the current selected news
  try {
    dispatch.NewsData.setLoading(true);
    const response = await axios.post(`${API_URL}/news/${newsId}/images`, {
      newsId,
      image,
    });
    dispatch.NewsData.setLoading(false);
    //update image list in store
    dispatch.NewsData.updateImage(response.data);
    return true;
  } catch (error) {
    handleError(error, dispatch);
    return false;
  }
};

export default addImage;
