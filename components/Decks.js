import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import DeckInfo from './DeckInfo'


class Decks extends Component {
  getDeck = () => {
    console.log('got deck!')
  }

  render () {
    let { decks } = this.props

    if (decks)
      decks = Object.entries(decks).map(d => d[1])
    
    if (decks) {
      return(
        <View style={styles.container}>
          {
            decks.map(deck => {
              return (
                <DeckInfo 
                  style={styles.deck}
                  deck={deck} 
                  onPress={() => this.props.navigation.navigate(
                    'Deck',
                    { deck: deck.title }
                  )} 
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
    flexDirection: 'column',
  },
  deck: {
    flex: 1,
    paddingTop: 20
  },
  text: {
    textAlign: 'center'
  },
  deck: {
    marginTop: 30,
    marginBottom: 30
  }
})

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}
export default connect(mapStateToProps)(Decks)