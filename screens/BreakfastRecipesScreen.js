import { View} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


import { COLORS, SIZES, scale } from '../constants';
import { FoundRecipes } from '../components';

const BreakfastRecipesScreen = ({ route, navigation }) => {
  const { recipeCategory} = route.params;
  const insets = useSafeAreaInsets();
  
  return (

    <SafeAreaProvider 
        style = {{ 
          backgroundColor: COLORS.lightWhite,
          height: SIZES.height, 
          width: SIZES.width,
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,

        }}>
      
            <View
                style = {{ 
                  flex: 1, 
                  paddingHorizontal: scale(20)
                }}
            >
                
                {/* Came from Category.js, will now go to Section 
                with recipes of xclusively breakfast type, having prop
                the category (breakfast) */}
                <FoundRecipes navigation = {navigation} recipeCategory = {recipeCategory} />
            </View>
    </SafeAreaProvider>
  )
}

export default BreakfastRecipesScreen
