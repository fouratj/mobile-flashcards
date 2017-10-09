import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Decks extends Component {
  render () {
    const { decks } = this.props
    console.log(decks)
    return(
      <View>
        <Text>Decks</Text>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    decks: state
  }
}
export default connect(mapStateToProps)(Decks)