import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Question extends Component {
  state = {
    visible: false
  }

  render() {
    return (
      <View style={styles.container}>

        {!this.state.visible && <Text
            style={styles.question}>
              {this.props.question}
          </Text>
        }
        
        {this.state.visible && <Text
            style={styles.answer}>
              {this.props.answer}
          </Text>
        }
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({
              visible: !this.state.visible
            })
          }}
          >
          {this.state.visible ? 
            <Text>Show Question</Text> :
            <Text>Show Answer</Text> 
          }
          
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  question: {
    fontSize: 24,
    textAlign: 'center'
  },
  answer: {
    fontSize: 36,
    textAlign: 'center'
  },
  showAnswer: {
  },
  showQuestion: {
  },
  nextQuestion: {
  },
  button: {
    height: 20,
    alignItems: 'center'
  }
})

export default Question