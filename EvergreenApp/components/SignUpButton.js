import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUpButton = () => {
  return (
    <View style={styles.signUpButton}>
      <TouchableOpacity>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpButton: {
    height: 28,
    width: 98,
    margin: 15,
    backgroundColor: '#3B5249',
    borderRadius: Dimensions.get('window').width * 0.1,
  },

  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default SignUpButton;
