//necessary for navigation
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from '../screens/HomeScreen'
import PantryScreen from '../screens/PantryScreen';
import LikesScreen from '../screens/LikesScreen';

//Colors
import { COLORS } from '../constants';

//Screen names
const homeName = 'Home';
const pantryName = 'Pantry';
const likesName = 'Likes';

const Tab = createBottomTabNavigator();


export const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName = {homeName}
            screenOptions = { ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn == homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn == pantryName) {
                        iconName = focused ? 'basket' : 'basket-outline';
                    } else if (rn == likesName) {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }

                    //You can return any component that you like here!
                    return <Ionicons name = {iconName} size = {size} color = {color} />;
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray,
                headerShown: false,
             })}
        >
            <Tab.Screen name = {pantryName} component = { PantryScreen } />
            <Tab.Screen name = {homeName} component = { HomeScreen } />
            <Tab.Screen name = {likesName} component = { LikesScreen } />
        </Tab.Navigator>
    );
}
