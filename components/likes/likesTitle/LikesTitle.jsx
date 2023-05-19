import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './likesTitle.style'
import {verticalScale} from '../../../constants'

const LikesTitle = ({navigation, recipeCategory}) => {
  return (
    <View style = {{
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: verticalScale(20),
      paddingBottom: verticalScale(10),
    }}
    
    >
        {/* Title */}
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleHeading}>{recipeCategory}</Text>
        
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
    </View>
  )
}

export default LikesTitle

