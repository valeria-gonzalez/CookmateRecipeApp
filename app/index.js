//import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

//screens
import {
    LoginScreen, RecipeScreen, RecipeOptionsScreen, 
    BreakfastRecipesScreen, LunchRecipesScreen, DinnerRecipesScreen,
    SearchResultScreen, LikesRecipeScreen
} from '../screens';
//this is the bottom tab navigator for the homescreen
import { BottomTab } from '../navigation/BottomTab';

//navigation stuff
//crateNativeStackNavigator is used to create a stack of screens
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//navigationContainer is used to wrap the stack navigator, and provide the navigation context
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const Page = () => {
    const [fontsLoaded] = useFonts({
      //a .ttf is a font file 
      PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
      PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
      PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
      PlayfairBlack: require('../assets/fonts/PlayfairDisplay-Black.ttf'),
  })

  const onLayoutRootView = React.useCallback(async () => {
      //we want to show the splash screen only when the fonts are loaded
      if(fontsLoaded){
          await SplashScreen.hideAsync();
      }
  }, [fontsLoaded])

  if(!fontsLoaded) return null;

  return (
    <NavigationContainer independent = {true} onLayout={onLayoutRootView}>
        <Stack.Navigator screenOptions = {{
            headerShown: false //this is set to false to hide the header
            //below, initialRouteName is the first screen that will be displayed
        }} initialRouteName = 'LoginScreen'>
            <Stack.Screen name = 'LoginScreen' component = 
            {LoginScreen} />

            <Stack.Screen name = 'HomeScreen' component = 
            {BottomTab} />

            <Stack.Screen name = 'RecipeScreen' component = 
            {RecipeScreen} />

            <Stack.Screen name = 'LikesRecipeScreen' component = 
            {LikesRecipeScreen} />

            <Stack.Screen name = 'BreakfastRecipesScreen' component = 
            {BreakfastRecipesScreen} />

            <Stack.Screen name = 'LunchRecipesScreen' component = 
            {LunchRecipesScreen} />

            <Stack.Screen name = 'DinnerRecipesScreen' component = 
            {DinnerRecipesScreen} />

            <Stack.Screen name = 'SearchResultScreen' component = 
            {SearchResultScreen} />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Page;


/*This page is used to model the navigation of the app, in which, 
the user will be able to navigate between the login screen, home screen
and the recipe screen. The home screen will be a bottom tab navigator
that will allow the user to navigate between the home screen, pantry 
screen and the likes screen. 
*/

//export default Page;

//<BottomTab />




