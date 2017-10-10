import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../store/actions'

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

class NewDeck extends React.Component {
  state = {
    name: ''
  }

  updateName = (value) => {
    this.setState({ name: value })
  }

  submit = () => {
    this.props.addDeck(this.state.name)
    this.setState({
      name: ''
    })
  }

  render () {
    return (
      <View>
        <Text style={styles.header}>Add New Deck</Text>

        <TextInput
          onChangeText={(text) => this.updateName(text)}
          value={this.state.name}
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
    addDeck: (deck) => {
      dispatch(addDeck(deck))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)