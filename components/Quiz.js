import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Question from './Question'

class Quiz extends React.Component {
  state = {
    questions: 0,
    results: 0
  }

  update = (result) => {
    this.setState({
      ...this.state,
      results: results++
    })
  }

  componentDidMount() {
    const { deckId } = this.props.navigation.state.params
    const { decks } = this.props
    const deck = decks[deckId]

    this.setState({
      ...this.state,
      questions: deck.questions.length
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    const { deckId } = this.props.navigation.state.params
    const { decks } = this.props
    const deck = decks[deckId]
    return (
      <View style={{flex: 1}}>
        { deck.questions.length && deck.questions.map(q => {
          return <Question 
                    question={q.question} 
                    answer={q.answer}
                    key={q.question}
                    updateResults={this.update} />
          })
        }
        <Text style={styles.text}>{this.state.results} / {this.state.questions}</Text>
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