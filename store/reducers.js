import { 
  ADD_DECK,
  ADD_CARD
} from './actions'

const initialState = {
  'Deck #1': {
    title: 'Deck #1',
    questions: []
  }
}

function decks (state = initialState, action) {
  switch(action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck
      }
    case ADD_CARD:
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