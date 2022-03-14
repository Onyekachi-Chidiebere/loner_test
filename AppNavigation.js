import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/news/Home';
import NewsDetails from './src/screens/newsDetails/NewsDetails';
import AddImage from './src/screens/image/AddImage';
import AddComment from './src/screens/comment/AddComment';
import ViewComment from './src/screens/comment/ViewComment';
import AddNews from './src/screens/news/AddNews';
import { useSelector } from 'react-redux';
import Loading from './src/components/Loading';

const AppNavigator = () => {
  const loading = useSelector(state=>state.NewsData.loading)
  const Stack = createStackNavigator();
  return (
    <>
    {loading&&<Loading/>}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="add-news"
            component={AddNews}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="new-details"
            component={NewsDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="add-image"
            component={AddImage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="add-comment"
            component={AddComment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="view-comment"
            component={ViewComment}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
