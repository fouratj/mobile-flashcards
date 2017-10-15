import { AsyncStorage } from 'react-native'

export const DECK_KEY = 'MobileFlashcards:decks'

// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }

export function getDecks () {
  return AsyncStorage.getItem(DECK_KEY)        
        .then((results) => JSON.parse(results))
}

export function saveDeck (deck) {
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
    [deck.title]: {
      title: deck.title,
      questions: []
    }
  })).then((data) => JSON.parse(data))
}

export function addCardToDeck (deckTitle, card) {
  return AsyncStorage.getItem(DECK_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      decks[deckTitle].questions.push(card)
      AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks))
    })
}

//  AsyncStorage.removeItem(DECK_KEY)

// getDecks: return all of the decks along with their titles, questions, and answers. 
// getDeck: take in a single id argument and return the deck associated with that id. 
// saveDeckTitle: take in a single title argument and add it to the decks. 
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of 
// questions for the deck with the associated title. 