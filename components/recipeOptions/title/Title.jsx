import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './title.style'
import { icons, images, SIZES } from '../../../constants'

const Title = ({navigation, recipeCategory}) => {
  return (
    <View>
        {/* Return button */}
        <TouchableOpacity 
            style = {styles.arrowContainer}
            onPress = {() => navigation.goBack()}
        >
            <Ionicons
                name = 'arrow-back'
                size = {40}
                style = {styles.icons}
            />
        </TouchableOpacity>

        {/* Title */}
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleHeading}>{recipeCategory}</Text>
      </View>

      <TouchableOpacity 
            style = {styles.filterContainer}
            onPress = {() => {}}
        >
            <Ionicons
                name = 'filter'
                size = {40}
                style = {styles.icons}
            />
        </TouchableOpacity>


    </View>
  )
}

export default Title

