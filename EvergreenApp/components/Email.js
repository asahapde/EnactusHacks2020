import React from 'react';
import {StyleSheet, View, Text, Dimensions, TextInput} from 'react-native';

const Email = () => {
  return (
    <View style={styles.email}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.textInput} placeholder="johndoe@gmail.com" underlineColorAndroid={'#FFFFFF'} />
    </View>
  );
};

const styles = StyleSheet.create({
  email: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 83,
    width: 360,
    margin: 15,
    backgroundColor: '#3B5249',
    borderRadius: Dimensions.get('window').width * 0.1,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 20,
    alignItems: 'flex-start',
    marginLeft: 20,
    fontWeight: 'bold',
  },

  textInput: {
    height: 40,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginLeft: 20,
    
  },
});

export default Email;
