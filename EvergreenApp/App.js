import React from 'react';
import {View, StyleSheet} from 'react-native';

import MainHeader from './components/MainHeader';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboards';

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
          component={Leaderboard}
          options={{
            tabBarLabel: 'Leaderboard',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="leaderboard" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navStyle: {
    backgroundColor: '#94C56C',
  },
});

export default App;
