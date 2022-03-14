import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const addComments = async ({dispatch, newsId, name, avatar, comment}) => {
  try {
    //add comment to current news news
    dispatch.NewsData.setLoading(false);
    const response = await axios.post(`${API_URL}/news/${newsId}/comments`, {
      newsId,
      name,
      avatar,
      comment,
    });

    //update news list in store
    dispatch.NewsData.updateAddComments(response.data);
    dispatch.NewsData.setLoading(false);
    console.log({response: response.data});
    return true;
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);

    return false;
  }
};

export default addComments;
