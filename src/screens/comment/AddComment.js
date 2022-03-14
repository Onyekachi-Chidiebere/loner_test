import React from 'react';
import {View, Text, Image} from 'react-native';
import {ListItem, Button, Icon, Card, Input} from 'react-native-elements';
import useComment from './useComment';

const AddComment = () => {
  //this renders the add comment screen
  const {filePath, imageGalleryLaunch, submitComment,setName, setComment} = useComment();
  return (
    <View>
      <Input
        placeholder="name"
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setName(value)}
      />
      <Input
        placeholder="Comment"
        leftIcon={{type: 'font-awesome', name: 'comment'}}
        onChangeText={value => setComment(value)}
      />

      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 5,
          backgroundColor: 'green',
          alignSelf: 'center',
        }}>
        {filePath.base64 && (
          <Image
            source={{uri: ''}}
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
        title="select avatar"
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
        title="add comment"
        onPress={submitComment}
      />
    </View>
  );
};

export default AddComment;
