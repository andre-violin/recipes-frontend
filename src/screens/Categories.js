import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Categories({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/categories');
      if (!response.statusText === 'OK') {
        alert(`Não foi possível acessar a url, status ${response.status}`);
        return;
      }
      setCategories(response.data.data);
    } catch (error) {
      setError(error);
    }
  },[]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Categorias </Text>

      <FlatList
        data={categories}
        renderItem={({item}) => (
          <View>
            <Text>{item.attributes.name}</Text>
            <Text>{item.attributes.slug}</Text>
          </View>
          )}
      />

      {error && <Text>{error.message}</Text>}

      <TouchableOpacity onPress={() => navigation.navigate('AddCategorie')}>
        <Text>Adicionar categoria</Text>
      </TouchableOpacity>
    </View>
  );
}
