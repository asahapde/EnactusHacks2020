import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const MainHeader = () => {
  return(
    <View style={styles.header}>
      <Image source={require('./everGreen_logo1.png')} styles={styles.img}></Image>
    </View>
  ) 
}

const styles=StyleSheet.create({
    header: {
      height: 275,
      padding: 15,
      backgroundColor: '#3B5249',
      borderBottomLeftRadius: 120/3,
      borderBottomRightRadius: 120/3
    },

    img:{
        width: 362,
        height: 259
    },
});

export default MainHeader;