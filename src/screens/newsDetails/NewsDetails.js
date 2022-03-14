import React, {useState} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Image, Icon, Overlay, Button, Input, FAB} from 'react-native-elements';
import useNews from './useNews';
import {ScrollView} from 'react-native-gesture-handler';

const NewsDetails = ({navigation}) => {
  //this shows the details of a selected news
  const news = useSelector(state => state.NewsData.news);
  const comments = useSelector(state => state.NewsData.comments);
  const images = useSelector(state => state.NewsData.images);
  const dispatch = useDispatch();
  const keyExtractor = (item, index) => index.toString();
  const [image, setImage] = useState({show: false});

  const {deleteNews, edit, setEdit, author, setAuthor, title, setTitle,editNews} =
    useNews();
  const renderImage = ({item}) => {
    //this defines how the images are rendered in the news details screen
    return (
      <View>
        <Overlay
          isVisible={image.show}
          onBackdropPress={() => setImage({show: false})}>
          <Text>Image</Text>
          <Image
            source={{uri: image.image}}
            style={{height: 300, width: 300, margin: 5}}
          />
          <Button
            icon={
              <Icon
                name="trash"
                type="font-awesome"
                color="white"
                size={25}
                iconStyle={{marginRight: 10}}
              />
            }
            title="Delete"
            onPress={async () => {
              let sent = await dispatch.NewsData.deleteImage({
                dispatch,
                newsId: news.id,
                imageId: image.id,
              });
              if (sent) setImage({show: false});
            }}
          />
        </Overlay>
        <Pressable
          onPress={() => {
            console.log('pressed', {item});
            setImage({...item, show: true});
          }}>
          <Image
            source={{uri: item.image}}
            style={{height: 100, width: 100, margin: 5}}
          />
        </Pressable>
      </View>
    );
  };

  const renderComment = ({item}) => {
    //this defines how the commments are rendered in the news details screen
    return (
      <Pressable
        onPress={async () => {
          await dispatch.NewsData.setComment(item);
          navigation.navigate('view-comment');
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.avatar}}
            style={{height: 50, width: 50, margin: 5}}
          />
          <Text>{item.name}</Text>
        </View>
        <Text>{item.comment}</Text>
      </Pressable>
    );
  };
  return (
    <View>
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
            onPress={deleteNews}
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
      <Input
        placeholder="name"
        disabled={!edit}
        value={title}
        // leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setTitle(value)}
      />

      <View style={{maxHeight: 80}}>
        <ScrollView>
          <Text>{news.body}</Text>
        </ScrollView>
      </View>
      <Input
        placeholder="name"
        disabled={!edit}
        value={`${author}`}
        onChangeText={value => setAuthor(value)}
      />
      {edit && (
        <FAB
          visible={true}
          onPress={editNews}
          title="Save"
          style={{marginRight: 5}}
          upperCase
          color="blue"
          icon={{type: 'font-awesome', name: 'edit', color: 'white'}}
        />
      )}
      {!edit && (
        <View>
          <View style={{alignItems: 'flex-end'}}>
            <FAB
              visible={true}
              onPress={async () => {
                navigation.navigate('add-image');
              }}
              title="Image"
              upperCase
              color="blue"
              icon={{name: 'add', color: 'white'}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              horizontal
              keyExtractor={keyExtractor}
              data={images}
              renderItem={renderImage}
            />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <FAB
              visible={true}
              title="Comment"
              upperCase
              color="blue"
              onPress={async () => {
                navigation.navigate('add-comment');
              }}
              icon={{name: 'add', color: 'white'}}
            />
          </View>
          <FlatList
            keyExtractor={keyExtractor}
            data={comments}
            renderItem={renderComment}
          />
        </View>
      )}
    </View>
  );
};

export default NewsDetails;
