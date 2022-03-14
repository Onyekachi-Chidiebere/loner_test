import React from 'react';
import {Icon, Input,FAB} from 'react-native-elements';
import {View, Text} from 'react-native';
const AddNews = ({navigation}) => {
    //yet to complete;
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
      </View>
      <Input
        placeholder="titile"
        value={''}
        // leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setTitle(value)}
      />
      <Input
        placeholder="author"
        value={''}
        // leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setTitle(value)}
      />
      <FAB
        visible={true}
        onPress={async () => setEdit(true)}
        title="Save"
        style={{marginRight: 5}}
        upperCase
        color="blue"
        icon={{type: 'font-awesome', name: 'edit', color: 'white'}}
      />
    </View>
  );
};

export default AddNews;
