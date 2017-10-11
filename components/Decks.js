import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import DeckInfo from './DeckInfo'
import { getDecks } from '../utils/storage'
import { addDeck } from '../store/actions'

class Decks extends Component {

  componentDidMount () {
    const { addDeck } = this.props
    getDecks()
      .then((decks) => {
        for (let d in decks) {
          addDeck(decks[d])
        }
    })
  }
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
            decks.map((deck, i) => {
              return (
                <DeckInfo 
                  style={styles.deck}
                  key={i}
                  deck={deck} 
                  onPress={() => this.props.navigation.navigate(
                    'Deck',
                    { deck: deck.title }
                  )} 
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

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => {
      dispatch(addDeck(deck))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)