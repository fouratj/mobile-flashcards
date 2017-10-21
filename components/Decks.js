import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
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
    //console.log('got deck!')
  }

  render () {
    let { decks } = this.props
    if (decks)
      decks = Object.entries(decks).map(d => d[1])

    decks = decks.map((deck, i) => {
      return (
        <View style={( i % 2 === 0) ? styles.light : styles.grey} key={i}>
          <DeckInfo 
            deck={deck}
            onPress={() => this.props.navigation.navigate(
              'Deck',
              { deck: deck.title }
            )} 
          />
        </View>   
      )
    })

    if (decks.length) {
      return (
        <ScrollView>
          {decks}
        </ScrollView>
      )
    }

    return (
      <View>
        <Text>Nothing to see here...move along.</Text>
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
    padding: 10,
    backgroundColor: 'red',
    margin: 20,
  },
  light: {
    backgroundColor: '#f7f8f9',
    padding: 20
  },
  grey: {
    backgroundColor: '#cbd1db',
    padding: 20
  },
  text: {
    textAlign: 'center'
  },
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