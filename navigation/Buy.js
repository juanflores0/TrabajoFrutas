import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BuyScreen from '../container/Buy';

const Stack = createStackNavigator();

export default function BuyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Buy" component={BuyScreen} />
      </Stack.Navigator>
    );
}