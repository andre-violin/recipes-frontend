import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Navegar para Home</Text>
      </TouchableOpacity>
    </View>
  )
}