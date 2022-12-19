import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackScreen, ActivityStackScreen, HistoryStackScreen, ProfileStackScreen, MapStackScreen } from './screens';
import { colors } from './config'
const Tab = createBottomTabNavigator();

const TabScreens = ({ navigation }) => {


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: colors.black,
        tabBarActiveBackgroundColor: colors.black,
        tabBarStyle: { backgroundColor: colors.black }
      }}>
      <Tab.Screen name="Anasayfa" component={HomeStackScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return (
            focused
              ? <Image style={{ width: 45, resizeMode: 'contain', height: 45 }} source={require('./assets/images/homeFocus.png')} />
              : <Image style={{ width: 30, resizeMode: 'contain', height: 30 }} source={require('./assets/images/home.png')} />
          )
        }
      }} />
      <Tab.Screen name="Aktiviteler" component={ActivityStackScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return (
            focused
              ? <Image style={{ width: 45, resizeMode: 'contain', height: 45 }} source={require('./assets/images/activityFocus.png')} />
              : <Image style={{ width: 30, resizeMode: 'contain', height: 30 }} source={require('./assets/images/activity.png')} />
          )
        }
      }} />
      <Tab.Screen name="Map" component={MapStackScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return (
            focused
              ? <Image style={{ width: 45, resizeMode: 'contain', height: 45 }} source={require('./assets/images/mapFocus.png')} />
              : <Image style={{ width: 30, resizeMode: 'contain', height: 30 }} source={require('./assets/images/map.png')} />
          )
        }
      }} />
      <Tab.Screen name="Geçmiş" component={HistoryStackScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return (
            focused
              ? <Image style={{ width: 45, resizeMode: 'contain', height: 45 }} source={require('./assets/images/historyFocus.png')} />
              : <Image style={{ width: 30, resizeMode: 'contain', height: 30 }} source={require('./assets/images/history.png')} />
          )
        }
      }} />
      <Tab.Screen name="Profil" component={ProfileStackScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return (
            focused
              ? <Image style={{ width: 45, resizeMode: 'contain', height: 45 }} source={require('./assets/images/profileFocus.png')} />
              : <Image style={{ width: 30, resizeMode: 'contain', height: 30 }} source={require('./assets/images/profile.png')} />
          )
        }
      }} />
    </Tab.Navigator>
  );
};

export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="TabScreens"
          component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}