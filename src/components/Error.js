import React, {useState} from 'react';
import {Button, Overlay, Icon} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

const Error = (error, dispatch) => {
 

  return (
    <View>
      <Overlay
        isVisible={true}
        onBackdropPress={() => dispatch.NewsData.setLoading(false)}>
        <Text style={styles.textPrimary}>Error!</Text>
        <Text style={styles.textSecondary}>{error}</Text>
        <Button
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          title="Start Building"
          onPress={() => dispatch.NewsData.setLoading(false)}
        />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default Error;
