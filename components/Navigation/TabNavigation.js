import * as React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import SearchScreen from './SearchScreen';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ProfileScreen from './ProfileScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation({}) {

  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Trang chủ"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" size={size} color={color} />
        ),
      }}
    />
     <Tab.Screen
      name="Tài Khoản"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Tài Khoản',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="profile" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Cài Đặt"
      component={Settings}
      options={{
        headerShown: false,
        tabBarLabel: 'Cài Đặt',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="setting" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
      
  );
}
