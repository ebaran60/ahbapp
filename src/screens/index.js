import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Activity from './Activity';
import History from './History';
import Profile from './Profile';
import Search from './Search';



export const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {
  
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

export const ActivityStack = createNativeStackNavigator();

function ActivityStackScreen({ navigation }) {
  return (
    <ActivityStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ActivityStack.Screen name="Activity" component={Activity} />

    </ActivityStack.Navigator>
  );
}


export const HistoryStack = createNativeStackNavigator();

function HistoryStackScreen({ navigation }) {
  return (
    <HistoryStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  );
}


export const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

export const SearchStack = createNativeStackNavigator();

function SearchStackScreen({ navigation }) {
  return (
    <SearchStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
}




export {HomeStackScreen, ActivityStackScreen, HistoryStackScreen, ProfileStackScreen,SearchStackScreen};