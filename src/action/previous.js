import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const previous = async ({dispatch, page}) => {
  try {
    //send request to get all news fro thwe previous page
    dispatch.NewsData.setLoading(true);
    if (page !== 1) {
      const response = await axios.get(
        `${API_URL}/news?page=${page - 1}&limit=10`,
      );
      dispatch.NewsData.setLoading(false);

      //update news list in store
      dispatch.NewsData.setNewsList(response.data);
      dispatch.NewsData.setPage(page - 1);
    }
    return true;
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);
    return false;
  }
};

export default previous;
