import React from 'react';
import {View, Text,Image} from 'react-native';
import {ListItem, Button, Icon, Card, } from 'react-native-elements';
import useAddImage from './useAddImage';

const AddImage = () => {
  const {filePath, imageGalleryLaunch,uploadImage} = useAddImage();
  return (
    <View>
       <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 5,
          backgroundColor: 'green',
          alignSelf:'center'
        }}>
        {filePath.base64 && (
          <Image
            source={{uri: 'data:image/jpeg;base64,' + filePath.base64}}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'green',
            }}
          />
        )}
      </View>
      <Button
        icon={
          <Icon
            name="plus"
            type="font-awesome"
            color="white"
            size={25}
            iconStyle={{marginRight: 10}}
          />
        }
        title="select image"
        onPress={imageGalleryLaunch}
      />
      <Button
        icon={
          <Icon
            name="cloud"
            type="font-awesome"
            color="white"
            size={25}
            iconStyle={{marginRight: 10}}
          />
        }
        title="Upload"
        onPress={uploadImage}
      />
     
    </View>
  );
};

export default AddImage;
