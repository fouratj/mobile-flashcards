import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

function DeckInfo ({ deck, onPress }) {

  return (
      <TouchableOpacity onPress={onPress}>
          <Text style={styles.header}>{deck.title}</Text>
          <Text style={styles.text}>
            {deck.questions.length} 
            {deck.questions.length === 1
              ? ' question'
              : ' questions'
            }
          </Text>
      </TouchableOpacity>
    )
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

export default DeckInfo