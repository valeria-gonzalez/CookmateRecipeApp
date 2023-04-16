import { 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList,
    ActivityIndicator, 
    Animated
} from 'react-native'

import React, {useRef} from 'react'

import styles from './likedRecipes.style'
import { icons, images, SIZES, COLORS, dummyData, verticalScale } from '../../../constants'
import RecipeCard from '../../common/recipeCard/RecipeCard';
import LikesTitle from '../likesTitle/LikesTitle';

const LikedRecipes = ({navigation, recipeCategory}) => {
    const isLoading = false;
    const error = false;
    const scrollY = useRef(new Animated.Value(0)).current;

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
                    contentContainerStyle = {{rowGap: verticalScale(SIZES.large)}}
                    horizontal = {false}
                    ListHeaderComponent = {
                        <View>
                            {/* prop is category so can display category type before list */}
                            <LikesTitle navigation = {navigation} recipeCategory = {recipeCategory} />
                        </View>
                    }
                    //scrollEventThrottle={16}
                    /*onScroll = {
                        Animated.event([
                            {nativeEvent: {contentOffset: { y: scrollY}}}
                        ], {useNativeDriver: true})
                    }*/
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

                    ListFooterComponent = {
                        <View style = {{marginBottom: verticalScale(10)}} />
                    }
                    
                    // 
                />
            )} 
           
            
        </View>
       
    )
}

export default LikedRecipes

