import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import React from 'react';

import { COLORS, icons, images, SIZES } from '../constants';
import { Title } from '../components';
import { FoundRecipes } from '../components';


const RecipeOptionsScreen = ({ route, navigation }) => {
 const { recipeType } = route.params;
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
                
                <FoundRecipes navigation = {navigation} type = {recipeType} />
                
            </View>
        {/*</ScrollView>*/}
    </SafeAreaView>
    
    /*<View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>RecipeOptionsScreen</Text>
      <TouchableOpacity
          onPress={() => navigation.replace('HomeScreen')}
      >
          <Text>Navigate to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress={() => navigation.replace('RecipeScreen')}
      >
          <Text>Navigate to Recipe</Text>
      </TouchableOpacity>
    </View>*/
  )
}

export default RecipeOptionsScreen