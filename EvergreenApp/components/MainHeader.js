import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const MainHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('./everGreen_logo1.png')}
        styles={styles.img}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 255,
    padding: 15,
    backgroundColor: '#3B5249',
    borderBottomLeftRadius: Dimensions.get('window').width * 0.1,
    borderBottomRightRadius: Dimensions.get('window').width * 0.1,
  },

  img: {
    width: 362,
    height: 259,
  },
  
});

export default MainHeader;
