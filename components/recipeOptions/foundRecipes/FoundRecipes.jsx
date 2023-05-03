import { 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList,
    ActivityIndicator, 
    Animated
} from 'react-native'

import React, {useState, useEffect} from 'react'
import styles from './foundRecipes.style'
import { 
    icons, images, SIZES, COLORS, 
    dummyData, verticalScale, FONT,
} from '../../../constants';

import RecipeCard from '../../common/recipeCard/RecipeCard';
import Title from '../title/Title';
import { firebase, db } from '../../config';
//import { collection, query, where, getDocs } from "firebase/firestore";

const FoundRecipes = ({navigation, recipeCategory}) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
      }, 800);
    
    const [recipes, setRecipes] = useState([]);
    const recipesRef = firebase.firestore().collection('recipes');
    //const q = query(collection(db, "recipes"), where("category", "==", "Lunch"));
    useEffect(() => {
        const loadData = async () => {
            recipesRef.onSnapshot(
                querySnapshot => {
                    const recipes = []
                    querySnapshot.forEach((doc) => {
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
                }
            )
        };

        loadData();
    }, []);

    return (
        <View style = {styles.cardsContainer}>
            {loading ? (
                <View style = {{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    padding: 20,
                }}
                >
                    <ActivityIndicator 
                        size = {"large"} 
                        visible = {loading}
                        color = {COLORS.primary} 
                    />
                    <Text style = {{
                        color: COLORS.primary,
                        fontFamily: FONT.bold,
                        fontSize: SIZES.xLarge + 5,
                        //alignSelf: 'center',
                    }}>
                        Cooking up your recipes...
                    </Text>
                </View>
            ) : (
            
                <FlatList
                    //data = {dummyData.categories}
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
                                //onPress = {() => navigation.navigate
                                    //('RecipeScreen', {recipe: item})}
                            />
                        )
                    }}
                    keyExtractor = {item => `${item.id}`}
                    ListFooterComponent = {
                        <View style = {{marginBottom: verticalScale(10)}} />
                    }
                />
            )}
        </View>
    )
}

export default FoundRecipes

