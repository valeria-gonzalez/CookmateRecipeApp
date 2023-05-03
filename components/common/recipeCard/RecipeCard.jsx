import { 
    Text, 
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import styles from './recipeCard.style'
import { icons, images, SIZES, COLORS} from '../../../constants'

const RecipeCard = ({recipeItem}) => {
    //console.log("recipeItem: ", recipeItem);
    return (
        <TouchableOpacity 
            style = {styles.cardContainer}
            //onPress = {onPress}
        >
            {/* Image */}
            <Image
                source = {{uri: recipeItem.image}}
                resizeMode = "cover"
                style = {styles.cardImage}
            />

            <View style = {styles.cardDetContainer}>
                {/*Name*/}
                <Text style = {styles.cardNameText}> 
                        {recipeItem.name} 
                </Text>

                <View style = {styles.cardPriceCont}>
                    <Text style = {styles.cardPriceText}>
                    {recipeItem.price}
                    </Text>
                </View>
            
                {/*Price*/}     
            </View>
           
           

        </TouchableOpacity>
    )
}

export default RecipeCard;

