import { 
    View, 
    Text,  
    FlatList,
    ActivityIndicator, 
    Animated
} from 'react-native'

import React, {useState, useEffect} from 'react'

import styles from './likedRecipes.style'
import { icons, images, SIZES, COLORS, 
    verticalScale, FONT 
} from '../../../constants'
import RecipeCard from '../../common/recipeCard/RecipeCard';
import LikesTitle from '../likesTitle/LikesTitle';
import { db } from '../../config';
import { collection, query, where, getDocs } from "firebase/firestore";

const LikedRecipes = ({navigation, recipeCategory}) => {
    const [recipes, setRecipes] = useState([]);
    
    const userID = 'SdxwmKk2uTarVfYqKVWg';

    const handleDatabaseFoundRecipes = async () => {
        const colRef = collection(db, 'fav recipes');
        const q = query(colRef, where('user', '==', userID));

        getDocs(q)
            .then((snapshot) => {
                const recipes = []
                snapshot.docs.forEach((doc) => {
                    const { name, category, image, price } = doc.data()
                    recipes.push({
                        id: doc.id,
                        name,
                        category,
                        image,
                        price,
                    })
                })
                setRecipes(recipes)
            })
            .catch(err => {
                console.log(err.message)
            })
    };

    useEffect(() => {
        const list = navigation.addListener('focus', () => {
            handleDatabaseFoundRecipes();
        });
        return list;
    }, [navigation])

    return (
        <View style = {styles.cardsContainer}>
                <FlatList
                    data = {recipes}
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
                    renderItem = {({ item }) => {
                        return (
                            <RecipeCard 
                                recipeItem = {item}
                                //by pressing any card, you'll go to the recipe screen
                                //passing as props the recipe category and the recipe item
                                //recipe category is necessary to return to options page if
                                //wanted
                                onPress = {() => navigation.navigate
                                    ('LikesRecipeScreen', {recipe: item})}
                            />
                        )
                    }}

                    ListFooterComponent = {
                        <View style = {{marginBottom: verticalScale(10)}} />
                    }
                    
                />
            
        </View>
       
    )
}

export default LikedRecipes

