import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main/';
// import Perfil from './pages/Perfil';

export default function Routes() {
  return (
    <NavigationContainer >

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Main" component={Main} />
        {/* <AppStack.Screen name="Perfil" component={Perfil} /> */}
      </AppStack.Navigator>

    </NavigationContainer>
  );
}