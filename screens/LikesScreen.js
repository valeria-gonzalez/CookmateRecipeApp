import { View} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


import { COLORS, SIZES, scale } from '../constants';
import { LikedRecipes } from '../components';

const LikesScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const recipeCategory = "My Recipes";
  return(
    <SafeAreaProvider 
      style = {{ 
        backgroundColor: COLORS.lightWhite,
        height: SIZES.height, 
        width: SIZES.width,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,

      }}>
      {/*<ScrollView showsVerticalScroolIndicator = {false}>*/}
          <View
              style = {{ 
                flex: 1, 
                paddingHorizontal: scale(20)
              }}
          >
              {/*<Text>RecipeOptionsScreen</Text>*/}
              
              {/* Came from Category.js, will now go to Section 
              with recipes of xclusively breakfast type, having prop
              the category (breakfast) */}
              <LikedRecipes navigation = {navigation} recipeCategory = {recipeCategory} />
              
          </View>
      {/*</ScrollView>*/}
    </SafeAreaProvider> 
  )
}

export default LikesScreen