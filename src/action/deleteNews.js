import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const deleteNews = async ({dispatch, newsId}) => {
  try {
    console.log('deleting from store', {newsId});
    //delete current comment
    const response = await axios.delete(`${API_URL}/news/${newsId}`);

    //update news list in store
    dispatch.NewsData.updateDeleteNews(newsId);
    dispatch.NewsData.setLoading(false);
    console.log({response: response.data});
    return true;
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);

    return false;
  }
};

export default deleteNews;
