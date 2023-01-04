import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Activity from './Activity';
import Bookmark from './Bookmark';
import Profile from './Profile';
import Search from './Search';
import Detail from './Detail';
import Discussion from './Discussion';
import Notification from './Notification';
import Editprofile from './Profile/screens/EditProfile';
import Editnotification from './Profile/screens/EditNotification';
import EditSecurity from './Profile/screens/EditSecurity';
import EditApperance from './Profile/screens/EditApperance';
import EditHelp from './Profile/screens/EditHelp';
import HelpFAQ from './Profile/screens/EditHelp/screens/FAQ';



export const HomeStack = createNativeStackNavigator();

export function HomeStackScreen({ navigation }) {
  
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
      <HomeStack.Screen name="Discussion" component={Discussion} />
      <HomeStack.Screen name="Notification" component={Notification} />
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


export const BookmarkStack = createNativeStackNavigator();

export function BookmarkStackScreen({ navigation }) {
  return (
    <BookmarkStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <BookmarkStack.Screen name="Bookmark" component={Bookmark} />
    </BookmarkStack.Navigator>
  );
}


export const ProfileStack = createNativeStackNavigator();

export function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Editprofile" component={Editprofile} />
      <ProfileStack.Screen name="Editnotification" component={Editnotification} />
      <ProfileStack.Screen name="Editsecurity" component={EditSecurity} />
      <ProfileStack.Screen name="Editapperance" component={EditApperance} />
      <ProfileStack.Screen name="Edithelp" component={EditHelp} />
      <ProfileStack.Screen name="helpFAQ" component={HelpFAQ} />
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