import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {images, FONT, COLORS} from '../constants'

const LoginScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text
         style = {{ fontSize: 26, fontWeight: 'bold' }}
      >
        Login under construction
        </Text>
      <TouchableOpacity
          onPress={() => navigation.replace('HomeScreen')}
      >
          <Text style = {{
            fontSize: 26,
            marginTop: 20,
            marginLeft: 10,
            fontFamily: FONT.bold,
            color: COLORS.primary,
          }}>Navigate to Home</Text>
          <Image
            source = {images.construction}
            style = {{
              width: 300,
              height: 300,
              marginTop: 30,
            }
            }
          />
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

//const styles = StyleSheet.create({})