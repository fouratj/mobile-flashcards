import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'

function DeckInfo ({ deck, onPress }) {
  return (
      <TouchableOpacity
        onPress={onPress}>
          <Text style={styles.text}>{deck.title}</Text>
          <Text style={styles.text}>{deck.questions.length}</Text>
      </TouchableOpacity>
    )
}

class Decks extends Component {
  getDeck = () => {
    console.log('got deck!')
  }

  render () {
    let { decks } = this.props
    console.log(decks)
    if (decks)
      decks = Object.entries(decks).map(d => d[1])
    
    console.log(decks)
    if (decks) {
      return(
        <View style={styles.container}>
          {
            decks.map(deck => {
              return (
                <DeckInfo 
                  deck={deck} 
                  onPress={this.getDeck} 
                  key={deck.title}
                  />
              )
            })
          }
        </View>
      )
    }

    return (
      <View>
        <Text>No decks here...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  deck: {
    flex: 1,
    paddingTop: 20
  },
  text: {
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}
export default connect(mapStateToProps)(Decks)