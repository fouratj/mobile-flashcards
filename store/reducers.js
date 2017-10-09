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
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.parent]: {
          ...[action.question.parent],
          questions: [...state[action.question.parent].questions, action.question]
        }
      }
  }
}

export default decks;