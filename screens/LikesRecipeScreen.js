import React, { useRef, useEffect, useState } from 'react';

import {
  Text,
  View, 
  TouchableOpacity,
  Image,
  Animated,
  FlatList
} from 'react-native';

import { COLORS, icons, SIZES, FONT } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db } from '../components/config';
import { collection, deleteDoc, query, where, getDoc, doc, deleteField } from "firebase/firestore";

import styles from '../styles/recipeScreen.style';

const HEADER_HEIGHT = 350;

const LikesRecipeScreen = ({navigation, route}) => {

  const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  const [recipeInfo, setRecipeInfo] = useState({});
  const scrollY = useRef( new Animated.Value(0)).current;

  //to handle recipe information
  const { recipe } = route.params
  const docId = recipe.id;

  React.useEffect(() => {
    setSelectedRecipe(recipe)
  }, [])
  //to handle saved button
  const [pressed, setPressed] = useState(false);
  
  const handlePress = async () => {
    if(!pressed){
      setPressed(true);
      // delete from database
      try{
        // Delete 'info1' document
        const info1DocRef = doc(collection(db, 'fav recipes', docId, 'info'), 'info1');
        await deleteDoc(info1DocRef);

        // Delete main document
        const mainDocRef = doc(collection(db, 'fav recipes'), docId);
        await deleteDoc(mainDocRef);

        console.log('Recipe successfully deleted');

      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  {/* Database operations to get recipe info */}
  const handleDatabaseRecipe = async () => {
    const docRef = doc(collection(db, 'fav recipes', docId, 'info'), 'info1');
    
    getDoc(docRef).then((doc) => {
        const { ingredients, steps } = doc.data();
        const numIngreds = ingredients.length;

        const recipeObj = {
            id: doc.id,
            ingredients,
            steps,
            numIngreds,
        }
        setRecipeInfo(recipeObj);
    }).catch((error) => {
        console.log("Error getting document:", error);
    })
  };

  useEffect(() => {
    handleDatabaseRecipe()
  }, [])
  
  {/* Recipe Header Bar (Back Button) */}
  function renderHeaderBar() {
    return(
      <View style = {styles.headerBarCont}>
        {/* Back Button */}
        <TouchableOpacity
          style = {styles.headerBarBackBtn}
          onPress = {() => navigation.goBack()}
        >
          <Ionicons
             name = 'chevron-back'
             size = {40}
             color = {COLORS.gray}
          />
        </TouchableOpacity>
      </View>
    )
  }

  {/* Recipe Card Header */}
  function renderRecipeCardHeader() {
    return(
      <View style = {styles.recipeCardHeaderCont}>
        {/* Background Image */}
        <Animated.Image
          source = {{uri: selectedRecipe?.image}}
          resizeMode = 'cover'
          style = {{
            height: HEADER_HEIGHT,
            width: '150%',
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
      <View style = {styles.recipeInfoCont}>

        {/* Recipe Name */}
        <View style = {styles.recipeInfoNameCont}>
          <Text 
            style = {styles.recipeInfoNameTxt}
            numberOfLines = {2}
          >
            {selectedRecipe?.name}
          </Text>

          {/* Recipe Price */}
          <View style = {styles.recipeInfoPriceCont}>
            <Text style = {styles.recipeInfoPriceTxt}>
              {selectedRecipe?.price} mins
            </Text>
          </View>

          {/*Recipe Description*/}
          <View style = {{marginTop: 20}}>
            <Text 
              //numberOfLines={4}
              style = {styles.recipeInfoDescrTxt} 
            >
              Find out how to make {selectedRecipe?.name}. Learn more
              at bowlsofdelicous.com!
            </Text>
          </View>
        </View>
      </View>
    )
  }

  {/* Ingredient Header */}
  function renderIngredientHeader(){
    return(
      <View style = {styles.ingredHeaderCont}>
        <Text style = {styles.ingredHeaderTxt}>
          Ingredients
        </Text>

        <Text style = {styles.ingredHeaderItemCntTxt}>
          {recipeInfo?.numIngreds} items
        </Text>
      </View>
    )
  }

  {/* Recipe Directions */}
  function renderRecipeDirections(){
    //const[savedRecipe, setSavedRecipe] = React.useState(savedRecipe?.isSaved)
    return(
      <View style = {styles.recipeDirecCont}>
        <Text style = {styles.recipeDirecText}>
          Directions
        </Text>

        <FlatList
          data = {recipeInfo?.steps}
          horizontal = {false}
          showsVerticalScrollIndicator = {false}
          renderItem = {({ item }) =>(
            <View style = {{ flexDirection: 'row' }}>
              <Text style = {{ color: COLORS.orange02 }}>
                {`\u25CF`}
              </Text>

              <Text style = {styles.recipeStepsTxt}>
                {item}
              </Text>
            </View>
          )}
        />
        
        <TouchableOpacity 
          style = {styles.recipeSaveBtnCont(pressed)}
          onPress = {handlePress} 
          disabled = {pressed}
        >
          {!pressed ? (
            <>
                <Ionicons
                  name = 'heart'
                  size = {35}
                  style = {{
                    color: COLORS.white,
                  }}
                />
                <Text style = {styles.recipeSaveBtnTxt}> Unsave </Text>
            </>
          ) : (
            <>
                <Ionicons
                  name = 'heart-dislike-outline'
                  size = {35}
                  style = {{
                    color: COLORS.white,
                  }}
                />
                <Text style = {styles.recipeSaveBtnTxt}> Unsaved </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <View
      style = {{
        flex: 1,
        backgroundColor: COLORS.lightWhite
      }}
    >
    
      <Animated.FlatList
        //data = {recipeInfo?.ingreds}
        data = {recipeInfo?.ingredients}
        //keyExtractor = {item => `${item.id}`}
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
              paddingRight: 10,
              paddingVertical: 7,
              marginHorizontal: 20,
              marginVertical: 5,
              //height: 60,
              width: '90%',
              backgroundColor: COLORS.tertiary,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center'
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
                {/*item.description*/}
                {item}
              </Text>
            </View>

            {/* Quantity 
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
              >
                {item.quantity}
              </Text>
            </View>*/}
           
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
            {renderRecipeDirections()}
          </View>
        }
      />

      {/* Header Bar */}
      {renderHeaderBar()}

    </View>
  )
  
}

export default LikesRecipeScreen;
