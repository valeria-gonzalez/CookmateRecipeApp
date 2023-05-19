import {Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native'
import React from 'react'
import {COLORS, SIZES} from '../constants'
import styles from '../styles/loginScreen.style'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const imageLink = 'https://firebasestorage.googleapis.com/v0/b/recipeapp-427b6.appspot.com/o/icons%2Fmushroom.png?alt=media&token=c8cd2d9e-5bbe-4062-8f71-bcf9ada60f60';
  //const backLink = 'https://console.firebase.google.com/u/2/project/recipeapp-427b6/storage/recipeapp-427b6.appspot.com/files/~2Ficons';

  return(
    <SafeAreaProvider
      style = {{
        height: SIZES.height,
        width: SIZES.width,
        backgroundColor: COLORS.lightWhite,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
        <View 
          style={styles.container}
        >
          <View style = {styles.appLogo}>
            <Text style = {styles.logoTxt}>Cookmate</Text>
            <View style = {styles.loginDesc}>
              <Text style = {styles.descSubtitle}>
                Find recipes based on your pantry and budget using Web Scraping 
              </Text>
            </View>
          </View>


          <View style = {styles.imgCont}>
            <Image
              source = {{uri: imageLink}}
              style = {styles.loginImg}
              resizeMode = 'contain'
            />
          </View>

          <TouchableOpacity
              style = {styles.btnCont}
              onPress={() => navigation.replace('HomeScreen')}
          >
              <Text style = {styles.btnTxt}>
                Navigate to Home
              </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaProvider>

  );
}

export default LoginScreen
