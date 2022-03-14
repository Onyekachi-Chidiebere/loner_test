import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const getComments = async ({dispatch, id}) => {
  try {
    //get all commmens under a seleced news
    const response = await axios.get(`${API_URL}/news/${id}/comments`);

    //update comment list in store
    dispatch.NewsData.setComments(response.data);
    return dispatch.NewsData.getImages({dispatch, id});
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);
    return false;
  }
};

export default getComments;
