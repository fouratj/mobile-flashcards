export const ADD_DECKS = "ADDD_DECKS"
export const ADD_DECK = "ADD_DECK"


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