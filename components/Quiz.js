import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

function Question ({ question }) {  
  return (
    <View>
        <Text style={styles.header}>{question}</Text>
    </View>
  )
}

class Quiz extends React.Component {

  render () {
    const { deckId } = this.props.navigation.state.params
    const { decks } = this.props
    const deck = decks[deckId]
    
    return (
      <View style={{flex: 1}}>
        { deck.questions.length && deck.questions.map(q => {
          return <Question question={q.question} key={q.question} />
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    textAlign: 'center',
    shadowRadius: 3,
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

export default connect(mapStateToProps, null)(Quiz)