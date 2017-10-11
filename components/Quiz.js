import React from 'react';
import { View, Text } from 'react-native'

class Quiz extends React.Component {
  render () {
    return (
    <View>
      <Text>{
        this.props.navigation.state.params.deckId
      }</Text>
    </View>
    )
  }
}

export default Quiz