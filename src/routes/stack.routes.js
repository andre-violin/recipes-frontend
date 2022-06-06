import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Recipe from '../screens/Recipe'
import Categories from '../screens/Categories'
import AddCategorie from '../screens/AddCategorie'
import TabNavigation from './tab.routes'

const { Screen, Navigator } = createNativeStackNavigator()

export default function StackNavigation() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Login'
    >
      <Screen
        name='Login'
        component={Login}
      />
      <Screen
        name='Home'
        component={TabNavigation}
      />
      <Screen
        name='Recipe'
        component={Recipe}
      />
      <Screen
        name='Categories'
        component={Categories}
      />
      <Screen
        name='AddCategorie'
        component={AddCategorie}
      />
    </Navigator>
  )
}