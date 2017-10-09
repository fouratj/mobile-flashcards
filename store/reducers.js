import { ADD_DECKS, ADD_DECK } from './actions'

function decks (state = {}, action) {
  switch(action.type) {
    case ADD_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: action.deck
      }
  }
}

export default decks;