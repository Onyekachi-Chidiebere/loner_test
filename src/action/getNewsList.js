import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const getNewsList = async ({dispatch, page}) => {
  try {
    //send request to get all news
    dispatch.NewsData.setLoading(true);
    const response = await axios.get(`${API_URL}/news?page=${page}&limit=10`);
    dispatch.NewsData.setLoading(false);

    //update news list in store
    dispatch.NewsData.setNewsList(response.data);
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);
  }
};

export default getNewsList;
