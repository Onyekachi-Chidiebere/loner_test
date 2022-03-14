import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const editComment = async ({dispatch, newsId, name, avatar, comment,commentId}) => {
  try {
    //add comment to current news news
    dispatch.NewsData.setLoading(true);
    const response = await axios.put(`${API_URL}/news/${newsId}/comments/${commentId}`, {
      newsId,
      name,
      avatar,
      comment,
    });

    //update news list in store
    dispatch.NewsData.updateEditComments({id:commentId,comment});
    dispatch.NewsData.setLoading(false);
    console.log({response: response.data});
    return true;
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);

    return false;
  }
};

export default editComment;
