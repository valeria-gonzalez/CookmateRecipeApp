import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { 
  COLORS,
  icons, 
  SIZES,
} from '../constants';

import axios from 'axios';

import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/pantryScreen.style';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { db } from '../components/config';
import { collection, addDoc} from "firebase/firestore";

export default function SearchResultScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { searchFor, user } = route.params;
  //const [newIngredient, setNewIngredient] = useState([]);

  {/* Render Header of scren */}
  function renderHeader(){
    return (
      <View style = {styles.resultHeaderCont}>
        <View>
            <TouchableOpacity 
                onPress = {
                  () => {
                    navigation.goBack()
                  }
                }
            >
                <Ionicons
                    name = 'arrow-back'
                    size = {50}
                    style = {styles.returnIcon}
                />
            </TouchableOpacity>
        </View>
          <Text style = {styles.headerText}>Search Results</Text>
      </View>
    )
  }

  {/* Render Ingredient subtitle and count */}
  function renderIngredientTitle(){
    return (
      <View style = {styles.ingrTitleCont}>
        <Text style = {styles.ingredTitle}>
          Select an ingredient
        </Text>
        <Text style = {styles.ingredCountText}>
          {searchResult.length} results
        </Text>
      </View>
    )
  }

  {/* Search for ingredient functionality (CALL THE API) */}
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: 'GET',
        url: 'https://trackapi.nutritionix.com/v2/search/instant',
        headers: {
            "x-app-id": "479890b7",
            "x-app-key": "dae3daf6b062f4edcb75218f3b1bd484",
        },
        params: {
          query: searchFor, detailed: false, claims: false, 
          self: false, taxonomy: false, branded: false,
        },
      };

      axios.request(options).then(function (response) {
        const apiResponse = response.data;
        const matches_plus_deets = Object.values(apiResponse);
        const matches = matches_plus_deets[0].map(a => a.food_name);
        setSearchResult(matches);
      }).catch(
        function (error) {
          console.error("Error request ", error);
      })
    } catch(error){
      setSearchError(error);
      console.log('error', error);
    } finally {
      setSearchLoader(false);
    }
  };

  useEffect(() => {
    handleSearch()
  }, [])

  return(
    <SafeAreaProvider 
      style = {{
        height: SIZES.height,
        width: SIZES.width,
        backgroundColor: COLORS.lightWhite,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <FlatList
        data = {searchResult}
        showsVerticalScrollIndicator = {false}
        ListHeaderComponent = {
          <View>
            {/*Header title*/}
            {renderHeader()}

            {/* Ingredient subtitle and count */}
            {renderIngredientTitle()}
          
          </View>
        }
        renderItem = {({item}) => (
          <View style = {styles.ingredCard}>
            {/* Ingredient icon */}
            <View style = {styles.iconCont}>
              <Image
                source = {icons.ingredient}
                resizeMode = "contain"
                style = {styles.ingredIcon}
              />
            </View>

            {/* Ingredient description */}
            <View style = {styles.ingredDescCont}>
              <Text style = {styles.ingredDescText}>
                {item}
              </Text>
            </View>

            {/* Delete icon */}
            <TouchableOpacity 
              style = {styles.deleteIconCont}
              //database function here to add ingredient to user
              onPress = {() => {
                const userID = user;
                const ingredient = item;
                const colRef = collection(db, 'fav ingredients');
                addDoc(colRef, {
                  description: ingredient,
                  userID: userID,
                });
                //setNewIngredient(newIngredient => [...newIngredient, ingredient]);
              }}
            >
              <Ionicons
                name = "add-circle"
                size = {30}
                style = {styles.addIcon}
              />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent = {
          <View style = {{
            height: 20,
          }}>

          </View>
        } 

      />
      
    </SafeAreaProvider>
  );
}

