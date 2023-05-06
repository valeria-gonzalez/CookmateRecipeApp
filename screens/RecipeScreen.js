import React, { useRef, useEffect, useState } from 'react';

import {
  Text,
  View, 
  TouchableOpacity,
  Image,
  Animated,
  FlatList
} from 'react-native';

import { COLORS, icons, images, SIZES, FONT } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db } from '../components/config';
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

const HEADER_HEIGHT = 350;

const RecipeScreen = ({navigation, route}) => {

  const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  const [recipeInfo, setRecipeInfo] = useState({});
  const scrollY = useRef( new Animated.Value(0)).current;

  const { recipe } = route.params

  React.useEffect(() => {
    //let { recipe } = route.params
    setSelectedRecipe(recipe)
  }, [])

  //database operations to get recipe info
  //const dbRoute = 'recipes/' + recipe.id +'/info/info1';
  //const colRef = collection(db, dbRoute); //obtain recipe info
  /*getDocs(colRef)
      .then((snapshot) => {
          const recipeInfo = []
          snapshot.docs.forEach((doc) => {
            const {ingredients, steps, summary} = doc.data()
            recipeInfo.push({
              ingredients,
              steps,
              summary,
            })
          })
          setSelRecipeInfo(recipeInfo)
      })
      .catch(err => {
        console.log(err.message)
      })*/
    /*getDoc(colRef)
      .then((doc) => {
        const { ingredients, steps, summary } = doc.data()
        const recipeInfo = {
          ingredients,
          steps,
          summary,
        }
        setSelRecipeInfo(recipeInfo)
      })*/


  const docRef = doc(db, 'recipes', recipe.id, 'info', 'info1');

 
 /*useEffect(() => {
    const fetchRecipeInfo = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()){
        //const {ingredients, steps, summary } = docSnap.data();
        const recipeInfoObj = {
         id: docSnap.id,
         ...docSnap.data(),
        };
        setRecipeInfo(recipeInfoObj);
      } else {
        console.log('No such document');
      }
    };
    fetchRecipeInfo;
  }, []);*/
  getDoc(docRef)
      .then((doc) => {
        const {ingredients, steps, summary} = doc.data();
        const ingredientList = Object.entries(ingredients); //not sure about this
        const recipeObj = {
          id: doc.id,
          //...doc.data(),
          ingredientList,
          steps,
          summary,
        }
        setRecipeInfo(recipeObj)
      })
  

  function renderHeaderBar() {
    return(
      <View
        style = {{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 90,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.small,
            paddingBottom: 10
        }}
      >

        {/* Back Button */}
        <TouchableOpacity
          style = {{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: COLORS.gray2,
            backgroundColor: COLORS.white
          }}
          onPress = {() => navigation.goBack()}
        >
          <Ionicons
             name = 'chevron-back'
             size = {30}
             color = {COLORS.gray}
          />
          
        </TouchableOpacity>

      </View>
    )
  }

  {/* Recipe Card Header */}
  function renderRecipeCardHeader() {
    return(
      <View
        style = {{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Background Image */}
        <Animated.Image
          source = {{uri: selectedRecipe?.image}}
          resizeMode = 'contain'
          style = {{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, 
                  HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT/2, 0, 
                  HEADER_HEIGHT * 0.75]
                })
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0,
                  HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75]
                })
              }
            ]
          }}
        />
        
      </View>
    )
  }

  {/* Recipe Info */}
  function renderRecipeInfo(){
    return(
      <View
        syle = {{
          flexDirection: 'row',
          height: 250,
          width: SIZES.width,
          //paddingHorizontal: 30,
          //paddingVertical: 20,
          //alignItems: 'center',
          //backgroundColor: COLORS.primary
        }}
      >
        {/* Recipe Name */}
        <View
          style = {{
            flex: 1.5,
            justifyContent: 'center',
            padding: 20
          }}
        >
          <Text
            style = {{
              fontFamily: FONT.black,
              color: COLORS.primary,
              fontSize: SIZES.xxxLarge-3,
            }}
          >
            {selectedRecipe?.name}
          </Text>
          {/* Recipe Price */}
          <View style = {{
            backgroundColor: COLORS.orange02,
            marginTop: 13,
            width: '40%',
            height: 35,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style = {{
              fontFamily: FONT.bold,
              color: COLORS.white,
              fontSize: SIZES.large
            }}>
              {selectedRecipe?.price}
            </Text>
          </View>
          {/* Recipe Description */}
          <View style = {{
            marginTop: 20
          }}>
            <Text style = {{
              fontFamily: FONT.regular,
              color: COLORS.gray,
              fontSize: SIZES.medium,
            }} >
              {/*selectedRecipe?.description*/}
              {recipeInfo?.summary} 
            </Text>
          </View>
        </View>
      </View>
    )
  }

  {/* Ingredient Header */}
  function renderIngredientHeader(){
    return(
      <View
        style = {{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingRight: 30,
          //marginTop: SIZES.small,
          marginBottom: SIZES.small,
          //backgroundColor: COLORS.gray
        }}
      >
        <Text style = {{
          flex: 1,
          fontFamily: FONT.bold,
          color: COLORS.primary,
          fontSize: SIZES.large
        }}
        >
          Ingredients
        </Text>

        <Text style = {{
          fontFamily: FONT.regular,
          color: COLORS.black01,
          fontSize: SIZES.medium

        }}
        >
          {/*selectedRecipe?.ingredients.length*/} {/*recipeInfo?.ingredients*/} items
        </Text>

      </View>
    )
  }

  {/* Recipe Directions */}
  /*function renderRecipeDirections(){
    //const[savedRecipe, setSavedRecipe] = React.useState(savedRecipe?.isSaved)
    return(
      <View style = {{
        paddingLeft: 10,
        paddingRight: 25
      }}
      >
        <Text style = {{
          fontFamily: FONT.bold,
          color: COLORS.primary,
          fontSize: SIZES.large,
          marginBottom: 10
        }}
        >
          Directions
        </Text>

        <FlatList
          //data = {selectedRecipe?.directions}
          data = {selRecipeInfo?.steps}
          horizontal = {false}
          showsVerticalScrollIndicator = {false}
          renderItem = {({ item}) =>(
            <View style = {{
              flexDirection: 'row'
            }}>
              <Text style = {{
                color: COLORS.orange02
              }}>
              {`\u25CF`}
              </Text>
              <Text style = {{
                fontFamily: FONT.regular,
                color: COLORS.gray3,
                fontSize: SIZES.medium,
                lineHeight: 25,
                marginLeft: 10,
                marginTop: -5,
                marginBottom: 15
              }}
              >
                {item}
              </Text>
            </View>
          )}
        />
        
        <TouchableOpacity style = {{
          flexDirection: 'row',
          backgroundColor: COLORS.orange02,
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          width: '104%',
          borderRadius: SIZES.xLarge
        }}
        >
          <Ionicons
            name = 'heart'
            size = {30}
            style = {{
              color: COLORS.white,
            }}
          />
          <Text style = {{
            fontFamily: FONT.bold,
            color: COLORS.white,
            fontSize: SIZES.large
          }}> Save </Text>
        </TouchableOpacity>

      </View>
    )
  }*/
  return (
    <View
      style = {{
        flex: 1,
        backgroundColor: COLORS.lightWhite
      }}
    >
    
      <Animated.FlatList
        data = {recipeInfo?.ingredients}
        keyExtractor = {item => `${item.id}`}
        showsVerticalScrollIndicator = {false}
        ListHeaderComponent = {
          <View>
            {/* Header */}
            {renderRecipeCardHeader()}

            {/* Info */}
            {renderRecipeInfo()}

            {/* Ingredient Title */}
            {renderIngredientHeader()}

          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ], { useNativeDriver: true })}
        renderItem = {({ item }) => (
          <View
            style = {{
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 30,
              paddingVertical: 7,
              marginHorizontal: 20,
              marginVertical: 5,
              height: 60,
              width: '90%',
              backgroundColor: COLORS.tertiary,
              borderRadius: 10
            }}
          >
            {/* Icon */}
            <View
              style = {{
                alignItems: 'center',
                justifyContent: 'center',
                height: 45,
                width: 45,
                borderRadius: 5,
                backgroundColor: COLORS.white
              }}
            >
              <Image 
                source = {icons.ingredient}
                style = {{
                  height: 40,
                  width: 40,
                }}
              />
            </View>

            {/* Description */}
            <View
              style = {{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center'
              }}
            >
              <Text
                style = {{
                  fontFamily: FONT.regular,
                  color: COLORS.black04,
                  fontSize: SIZES.medium
                }}
              >
                {item.description}
              </Text>
            </View>

            {/* Quantity */}
            <View
              style = {{
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}
            >
              <Text
                style = {{
                  fontFamily: FONT.bold,
                  color: COLORS.gray3,
                }}
              >hi
                {item.quantity}
              </Text>
            </View>
           
          </View>
        )}
        ListFooterComponent = {
          <View style = {{
            marginTop: -5,
            marginBottom: 30,
            padding: 20
          }}
          >
            {/*Directions*/}
            {/*renderRecipeDirections()*/}
          </View>
        }
      />

      {/* Header Bar */}
      {renderHeaderBar()}

    </View>
  )
  
}

export default RecipeScreen;
