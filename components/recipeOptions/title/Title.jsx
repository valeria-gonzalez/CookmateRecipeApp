import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './title.style'
import { icons, images, SIZES, COLORS, verticalScale} from '../../../constants'

const Title = ({navigation, recipeCategory}) => {
  return (
    <View style = {{
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: verticalScale(5),
    }}
    
    >
        {/* Return button */}
      <View>
        <TouchableOpacity 
            style = {styles.arrowContainer}
            onPress = {() => navigation.goBack()}
        >
            <Ionicons
                name = 'arrow-back'
                size = {50}
                style = {styles.icons}
            />
        </TouchableOpacity>
      </View>

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

export default Title

