import {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';

const useComment = () => {
  //this is a hook for comment add and update;
  const news = useSelector(state => state.NewsData.news);
  const commentData = useSelector(state => state.NewsData.comment);
  const [edit, setEdit]=useState(false);
  const [commentField, setCommentField]=useState(commentData.comment) ;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [filePath, setFilePath] = useState({base64: null});
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageGalleryLaunch = () => {
    //this gets image from device
    let options = {
      includeBase64: true,
    };

    launchImageLibrary(options, res => {
      //handle select error
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setFilePath(res.assets[0]);
      }
    });
  };
  const deleteComment = async () => {
    //handle delete comment
    let sent = await dispatch.NewsData.deleteComment({
      dispatch,
      newsId: news.id,
      commentId:commentData.id,
    });
    if (sent) {
      navigation.pop();
    }
  };
  const editComment = async () => {
    //handle edit comment
    let sent = await dispatch.NewsData.editComment({
      dispatch,
      newsId: news.id,
      commentId:commentData.id,
      name:commentData.name,
      avatar:commentData.avatar,
      comment:commentField
    });
    if (sent) {
      navigation.pop();
    }
  };
  const submitComment = async () => {
    //this handles submiting comment
    try {
      let base64Img = `data:image/jpg;base64,${filePath.base64}`;

      let data = {
        file: base64Img,
        upload_preset: 'loner_upload',
      };

      let CLOUDINARY_URL =
        'https://api.cloudinary.com/v1_1/iam01chidiebere/upload';

      const imageResponse = await axios.post(CLOUDINARY_URL, data);

      console.log({url: imageResponse.data.url});
      let sent = await dispatch.NewsData.addComments({
        dispatch,
        newsId: news.id,
        avatar: imageResponse.data.url,
        name,
        comment,
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
    filePath,
    imageGalleryLaunch,
    comment,
    setComment,
    name,
    setName,
    deleteComment,
    commentField,
    edit,
    setEdit,
    commentData,
    setCommentField,
    editComment,
  };
};

export default useComment;
