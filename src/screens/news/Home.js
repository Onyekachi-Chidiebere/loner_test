import React, {useCallback} from 'react';
import {View, FlatList, Pressable,Text} from 'react-native';
import {Button, FAB, ListItem, Card} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
// import renderItem from '../../components/renderItem';
import keyExtractor from '../../components/keyExtractor';
import renderImage from '../../components/renderImage';

const Home = ({navigation}) => {
  const page = useSelector(state => state.NewsData.page);
  const newsList = useSelector(state => state.NewsData.newsList);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      //get news for first page on component mount
      dispatch.NewsData.getNewsList({dispatch, page});
    }, []),
  );

  const renderItem = ({item}) => (
    //hanldes the rendering of the news item
    <Pressable
      onPress={async () => {
        let sent = await dispatch.NewsData.getNews({dispatch, id: item.id});
        if (sent) navigation.navigate('new-details');
      }}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <View>
              <Text>{item.body}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              {item.images && (
                <FlatList
                  horizontal
                  keyExtractor={keyExtractor}
                  data={item.images}
                  renderItem={renderImage}
                />
              )}
            </View>
            <Card.FeaturedSubtitle>{item.author}</Card.FeaturedSubtitle>
            <ListItem.Subtitle>~{item.author}</ListItem.Subtitle>
          </Card>
        </ListItem.Content>
      </ListItem>
    </Pressable>
  );
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <FAB
          visible={true}
          onPress={async () => navigation.navigate('add-news')}
          title="News"
          style={{marginRight: 5}}
          upperCase
          color="blue"
          icon={{name: 'add', color: 'white'}}
        />
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        data={newsList}
        renderItem={renderItem}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          onPress={() => dispatch.NewsData.previous({dispatch, page})}
          title="Previous"
          icon={{
            name: 'arrow-left',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconContainerStyle={{marginLeft: 10}}
          titleStyle={{fontWeight: '700'}}
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 150,
            margin: 10,
          }}
        />
        <Button
          onPress={() => dispatch.NewsData.next({dispatch, page})}
          title="Next"
          icon={{
            name: 'arrow-right',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{marginLeft: 10}}
          titleStyle={{fontWeight: '700'}}
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 150,
            margin: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Home;
