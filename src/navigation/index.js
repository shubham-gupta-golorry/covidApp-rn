import React from 'react'
import { createAppContainer, NavigationEvents} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home'
import Countries from '../screens/Countries'
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator({
  Home: createStackNavigator({
    Home,
  },
  {
    headerMode:'none'
  }),
  Countries: createStackNavigator({
    Countries,
  },
  {
    headerMode:'none'
  })
},
{
  defaultNavigationOptions: ({navigation}) =>({
  tabBarIcon: ({tintColor }) => {
      const {routeName} = navigation.state
      let IconComponent = Ionicons
      let iconName
      if (routeName === 'Home'){
          iconName = 'md-home'
      }else if (routeName === 'Countries'){
          iconName = 'md-globe'
      }
  
      return <IconComponent name = {iconName} size = {25} color = {tintColor}></IconComponent>
  }
  }),
  
  tabBarOptions:{
      activeTintColor: '#000',
      activeBackgroundColor: '#f4511e',
  
      keyboardHidesTabBar: false,
      tabStyle: {
          backgroundColor: '#fff'
      },
  
      labelStyle: {
          fontSize: 12,
      }
  }
  }
)

export default createAppContainer(TabNavigator)