import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import NavigationHeader from './NavigationHeader';

const Stats2 = () => {
  return (
    <View style={styles.view}>
        <NavigationHeader/>
        <View style={styles.earth_div}>
        <Image source={require('./earth.png')} styles={styles.img}></Image>
        </View>
      <Text style={styles.text}>Your planted trees have absorbed over</Text>
      <Text style={styles.num}>2300</Text>
      <Text style={styles.text_b}>pounds of CO2.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#94C56B',
    height: Dimensions.get('window').height,
  },
  text: {
    fontSize: 50,
    paddingTop: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text_b: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  img: {
    width: 219,
    height: 215,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  num:{
      textAlign:'center',
      fontSize:70,
      fontWeight:'bold'
  },

  earth_div:{
      justifyContent:'center',
      alignItems:'center',
  }
});

export default Stats2;
