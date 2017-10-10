import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import decks from './store/reducers'
import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import MyStatusBar from './components/MyStatusBar'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='home' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus" size={30} color={tintColor} />
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="book" size={30} color={tintColor} />
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: '#fcfdff',
      headerStyle: {
        backgroundColor: '#4286f4',
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: '#fcfdff',
      headerStyle: {
        backgroundColor: '#4286f4',
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(decks)}>
        <View style={{ flex: 1}}>
          <MyStatusBar />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9eb5e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
