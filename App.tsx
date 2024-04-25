import React from 'react';
import {Home, Register, Login, Chat} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const Stack = createNativeStackNavigator();

SystemNavigationBar.stickyImmersive();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Chat"
          component={(props: any) => <Chat key={props.route.name} {...props} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
