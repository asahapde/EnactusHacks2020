import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import MainHeader from './MainHeader';
import Email from './Email';
import Password from './Password';
import Name from './Name';

const SignUp = () => {
  return (
    <View style={styles.view}>
      <MainHeader />
      <Name />
      <Email />
      <Password />
      <View style={styles.button}>
        <Text style={styles.signIntext}>Sign In</Text>
        <TouchableOpacity>
          <View style={styles.div}>
            <Image
              source={require('./signInButton.png')}
              styles={styles.img}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#94C56B',
    height: Dimensions.get('window').height,
  },
  text: {
    fontSize: 35,
    paddingTop: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },

  signIntext: {
    padding: 25,
    fontSize: 25,
    color: '#000000',
  },

  img: {
    width: 95,
    height: 95,
    marginLeft: 100,
  },

  button: {
    flexDirection: 'row',
  },

  div: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingLeft: 120,
  },
});

export default SignUp;
