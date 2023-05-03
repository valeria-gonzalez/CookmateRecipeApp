import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import styles from './category.style';
import { icons, images, SIZES, verticalScale, COLORS } from '../../../constants';

const recipeType = ['Breakfast', 'Lunch', 'Dinner'];

const Category = ({navigation}) => {
  const [activeRecipeType, setActiveRecipeType] = React.useState('Breakfast');
  
  return (
    <View style = {styles.categoryContainer}>
        <View style = {styles.header}>
            <Text style = {styles.headerTitle}> Categories </Text>
        </View>

        <View style = {styles.listContainer}>
            <FlatList
                data = {recipeType}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item}) => (
                    <TouchableOpacity
                        style = {styles.tab(activeRecipeType, item)}
                        onPress = {() => {
                            setActiveRecipeType(item);
                            //navigate to the " Category recipes screen"  
                            //passing as prop the category (breakfast, lunch, dinner)
                            navigation.navigate(`${item}RecipesScreen`, {recipeCategory: item});
                        }}
                    >
                        <Image 
                        source = {images.chef}
                        style = {styles.tabImage}
                        resizeMode = 'cover'
                        />
                        <Text style = {styles.tabText(activeRecipeType, item)}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor = {item => item}
                contentContainerStyle = {{ columnGap : SIZES.small }}
                horizontal
                />

        </View>
    </View>
  )
}

export default Category