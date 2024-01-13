import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ThermoScreen from './screens/ThermoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false, 
        }} initialRouteName="Thermo">
        <Stack.Screen name="Thermo" component={ThermoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;