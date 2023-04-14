import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native'

import styles from './welcome.style'
import { icons, images, SIZES } from '../../../constants'


//const recipeType = ['Breakfast', 'Lunch', 'Dinner'];

const Welcome = () => {
  var userName = 'Valeria';
  //const [activeRecipeType, setActiveRecipeType] = React.useState('Breakfast');

  return (
    <View>
      {/* Welcome message */} 
      <View style = {styles.welcomeContainer}>
        <Text style = {styles.discoverMsg}>Discover recipes &</Text>
        <Text style = {styles.userName}>let's get cooking, </Text>
        <Text style = {styles.userName}>{userName}!</Text>
      </View>

      {/* Instruction bubble*/}
      <View style = {styles.roundedContainer}>
        <Text style = {styles.instructionMsg}>Find recipes from all over</Text>
        <Text style = {styles.instructionMsg}>the web based on your</Text>
        <Text style = {styles.instructionMsg}>pantry and budget</Text>
      </View>
      
      {/* Grocery image */}
      <View style = {styles.groceryContainer}>
        <Image
          source = {images.groceries}
          style = {styles.groceryImage}
          resizeMode = 'contain'
        />
      </View>

    </View>
  )
}

export default Welcome

/*<FlatList
          data = {recipeType}
          renderItem = {({item}) => (
            <TouchableOpacity
              style = {styles.tab(activeRecipeType, item)}
              onPress = {() => setActiveRecipeType(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor = {item => item}
          contentContainerStyle = {{ columnGap : SIZES.small }}
          horizontal
        />*/