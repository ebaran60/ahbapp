import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Activity from './Activity';
import History from './History';
import Profile from './Profile';
import Search from './Search';
import Detail from './Detail';
import Discussion from './Discussion';



export const HomeStack = createNativeStackNavigator();

export function HomeStackScreen({ navigation }) {
  
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
      <HomeStack.Screen name="Discussion" component={Discussion} />
    </HomeStack.Navigator>
  );
}

export const ActivityStack = createNativeStackNavigator();

export function ActivityStackScreen({ navigation }) {
  return (
    <ActivityStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ActivityStack.Screen name="Activity" component={Activity} />

    </ActivityStack.Navigator>
  );
}


export const HistoryStack = createNativeStackNavigator();

export function HistoryStackScreen({ navigation }) {
  return (
    <HistoryStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  );
}


export const ProfileStack = createNativeStackNavigator();

export function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

export const SearchStack = createNativeStackNavigator();

export function SearchStackScreen({ navigation }) {
  return (
    <SearchStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
}
export const MapStack = createNativeStackNavigator();

export function MapStackScreen({ navigation }) {
  return (
    <SearchStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
}