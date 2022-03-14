import {API_URL} from '../constants/helper';
import axios from 'axios';
import handleError from './handleError';

const deleteComment = async ({dispatch, newsId, commentId}) => {
  try {
    //delete current comment
    const response = await axios.delete(
      `${API_URL}/news/${newsId}/comments/${commentId}`,
    );

    //update news list in store
    dispatch.NewsData.updateDeleteComments(commentId);
    dispatch.NewsData.setLoading(false);
    console.log({response: response.data});
    return true;
  } catch (error) {
    //handle errors if any
    handleError(error, dispatch);

    return false;
  }
};

export default deleteComment;
