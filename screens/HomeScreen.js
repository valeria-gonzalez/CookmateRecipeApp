import { View, ScrollView, SafeAreaView, Text, Platform, StatusBar } from 'react-native';
import React from 'react';

import { COLORS, icons, images, SIZES, scale, verticalScale,
  
} from '../constants';
import { Welcome } from '../components';
import { Category } from '../components';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {

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
      }}>
        <ScrollView showsVerticalScroolIndicator = {false}
            contentContainerStyle = {{
              flex: 1,
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              //paddingHorizontal: scale(20),
              paddingVertical: verticalScale(15),
            }}
          >
            <Welcome />
            {/* Category List buttons here!! */}
            <Category navigation = {navigation} />
        </ScrollView>
    </SafeAreaProvider>
  );
}

