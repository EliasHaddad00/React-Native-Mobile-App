// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FeedScreen from '../Screens/FeedScreen'
import DiscoverScreen from '../Screens/DiscoverScreen'
import PostScreen from '../Screens/PostScreen'
import FavoritesScreen from '../Screens/FavoritesScreen'
import ProfileScreen from '../Screens/ProfileScreen'

const Tab = createBottomTabNavigator();

export default function BaseApp() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-assistant';
            } else if (route.name === 'Discover') {
              iconName = 'magnify'
            } else if (route.name === 'Post') {
              iconName = focused ? 'plus-box' : 'plus-box-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'eye' : 'eye-outline';
            }else if (route.name === 'Profile') {
              iconName = 'face-profile';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#01AD9A',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={FeedScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    
  );
}