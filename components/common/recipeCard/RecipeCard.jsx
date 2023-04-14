import { 
    Text, 
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import styles from './recipeCard.style'
import { icons, images, SIZES, COLORS} from '../../../constants'

const RecipeCard = ({recipeItem, onPress}) => {
    return (
        <TouchableOpacity 
            style = {styles.cardContainer}
            onPress = {onPress}
        >
            {/* Image */}
            <Image
                source = {recipeItem.image}
                resizeMode = "cover"
                style = {styles.cardImage}
            
            />
            {/*Detail*/}
            <View style = {styles.cardDetContainer}>
                {/*Name*/}
                <Text style = {styles.cardNameText}> 
                    {recipeItem.name} 
                </Text>
                {/*Price*/}
                <View style = {styles.cardPriceCont}>
                    <Text style = {styles.cardPriceText}>
                        {recipeItem.price}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default RecipeCard;

