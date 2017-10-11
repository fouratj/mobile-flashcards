import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../store/actions'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.btn}
      >
      <Text style={styles.btnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}


class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  
  updateQuestion = (value) => {
    this.setState({ question: value })
  }

  updateAnswer = (value) => {
    this.setState({ answer: value })
  }

  submit = () => {
    const { question, answer } = this.props

    this.props.addCard({
      question: question,
      answer: answer,
      parent: this.props.navigation.state.params.deckId
    })

    this.setState({
      question: '',
      answer: ''
    })
  }


  render () {
    const id = this.props.navigation.state.params.deckId
    console.log(id)
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.updateQuestion(text)}
          value={this.state.question}
          style={styles.textInput}
          >
        </TextInput>

        <TextInput
          onChangeText={(text) => this.updateAnswer(text)}
          value={this.state.answer}
          style={styles.textInput}
          >
        </TextInput>

        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 48,
    textAlign: 'center'
  },
  btn: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 9,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  btnText: {
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#000',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 25,
    marginBottom: 25,
    height: 50,
    color: '#fff'
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (newCard) => {
      dispatch(addCard(newCard))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddCard)