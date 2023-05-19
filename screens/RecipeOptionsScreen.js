import { View, SafeAreaView} from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { FoundRecipes } from '../components';


const RecipeOptionsScreen = ({ route, navigation }) => {
 const { recipeType } = route.params;
  return (
    <SafeAreaView
        style = {{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <View
                style = {{ 
                  flex: 1, 
                  padding: SIZES.medium, 
                  paddingTop: 0,
                  backgroundColor: COLORS.lightWhite
                }}
            >
                <FoundRecipes navigation = {navigation} type = {recipeType} />
            </View>
    </SafeAreaView>
    
  )
}

export default RecipeOptionsScreen