import * as React from 'react';
import { View, Text } from 'react-native';

/*const LikesScreen = () => {
  return (
    <View>
      <Text>Likes Screen</Text>
    </View>
  );
};

export default LikesScreen;*/

export default function LikesScreen({ navigation }) {
  return(
    <View 
      style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
        <Text
            onPress = {() => navigation.navigate('Home')}
            style = {{ fontSize: 26, fontWeight: 'bold' }}
        > Likes Screen </Text>
    </View>
  );
}