import getNewsList from '../action/getNewsList';
import getNews from '../action/getNews';
import next from '../action/next';
import previous from '../action/previous';
import getComments from '../action/getComments';
import getImages from '../action/getImages';
import deleteImage from '../action/deleteImage';
import addImage from '../action/addImage';
import addComments from '../action/addComments';
import deleteComment from '../action/deleteComment';
import deleteNews from '../action/deleteNews';
import editComment from '../action/editComment';
import editNews from '../action/editNews';
import setNewsList from '../reducers/setNewsList';
import setNews from '../reducers/setNews';
import setComments from '../reducers/setComments';
import setComment from '../reducers/setComment';
import setImages from '../reducers/setImages';
import updateDeletedImage from '../reducers/updateDeletedImage';
import updateDeleteComments from '../reducers/updateDeletedComments';
import updateDeleteNews from '../reducers/updateDeleteNews';
import updateEditNews from '../reducers/updateEditNews';
import updateEditComments from '../reducers/updateEditComments';
import updateImage from '../reducers/updateImage';
import updateAddComments from '../reducers/updateAddComments';
import setPage from '../reducers/setPage';
import setLoading from '../reducers/setLoading';
import setError from '../reducers/setError';

export const NewsData = {
  state: {
    page: 1,
    loading: false,
    error: false,
    newsList: [],
    news: {},
    comments: [],
    comment: {},
    images: [],
  },
  reducers: {
    setNewsList,
    setNews,
    setComments,
    setComment,
    setImages,
    updateDeletedImage,
    updateDeleteComments,
    updateDeleteNews,
    updateEditNews,
    updateEditComments,
    updateImage,
    updateAddComments,
    setPage,
    setLoading,
    setError,
  },
  effects: () => ({
    getNewsList,
    getNews,
    next,
    previous,
    getComments,
    addComments,
    getImages,
    deleteImage,
    addImage,
    deleteComment,
    deleteNews,
    editComment,
    editNews,
  }),
};
