import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {ListItem, Card} from 'react-native-elements';
import keyExtractor from './keyExtractor';
import renderImage from './renderImage';
const renderItem = ({item,dispatch}) => (
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

export default renderItem;
