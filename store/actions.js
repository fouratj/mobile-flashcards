export const ADD_DECKS = "ADDD_DECKS"
export const ADD_DECK = "ADD_DECK"
export const ADD_QUESTION = "ADD_QUESTION"

export function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}