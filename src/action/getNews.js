import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const getNews = async ({dispatch, id}) => {
  try {
    //get the details of a selected news
    dispatch.NewsData.setLoading(true);
    const response = await axios.get(`${API_URL}/news/${id}`);

    //update news  in store
    dispatch.NewsData.setNews(response.data);
    return dispatch.NewsData.getComments({dispatch, id});
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);
    return false;
  }
};

export default getNews;
