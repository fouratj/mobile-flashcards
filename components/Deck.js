import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Deck extends React.Component {
  render () {
    const { deck } = this.props

    return (
      <View style={styles.deck}>
        <Text style={styles.text}>
          {deck.title}
        </Text>
        <Text style={styles.text}>
          
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    paddingTop: 20
  },
  text: {
    textAlign: 'center'
  }
})


export default Deck