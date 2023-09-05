import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '../bottom_tabs/bottom_tabs';
import VerifyProduct from '../screens/scanQr/VerifyProductScreen';
import NFCScannerScreen from '../screens/scanQr/NFCScannerScreen';
import ScanHistoryScreen from '../screens/history/ScanHistoryScreen';
import TimeOutScanScreen from '../screens/scanQr/TimeOutScanScreen';
import AuthenticScanScreen from '../screens/scanQr/AuthenticScanScreen';
import FailedScanScreen from '../screens/scanQr/FailedScanScreen';
import SubscribeScreen from '../screens/subscribe/SubscribeScreen';


const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='SplashScreen'
        >
            <Stack.Screen
                name="VerifyProduct"
                component={VerifyProduct}
            />

            <Stack.Screen
                name="NFCScannerScreen"
                component={NFCScannerScreen}
            />

            <Stack.Screen
                name="ScanHistoryScreen"
                component={ScanHistoryScreen}
            />

            <Stack.Screen
                name="TimeOutScanScreen"
                component={TimeOutScanScreen}
            />

            <Stack.Screen
                name="AuthenticScanScreen"
                component={AuthenticScanScreen}
            />

            <Stack.Screen
                name="FailedScanScreen"
                component={FailedScanScreen}
            />

            <Stack.Screen
                name="SubscribeScreen"
                component={SubscribeScreen}
            />
        </Stack.Navigator>
    );
}

export default AppStack;

