import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { 
  COLORS,
  icons, 
  images, 
  SIZES,
  dummyIngredients
} from '../constants';

import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/pantryScreen.style';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


export default function PantryScreen({ navigation }) {

  const insets = useSafeAreaInsets();

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
        <Ionicons
          name = "search"
          size = {30}
          style = {styles.searchIcon}
        />
        <TextInput 
          style = {styles.searchInput}
          placeholderTextColor={COLORS.gray}
          placeholder = "Search for ingredients"
        />   
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
          {dummyIngredients.pantry.length} items
        </Text>
      </View>
    )
  }

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
        data = {dummyIngredients.pantry}
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
              //onPress = {() => {}}
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

