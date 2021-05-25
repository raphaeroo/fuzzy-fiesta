import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { HomeScreen, QuestionScreen, ResultsScreen } from '../screens'

const { Screen, Navigator } = createNativeStackNavigator()
export const Router = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerTopInsetEnabled: false }}>
        <Screen
          name="HomeScreen"
          component={HomeScreen}
          /*
            Estou definindo algumas propriedades no header do próprio navigation
            como title, color do title, e cor do background
          */
          options={{
            headerTitle: 'Quizz App',
            headerTitleStyle: { color: 'white' },
            headerStyle: {
              backgroundColor: '#192938'
            },
            headerHideBackButton: true
          }}
        />
        <Screen
          name="QuestionScreenA"
          component={QuestionScreen}
          options={{
            headerTitleStyle: { color: 'white' },
            headerStyle: {
              backgroundColor: '#192938'
            },
            replaceAnimation: 'push',
            headerHideBackButton: true
          }}
        />
        <Screen
          name="QuestionScreenB"
          component={QuestionScreen}
          options={{
            headerTitleStyle: { color: 'white' },
            headerStyle: {
              backgroundColor: '#192938'
            },
            replaceAnimation: 'push',
            headerHideBackButton: true
          }}
        />
        <Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{
            headerTitleStyle: { color: 'white' },
            headerStyle: {
              backgroundColor: '#192938'
            },
            replaceAnimation: 'push',
            headerHideBackButton: true
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
