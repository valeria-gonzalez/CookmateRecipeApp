import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


import { COLORS, icons, images, SIZES, scale } from '../constants';
import { FoundRecipes } from '../components';

const BreakfastRecipesScreen = ({ route, navigation }) => {
  const { recipeCategory } = route.params;
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider 
        style = {{ 
          backgroundColor: COLORS.lightWhite,
          height: SIZES.height, 
          width: SIZES.width,
          paddingTop: insets.top,
          //paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,

        }}>
        {/*<ScrollView showsVerticalScroolIndicator = {false}>*/}
            <View
                style = {{ 
                  flex: 1, 
                  //padding: 20, 
                  //paddingTop: 5,
                  paddingHorizontal: scale(20)
                }}
            >
                {/*<Text>RecipeOptionsScreen</Text>*/}
                
                {/* Came from Category.js, will now go to Section 
                with recipes of xclusively breakfast type, having prop
                the category (breakfast) */}
                <FoundRecipes navigation = {navigation} recipeCategory = {recipeCategory} />
                
            </View>
        {/*</ScrollView>*/}
    </SafeAreaProvider>
  )
}

export default BreakfastRecipesScreen
