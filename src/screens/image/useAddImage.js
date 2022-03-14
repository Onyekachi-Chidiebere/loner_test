import {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';

const useAddImage = () => {
    const news = useSelector(state=>state.NewsData.news);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [filePath, setFilePath] = useState({base64: null});
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageGalleryLaunch = () => {
    let options = {
      includeBase64: true,
    };

    launchImageLibrary(options, res => {
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

  const uploadImage = async () => {
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
      let sent = await dispatch.NewsData.addImage({dispatch,newsId:news.id,image:imageResponse.data.url})
      if(sent){
          console.log('done')
        navigation.pop();
      }
    } catch (error) {
        console.log({error})
    }
  };

  return {
    loading,
    alert,
    uploadImage,
    filePath,
    imageGalleryLaunch,
  };
};

export default useAddImage;
