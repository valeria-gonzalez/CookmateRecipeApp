import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import React from 'react';

import { COLORS, icons, images, SIZES } from '../constants';
import { Title } from '../components';
import { FoundRecipes } from '../components';

const DinnerRecipesScreen = ({ route, navigation }) => {
  const { recipeCategory } = route.params;
  return (
    <SafeAreaView
        style = {{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        {/*<ScrollView showsVerticalScroolIndicator = {false}>*/}
            <View
                style = {{ 
                  flex: 1, 
                  padding: SIZES.medium, 
                  paddingTop: 0,
                  backgroundColor: COLORS.lightWhite
                }}
            >
                {/*<Text>RecipeOptionsScreen</Text>*/}
                
                {/* Came from Category.js, will now go to Section 
                with recipes of xclusively breakfast type, having prop
                the category (breakfast) */}
                <FoundRecipes navigation = {navigation} recipeCategory = {recipeCategory} />
                
            </View>
        {/*</ScrollView>*/}
    </SafeAreaView>
  )
}

export default DinnerRecipesScreen

