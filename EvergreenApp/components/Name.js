import React from 'react';
import {StyleSheet, View, Text, Dimensions, TextInput} from 'react-native';

const Name = () => {
  return (
    <View style={styles.name}>
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.textInput} placeholder="John Doe" underlineColorAndroid={'#FFFFFF'} />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
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
    textAlign: 'left',
    fontSize: 20,
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

export default Name;
