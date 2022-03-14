import React from 'react';
import { Overlay, FAB} from 'react-native-elements';
import {View} from 'react-native';

const Loading = () => {
  return (
    <View>
      <Overlay
        isVisible={true}
        >
         <FAB
          loading
          color='blue'
          visible={true}
          icon={{ name: 'add', color: 'white' }}
          size="small"
        />
      </Overlay>
    </View>
  );
};



export default Loading;
