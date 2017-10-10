import { 
  ADD_DECKS,
  ADD_DECK,
  ADD_QUESTION
} from './actions'

const initialState = {
  'Deck #1': {
    title: 'Deck #1',
    questions: []
  }
}

function decks (state = initialState, action) {
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
    default:
      return state
  }
}

export default decks;