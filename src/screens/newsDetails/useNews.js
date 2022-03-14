import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const useNews = () => {
  //this is a hook for news add, update and delete;
  const news = useSelector(state => state.NewsData.news);
  const commentData = useSelector(state => state.NewsData.comment);
  const [edit, setEdit] = useState(false);
  const [newsField, setNewsField] = useState(commentData.comment);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [newsTitle, setNewsTitle] = useState('');
  const [author, setAuthor] = useState(news.author);
  const [title, setTitle] = useState(news.title);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  

  const deleteNews = async () => {
    console.log('deleting');
    //handle delete comment
    try {
      let sent = await dispatch.NewsData.deleteNews({
        dispatch,
        newsId: news.id,
      });
      if (sent) {
        navigation.pop();
      }
    } catch (error) {
      console.log({error});
    }
  };
  const editNews = async () => {
      console.log('sending edit news',{news:news.id})
    //handle edit news
    let sent = await dispatch.NewsData.editNews({
      dispatch,
      author,
      title,
      newsId:news.id
    });
    if (sent) {
      console.log('popping');
      navigation.pop();
    }
  };
  const submitComment = async () => {
    //this handles submiting news
    try {
      let sent = await dispatch.NewsData.addNews({
        dispatch,
        title: newsTitle,
        author,
      });
      if (sent) {
        console.log('done');
        navigation.pop();
      }
    } catch (error) {
      console.log({error});
    }
  };

  return {
    loading,
    alert,
    submitComment,
    edit,
    setEdit,
    editNews,
    deleteNews,
    author,
    setAuthor,
    title,
    setTitle,
  };
};

export default useNews;
