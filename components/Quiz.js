import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Question from './Question'

class Quiz extends React.Component {
  state = {
    questions: 0,
    results: 0,
    curr: 0
  }

  update = (result) => {
    let change = 0;
    console.log(result)
    if (result  === true) {
      change += 1
    } else if (result === false) {
      change -= 1
    }
    this.setState({
      ...this.state,
      results: this.state.results + change
    })
  }

  nextQuestion = () => {
    this.setState({
      ...this.state,
      curr: this.state.curr + 1
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
    const { curr } = this.state
    return (
      <View style={{flex: 1}}>
          { deck.questions.length && deck.questions[curr] ? (
            <Question 
              question={deck.questions[curr].question} 
              answer={deck.questions[curr].answer}
              updateResults={this.update}
              next={this.nextQuestion}
              key={curr} />
            ) :
            <Text> Quiz Finished</Text>
          }
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.nextQuestion }>

          <Text>Skip Question</Text>
            
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{this.state.results} / {this.state.questions}</Text>
        </View>
        
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
  },
  button: {
    height: 20,
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps, null)(Quiz)