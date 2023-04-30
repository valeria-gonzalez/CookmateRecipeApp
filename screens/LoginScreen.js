import {Text, View, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native'
import React from 'react'
import {images, FONT, COLORS, SIZES} from '../constants'
import styles from '../styles/loginScreen.style'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
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
      <ScrollView showsVerticalScroolIndicator = {false}
          contentContainerStyle = {{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
      >
          <View
            style={{
              //flex: 1,
              //flexDirection: 'column',
              //justifyContent: 'space-around',
              alignItems: 'center',
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
      </ScrollView>
    </SafeAreaProvider>

  );

  /*return (
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
  )*/
}

export default LoginScreen

//const styles = StyleSheet.create({})