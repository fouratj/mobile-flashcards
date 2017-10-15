import { 
  ADD_DECK,
  ADD_CARD
} from './actions'


function decks (state = {}, action) {
  switch(action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: {
          title: action.deck.title,
          questions: action.deck.questions
        }
      }
    case ADD_CARD:
      return {
        ...state,
        [action.question.parent]: {
          ...[action.question.parent],
          questions: [
            ...state[action.question.parent].questions, 
            { 
              question: action.question.question,
              answer: action.question.answer
            }
          ]
        }
      }
    default:
      return state
  }
}

export default decks;