import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const editNews = async ({dispatch, newsId, author, title}) => {
  try {
    //add comment to current news news
    console.log({newsId})
    dispatch.NewsData.setLoading(true);
    const response = await axios.put(`${API_URL}/news/${newsId}`, {
      newsId,
      title,
      author,
    });

    //update news list in store
    dispatch.NewsData.updateEditNews({id: newsId, author, title});
    dispatch.NewsData.setLoading(false);
    console.log({response: response.data});
    return true;
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);
    return false;
  }
};

export default editNews;
