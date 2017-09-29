/**
 *
 *  Simple React Native App Taht Generates a Random Number
 *
 */

import React from 'react'
import { Text, View, Button, AppRegistry } from 'react-native'

const generateRandom = () => alert( Math.random() * 10 )

const App = () => {
  return (
    <View>
      <Text>Helo World</Text>
      <Button title="Gerar numero randomico" onPress={ generateRandom } />
    </View>
  )
}

AppRegistry.registerComponent('random', () => App )
