import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'

const { Screen, Navigator } = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='Search'
        component={Home}
      />
      <Screen
        name='Bookmark'
        component={Home}
      />
      <Screen
        name='Settings'
        component={Home}
      />
    </Navigator>
  )
}