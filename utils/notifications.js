import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'


const key = 'mobile-flashcards:notifications'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(key)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Study',
    body: "Study tip: Make sure you study",
    ios: {
      sound: true,
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(key)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(18)
              tomorrow.setMintutes(30)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                { time: tomorrow,
                  repeat: 'day',
                })

              AsyncStorage.setItem(key, JSON.stringify(true))
            }
          })
      }
    })
}