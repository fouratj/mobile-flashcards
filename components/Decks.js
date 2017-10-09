import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'

class Decks extends Component {
  render () {
    const { state } = this.props
    console.log(state)
    return(
      <View>
        <Text>Decks</Text>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    state: state
  }
}
export default connect(mapStateToProps)(Decks)