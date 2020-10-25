import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <TouchableOpacity>
        <Text style={styles.text}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    height: 28,
    width: 199,
    margin: 15,
    marginLeft: 55,
    backgroundColor: '#3B5249',
    borderRadius: Dimensions.get('window').width * 0.1,
  },

  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ForgotPassword;
