import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Image, Input, Icon, Overlay, Button, FAB} from 'react-native-elements';
import useComment from './useComment';

const ViewComment = ({navigation}) => {
  //this renders the comment screen
  const {
    deleteComment,
    edit,
    setEdit,
    commentField,
    commentData,
    setCommentField,
    editComment,
  } = useComment();
  return (
    <View>
      <Text>this is view comment</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          raised
          name="arrow-left"
          type="font-awesome"
          color="rgba(90, 154, 230, 1)"
          onPress={() => navigation.pop()}
        />
        <View style={{flexDirection: 'row'}}>
          <FAB
            visible={true}
            onPress={deleteComment}
            style={{marginRight: 5}}
            title="Delete"
            upperCase
            color="blue"
            icon={{type: 'font-awesome', name: 'trash', color: 'white'}}
          />
          <FAB
            visible={true}
            onPress={async () => setEdit(true)}
            title="Edit"
            style={{marginRight: 5}}
            upperCase
            color="blue"
            icon={{type: 'font-awesome', name: 'edit', color: 'white'}}
          />
        </View>
      </View>
      <Image
        source={{uri: commentData.avatar}}
        style={{height: 100, width: 100, margin: 5}}
      />

      <Input
        placeholder="Comment"
        value={commentField}
        disabled={!edit}
        multiline
        leftIcon={{type: 'font-awesome', name: 'comment'}}
        onChangeText={value => setCommentField(value)}
      />
      <Input
        placeholder="name"
        disabled={true}
        value={commentData.name}
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setName(value)}
      />
      {edit && (
        <FAB
          visible={true}
          onPress={editComment}
          title="Save"
          style={{marginRight: 5}}
          upperCase
          color="blue"
          icon={{type: 'font-awesome', name: 'edit', color: 'white'}}
        />
      )}
    </View>
  );
};

export default ViewComment;
