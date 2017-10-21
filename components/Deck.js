import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import DeckInfo from './DeckInfo'

class Deck extends React.Component {
  render () {
    const id = this.props.navigation.state.params.deck
    const deck = this.props.decks[id]
    
    return (
      <View style={styles.deck}>

        <DeckInfo deck={deck} />

        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
                    'AddCard',
                    { deckId: id }
            )}>
            <Text style={styles.btn}>Add Card</Text>
          </TouchableOpacity>
          
          { deck.questions.length ?
              <TouchableOpacity onPress={() => this.props.navigation.navigate(
                'Quiz',
                { deckId: id }
              )}>
                <Text style={[styles.btn, styles.black]}>Start Quiz</Text>
              </TouchableOpacity>
              :
              null
          }
          
        </View>
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
  },
  btns: {

  },
  btn: {
    textAlign: 'center',
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 17,
    borderWidth: 1,
  },
  white: {
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#000',
  },
  black: {
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#fff',
  }
})

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Deck)