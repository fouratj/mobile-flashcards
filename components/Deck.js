import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import DeckInfo from './DeckInfo'

class Deck extends React.Component {
  render () {
    console.log(this.props)
    const id = this.props.navigation.state.params.deck
    console.log(id)
    const deck = this.props.decks[id]
    console.log(deck)
    return (
      <View style={styles.deck}>

        <DeckInfo deck={deck} />

        <View>
          <TouchableOpacity>
            <Text style={styles.btn}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[styles.btn, styles.black]}>Start Quiz</Text>
          </TouchableOpacity>
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