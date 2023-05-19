import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './welcome.style'
import { images } from '../../../constants'

const Welcome = () => {
  var userName = 'today';

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
