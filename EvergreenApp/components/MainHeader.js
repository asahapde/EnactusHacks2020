import React from 'react';
<<<<<<< HEAD
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
=======
import {StyleSheet, View, Text, Image} from 'react-native';
>>>>>>> as_dev

const MainHeader = () => {
  return (
    <View style={styles.header}>
<<<<<<< HEAD
      <Image
        source={require('./everGreen_logo1.png')}
        styles={styles.img}></Image>
=======
      <Image source={{uri: 'everGreen_logo1.png'}} styles={styles.img}></Image>
      <Text style={styles.text}>everGreen</Text>
>>>>>>> as_dev
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
<<<<<<< HEAD
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
  
=======
    height: 120,
    padding: 15,
    backgroundColor: '#3B5249',
    borderRadius: 120 / 6,
  },

  img: {},

  text: {
    color: '#A4B494',
    fontSize: 50,
    textAlign: 'center',
  },
>>>>>>> as_dev
});

export default MainHeader;
