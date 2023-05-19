import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { 
  COLORS,
  icons, 
  SIZES,
} from '../constants';

import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/pantryScreen.style';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { db } from '../components/config';
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { set } from 'react-native-reanimated';


export default function PantryScreen({ navigation}) {
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState('');
  const user = 'SdxwmKk2uTarVfYqKVWg';
  const [ingredients, setIngredients] = useState([]);

  {/* Render Header of scren */}
  function renderHeader(){
    return (
      <View style = {styles.listHeaderCont}>
          <Text style = {styles.headerText}>My Pantry</Text>
      </View>
    )
  }

  {/* Render Search bar */}
  function renderSearchBar(){
    return(
      <View style = {styles.searchCont}>
        <TextInput 
          style = {styles.searchInput}
          placeholderTextColor={COLORS.gray}
          placeholder = "Search for ingredients"
          onChangeText = {setValue}
          value = {value}
        />
        <TouchableOpacity 
          style = {styles.searchIconCont}
          onPress = {() => navigation.navigate("SearchResultScreen", {searchFor: value, user: user})}
        >
          <Ionicons
            name = "search"
            size = {30}
            style = {styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }

  {/* Render Ingredient subtitle and count */}
  function renderIngredientTitle(){
    return (
      <View style = {styles.ingrTitleCont}>
        <Text style = {styles.ingredTitle}>
          Ingredients
        </Text>
        <Text style = {styles.ingredCountText}>
          {ingredients.length} items
        </Text>
      </View>
    )
  }

  {/* Database operations to collect user ingredients */}
  const handleDatabase = async () => {
    const colRef = collection(db, 'fav ingredients');
    const q = query(colRef, where('userID', '==', user));

    getDocs(q)
        .then((snapshot) => {
            const ingreds = []
            snapshot.docs.forEach((doc) => {
                const { description, userID } = doc.data()
                ingreds.push({
                    id: doc.id,
                    description,
                    userID,
                })
            })
            setIngredients(ingreds)
        })
        .catch(err => {
            console.log(err.message)
        })
  };

  useEffect(() => {
    //to call handleDatabase() when the screen is focused
    const unsubscribe = navigation.addListener('focus', () => {
      handleDatabase();
    });
    //return unsubscribe from event so it gets removed on unmount
    return unsubscribe;
  }, [navigation])

  return(
    <SafeAreaProvider 
      style = {{
        height: SIZES.height,
        width: SIZES.width,
        backgroundColor: COLORS.lightWhite,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        //paddingBottom: insets.bottom,
      }}
    >
      <FlatList
        data = {ingredients}
        showsVerticalScrollIndicator = {false}
        keyExtractor = {item => `${item.id}`}
        ListHeaderComponent = {
          <View>
            {/*Header title*/}
            {renderHeader()}

            {/*Search bar*/}
            {renderSearchBar()}

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
                {item.description}
              </Text>
            </View>

            {/* Delete icon */}
            <TouchableOpacity 
              style = {styles.deleteIconCont}
              //database function to delete ingredient from user here
              onPress = {() => {
                const documentID = item.id;
                const docRef = doc(db, 'fav ingredients', documentID);
                deleteDoc(docRef);
                setIngredients(ingredients.filter((item) => item.id !== documentID));
                //handleDatabase();
                //console.log(ingredients)
              }}
            >
              <Ionicons
                name = "close-circle"
                size = {30}
                style = {styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        )}


      />
      
    </SafeAreaProvider>
  );
}

