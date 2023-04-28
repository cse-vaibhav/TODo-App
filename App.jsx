import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from './pages/DashBoard.jsx';
import StartPage from './pages/StartPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Start"
                    component={StartPage}
                    options={{title: 'Welcome', headerShown: false}}
                />
                <Stack.Screen 
                    name="Home"
                    component={DashBoard}
                    options={{title: 'Tasks', headerShown: false}}
                />
                <Stack.Screen 
                    name="Login"
                    component={LoginPage}
                    options={{title: 'LogIn', headerShown: false}}
                />
                <Stack.Screen 
                    name="Register"
                    component={SignUpPage}
                    options={{title: 'Register', headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;