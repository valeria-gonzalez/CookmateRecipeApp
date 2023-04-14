import React from 'react';
import { View, Text } from 'react-native';

/*const PantryScreen = () => {
  return (
    <View>
      <Text>Pantry Screen</Text>
    </View>
  );
};

export default PantryScreen;*/

export default function PantryScreen({ navigation }) {
  return(
    <View 
      style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
        <Text
            onPress = {() => navigation.navigate('Home')}
            style = {{ fontSize: 26, fontWeight: 'bold' }}> Pantry Screen </Text>
    </View>
  );
}

