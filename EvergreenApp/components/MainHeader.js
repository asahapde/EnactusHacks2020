import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const MainHeader = () => {
  return(
    <View style={styles.header}>
        <Image source={{uri: 'everGreen_logo1.png'}} styles={styles.img}></Image>
      <Text style={styles.text}>everGreen</Text>
    </View>
  ) 
}

const styles=StyleSheet.create({
    header: {
      height: 120,
      padding: 15,
      backgroundColor: '#3B5249',
      borderRadius: 120/6
    },

    img:{

    },

    text: {
      color: '#A4B494',
      fontSize: 50,
      textAlign: 'center'
    },


});

export default MainHeader;