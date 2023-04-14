import { View, Text, TouchableOpacity, FlatList, ActivityIndicator
} from 'react-native'

import React from 'react'

import styles from './foundRecipes.style'
import { icons, images, SIZES, COLORS, dummyData } from '../../../constants'
import RecipeCard from '../../common/recipeCard/RecipeCard';
import Title from '../title/Title';

const FoundRecipes = ({navigation, recipeCategory}) => {
    const isLoading = false;
    const error = false;

    return (
        <View style = {styles.cardsContainer}>
            { isLoading ? (
                <ActivityIndicator size = "large" color = {COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong </Text>
            ) : (
                <FlatList
                    data = {dummyData.categories}
                    keyExtractor = {item => `${item.id}`}
                    showsVerticalScrollIndicator = {false}
                    numColumns = {2}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    contentContainerStyle = {{rowGap: SIZES.large}}
                    horizontal = {false}
                    ListHeaderComponent = {
                        <View>
                            {/* prop is category so can display category type before list */}
                            <Title navigation = {navigation} recipeCategory = {recipeCategory} />
                        </View>
                    }
                    renderItem = {({ item }) => {
                        return (
                            <RecipeCard 
                                recipeItem = {item}
                                //by pressing any card, you'll go to the recipe screen
                                //passing as props the recipe category and the recipe item
                                //recipe category is necessary to return to options page if
                                //wanted
                                onPress = {() => navigation.navigate
                                    ('RecipeScreen', {recipe: item})}
                            />
                        )
                    }}
                    
                    // 
                />
            )} 
           
            
        </View>
       
    )
}

export default FoundRecipes

