import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Stats2 from './components/Stats2';
import LeaderboardBanner from './components/LeaderboardBanner';
import Leaderboards from './components/Leaderboards';

const App = () => {
  return (
    <View>
      <Leaderboards />
    </View>
  );
};

export default App;
