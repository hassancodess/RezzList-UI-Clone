import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();
// Navigators
import AuthenticationNavigator from './AuthenticationStack';
import DashboardNavigator from './DashboardDrawer';

const AppNavigation = () => {
    return (
        <Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
            <Screen name='Authentication' component={AuthenticationNavigator} />
            <Screen name='Dashboard' component={DashboardNavigator} />
        </Navigator>
    )
}

export default AppNavigation