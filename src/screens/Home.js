import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home</Text>


      <TouchableOpacity onPress={() => navigation.navigate('Recipe')}>
        <Text>Navegar para Receita</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
        <Text>Navegar para Categorias</Text>
      </TouchableOpacity>
    </View>
  );
}
