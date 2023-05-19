import { 
    View, 
    Text,  
    FlatList,
    ActivityIndicator, 
    Image,
} from 'react-native'

import React, {useState, useEffect} from 'react'
import styles from './foundRecipes.style'
import { 
    SIZES, COLORS, 
    verticalScale, FONT,
} from '../../../constants';

import RecipeCard from '../../common/recipeCard/RecipeCard';
import Title from '../title/Title';
import axios from 'axios';

const FoundRecipes = ({navigation, recipeCategory}) => {
    const cat = 'https://firebasestorage.googleapis.com/v0/b/recipeapp-427b6.appspot.com/o/icons%2Fcat.png?alt=media&token=0d4f732d-0477-46ef-bf02-eb759de2c224';

    {/* Loading animation */}
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
      }, 15000);
    
    const [recipes, setRecipes] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);

    const handleRecipeSearch = async () => {
        setSearchLoader(true);
        setRecipes([]);

        try{
            const options = {
                method: 'GET',
                url: 'https://cookmate-api-production.up.railway.app/recipes',
                params: {
                    category: recipeCategory,
                    userID: 'SdxwmKk2uTarVfYqKVWg',
                }
            };

            axios.request(options).then(function(response){
              //console.log(response.data);
              const apiResponse = response.data;
              setRecipes(apiResponse);
            }).catch(
                function(error){
                    console.error('Error', error);
            })
        } catch(error){
            setSearchError(error);
            console.log('error', error);
        } finally{
            setSearchLoader(false);
        }
    };

    useEffect(() => {
        handleRecipeSearch();
    }, []);

    return (
        <View style = {styles.cardsContainer}>
            {loading ? (
                <View style = {styles.activityCont}>
                    <Text style = {styles.logo}>
                        Cookmate
                    </Text>
                    <View style = {styles.contentCont}>
                        <ActivityIndicator 
                            style = {styles.activity}
                            size = {"large"} 
                            visible = {loading}
                            color = {COLORS.primary} 
                        />
                        <Image
                            source = {{uri: cat}}
                            style = {styles.cat}
                            resizeMode='contain'
                        />
                    </View>
                    <View style = {styles.txtCont}>
                        <Text style = {styles.activityText}>
                            Finding recipes made for you...
                        </Text>
                    </View>
                </View>
            ) : (
            
                <FlatList
                    data = {recipes}
                    showsVerticalScrollIndicator = {false}
                    numColumns = {2}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    contentContainerStyle = {{rowGap: verticalScale(SIZES.large)}}
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
                    //keyExtractor = {item => `${item.id}`}
                    ListFooterComponent = {
                        <View style = {{marginBottom: verticalScale(10)}} />
                    }
                />
            )}
        </View>
    )
}

export default FoundRecipes

