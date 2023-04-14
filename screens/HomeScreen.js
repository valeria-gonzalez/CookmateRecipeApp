import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import React from 'react';

import { COLORS, icons, images, SIZES } from '../constants';
import { Welcome } from '../components';
import { Category } from '../components';

export default function HomeScreen({navigation}) {
  return(
    <SafeAreaView 
      style = {{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScrollView showsVerticalScroolIndicator = {false}>
          <View
            style = {{ flex: 1, padding: SIZES.medium, backgroundColor: COLORS.lightWhite
            }}
          >
            <Welcome />
            {/* Category List buttons here!! */}
            <Category navigation = {navigation} />
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

/*const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;*/

/* 
<Text
          onPress = {() => alert('This is the "Home" screen.')}
          style = {{ fontSize: 26, fontWeight: 'bold' }}> 
          Home Screen 
        </Text>
*/