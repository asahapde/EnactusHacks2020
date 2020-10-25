import React from 'react';
<<<<<<< HEAD
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
=======
import {View, StyleSheet} from 'react-native';

import MainHeader from './components/MainHeader';
import SignIn from './components/SignIn';
import Profile from './components/Profile';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        style={{backgroundColor: 'tomato'}}>
        <Tab.Screen
          name="Feed"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Profile}
          options={{
            tabBarLabel: 'Plant',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="pine-tree"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Leaderboard',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="leaderboard" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
>>>>>>> as_dev
  );
};

const styles = StyleSheet.create({
  navStyle: {
    backgroundColor: '#94C56C',
  },
});

export default App;
