import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function AddCategorie({ navigation }) {
  const [categorie, setCategorie] = useState({
    name: "",
    slug: ""
  })
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Adicionar Categoria</Text>

      <View>
        <TextInput 
          onChangeText={text => setCategorie({ ...categorie, name: categorie.name })}
          value={categorie.name}
          placeholder="Nome"
        />
        <TextInput 
          onChangeText={text => setCategorie({ ...categorie, slug: categorie.slug })}
          value={categorie.slug}
          placeholder="Slug"
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>Salver</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity onPress={() => navigation.navigate('Recipe')}>
        <Text>Navegar para Receita</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
        <Text>Navegar para Categorias</Text>
      </TouchableOpacity>
    </View>
  );
}
