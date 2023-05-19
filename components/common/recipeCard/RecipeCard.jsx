import { 
    Text, 
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import styles from './recipeCard.style'

const RecipeCard = ({recipeItem, onPress}) => {
    return (
        <TouchableOpacity 
            style = {styles.cardContainer}
            onPress = {onPress}
        >
            {/* Image */}
            <Image
                source = {{uri: recipeItem.image}}
                resizeMode = "cover"
                style = {styles.cardImage}
            />

            <View style = {styles.cardDetContainer}>
                {/*Name*/}
                <Text 
                    style = {styles.cardNameText}
                    numberOfLines={4}
                > 
                        {recipeItem.name} 
                </Text>

                 {/*Price*/}  
                <View style = {styles.cardPriceCont}>
                    <Text 
                        numberOfLines={1}
                        style = {styles.cardPriceText}
                    >
                    {recipeItem.price} mins
                    </Text>
                </View>   
            </View>
           
           

        </TouchableOpacity>
    )
}

export default RecipeCard;

