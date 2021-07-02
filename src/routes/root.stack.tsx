import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/Home';

const RootStack = createStackNavigator();
const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator headerMode={'none'}>
      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
