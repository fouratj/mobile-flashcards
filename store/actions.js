export const ADD_DECKS = "ADDD_DECKS"
export const ADD_DECK = "ADD_DECK"
export const ADD_CARD = "ADD_CARD"

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCard(question) {
  return {
    type: ADD_CARD,
    question
  }
}