import React from 'react';
import { Image} from 'react-native-elements';
const renderImage = ({item}) => {
    //this handles rendering of the image
    return (
      <Image
        source={{uri: item.uri}}
        style={{height: 100, width: 100, margin: 5}}
      />
    );
  };

  export default renderImage