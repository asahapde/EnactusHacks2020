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
import SignUpButton from './SignUpButton';
import ForgotPassword from './ForgotPassword';

const SignIn = () => {
  return (
    <View style={styles.view}>
      <MainHeader />
      <Text style={styles.text}>WELCOME BACK</Text>
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

      <View style={styles.otherButtons}>
        <SignUpButton />
        <ForgotPassword />
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
    fontWeight: 'bold',
  },

  signIntext: {
    padding: 25,
    fontSize: 25,
    color: '#000000',
  },

  img: {
    width: 95,
    height: 95,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  button: {
    flexDirection: 'row',
  },

  otherButtons: {
    flexDirection: 'row',
    marginTop: 50,
  },

  div:{
    alignItems:'flex-end',
    justifyContent:'flex-end',
    paddingLeft: 120,
  }

});

export default SignIn;
