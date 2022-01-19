import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PrincipalStack from './navigation/Principal';
import BuyStack from './navigation/Buy';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Principal') {
            iconName = focused
              ? 'align-left'
              : 'box';
          } else if (route.name === 'Buy') {
            iconName = focused
              ? 'ios-list-box'
              : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Principal" component={PrincipalStack} />
        <Tab.Screen name="Buy" component={BuyStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}