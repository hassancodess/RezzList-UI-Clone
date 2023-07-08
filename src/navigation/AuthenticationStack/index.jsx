import React from 'react'
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();
// Screens
import { Login, Register, ResetPassword } from '../../screens/Authentication';

const AuthenticationNavigator = () => {
    return (
        <Navigator initialRouteName='Login'>
            <Screen name='Login' component={Login} />
            <Screen name='Register' component={Register} />
            <Screen name='ResetPassword' component={ResetPassword} />
        </Navigator>
    )
}

export default AuthenticationNavigator
