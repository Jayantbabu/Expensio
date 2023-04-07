import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, ActivityIndicator, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen'
import Icons from 'react-native-vector-icons'

const Drawer = createDrawerNavigator();

const App = ({navigation}) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{header: () => null}} initialRouteName="Home">
                <Drawer.Screen name = "Expensio" component={HomeScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App
