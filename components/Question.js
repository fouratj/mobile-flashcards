import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Question extends Component {
  state = {
    visible: false,
    answer: null,
    answered: false,
  }
 
  update = (choice) => {
    const { state } = this
    this.setState({
      ...state,
      answer: choice
    }, () => {
      this.props.updateResults(choice)
    })
  }

  render() {
    return (
      <View style={styles.container}>

        {
          !this.state.visible && (
            <Text
              style={styles.question}>
                {this.props.question}
            </Text>
          )
        }
        
        {
          this.state.visible && (
            <Text
                style={styles.answer}>
                  {this.props.answer}
            </Text>
          )
        }
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({
              visible: !this.state.visible,
              answered: true
            })
          }}>
            {
              !this.state.visible ? 
              <Text>Show Answer</Text> :
              null
            }
        </TouchableOpacity>

        
          {
            this.state.answered && (
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.update(true)}
                  >
                  <Text style={styles.green}>Correct?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.update(false)}
                  >
                  <Text style={styles.red}>Incorrect?</Text>
                </TouchableOpacity>
              </View>
            )
          }

        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20
  },
  question: {
    fontSize: 24,
    textAlign: 'center',
    padding: 20
  },
  answer: {
    fontSize: 36,
    textAlign: 'center',
    padding: 20
  },
  showAnswer: {
  },
  showQuestion: {
  },
  nextQuestion: {
  },
  button: {
    height: 20,
    alignItems: 'center',
    padding: 20,
    margin: 10,
  },
  green: {
    height: 20,
    alignItems: 'center',
    padding: 20,
    margin: 10,
    backgroundColor: 'green'
  },
  red: {
    height: 20,
    alignItems: 'center',
    padding: 20,
    margin: 10,
    backgroundColor: 'red'
  }
})

export default Question