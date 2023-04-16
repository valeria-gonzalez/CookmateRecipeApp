import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView, 

} from 'react-native'

import styles from './welcome.style'
import { icons, images, SIZES, COLORS } from '../../../constants'


//const recipeType = ['Breakfast', 'Lunch', 'Dinner'];

const Welcome = () => {
  var userName = 'Valeria';
  //const [activeRecipeType, setActiveRecipeType] = React.useState('Breakfast');
  //const { fontScale } = useWindwoDimensions();
  //const styles = styles(fontScale);

  return (
    <View style = {styles.container}>
      {/* Welcome message */} 
      <View style = {styles.welcomeContainer}>
        <Text style = {styles.discoverMsg}>Discover recipes &</Text>
        <Text style = {styles.userName}>let's get cooking, </Text>
        <Text style = {styles.userName}>{userName}!</Text>
      </View>
    

      {/* Instruction bubble*/}
      <View style = {styles.instructionContainer}>
        <View style = {styles.roundedContainer}>
          <Text style = {styles.instructionMsg}>Find recipes from 
            <Text style = {styles.bold}> all over</Text>
          </Text>
          <Text style = {styles.instructionMsg}>
            <Text style = {styles.bold}>the web </Text> 
            based on your
          </Text>
          <Text style = {styles.instructionMsg}>pantry and budget</Text>
        </View>

        <View style = {styles.groceryContainer}>
            <Image
              source = {images.groceries}
              resizeMode='contain'
              style = {styles.groceryImage}
            />
        </View>

      </View>

    </View>
  )
}

export default Welcome
