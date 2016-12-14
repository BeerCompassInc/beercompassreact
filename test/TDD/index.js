import test from 'tape'
import reducer from '../../reducer'
import freeze from 'deep-freeze'

test('tests are hooked up', (t) => {
  t.ok('tests are a go')
  t.end()
})
test('test change route reducer', (t) => {
  const state = {
    route: '/',
  }

  freeze(state)

  const expected = {
    route: '/signup', showMenu: false
  }
  const actual = reducer(state, {type: 'CHANGE_ROUTE', payload: '/signup'})
  t.deepEquals(actual, expected, 'changing a route works')
  t.end()
})

test('test change the class of the menu to true/false via the reducer', (t) => {
  const state = {
    showMenu: false
  }

  freeze(state)

  const expected = {
    showMenu: true
  }
  const actual = reducer(state, {type: 'SHOW_MENU'})
  t.deepEquals(actual, expected, 'changing if a menu shows or not works')
  t.end()
})

test('updates login details', (t) => {
  const state = {loginDetails: {}}

  freeze(state)

  const expected = {
    loginDetails: {username: 'Brady'}
  }

  const action = {type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'username', value: 'Brady'}}

  const actual = reducer(state, action)
  t.deepEquals(actual, expected, 'login form works')
  t.end()
})

test('updates signup details', (t) => {
  const state = {newUserDetails: {}}

  freeze(state)

  const expected = {
    newUserDetails: {username: 'Brady'}
  }

  const action = {type: 'NEW_USER_DETAILS', payload: {change: 'username', value: 'Brady'}}

  const actual = reducer(state, action)
  t.deepEquals(actual, expected, 'signup form works')
  t.end()
})

// test('pushes marker to array', (t) => {
//
//   var newMarker = {
//     lat: 1234,
//     long: 1234,
//     showInfo: false
//   }
//
//   const state = {
//     location: {},
//     markers: []
// }
//
//   freeze(state)
//
//   const expected = {
//     location: {
//         lat: 1234,
//         long: 1234,
//         showInfo: false
//       },
//     markers: [{
//       lat: 1234,
//       long: 1234,
//       showInfo: false
//     }]
//   }
//   const action = {type: 'ADD_NEW_MARKER', payload: newMarker}
//
//   const actual = reducer(state, action)
//   t.deepEquals(actual, expected, 'location is pushed to an array')
//   t.end()
// })
//
// test('itterates the time by 1', (t) => {
//
//   var newMarker = {
//     placeId: 123,
//     time: [1]
//   }
//
//   const state = {
//     location: {},
//     markers: [{
//       placeId: 123,
//       time: [1]
//     }]
// }
//
//   freeze(state)
//
//   const expected = {
//     location: {
//         placeId: 123,
//         time: [1]
//       },
//     markers: [{
//       beerSize: 14.5,
//       placeId: 123,
//       time: [2, 1]
//     }]
//   }
//   const action = {type: 'ADD_TIME_TO_MARKER', payload: newMarker}
//
//   const actual = reducer(state, action)
//   t.deepEquals(actual, expected, 'location is pushed to an array')
//   t.end()
// })
//
test('test marker display/not display info', (t) => {

  const state = {
    markers: [
      {name: 'lemon', showInfo: false},
      {name: 'notlemon', showInfo: false},
    ]
  }

  const payload = {name: 'lemon', showInfo: false}

  freeze(state)

  const expected = {
    markers: [
      {name: 'lemon', showInfo: true},
      {name: 'notlemon', showInfo: false},
    ]
  }


  const actual = reducer(state, {type: 'TOGGLE_MARKER_DISPLAY', payload: payload})
  t.deepEquals(actual, expected, 'the map shows or hides info display when toggled')
  t.end()
})

test('test successful login', (t) => {

  const state = {
    currentUser: {},
    route: '/'
  }

  const payload = {
    "user_id": 1,
    "username": "sowisburger"
  }

  freeze(state)

  const expected = {
    currentUser: {
      "user_id": 1,
      "username": "sowisburger"
    },
    route: '/play',
    loginDetails: {}
  }


  const actual = reducer(state, {type: 'LOGIN_SUCCESS', payload: payload})
  t.deepEquals(actual, expected, 'logging in works')
  t.end()
})

test('test logging out', (t) => {

  const state = {
    currentUser: {
      "user_id": 1,
      "username": "sowisburger"
    },
    route: '/play',
    showMenu: true
  }

  freeze(state)

  const expected = {
    currentUser: {},
    myadventures: [],
    route: '/',
    showMenu: false
  }


  const actual = reducer(state, {type: 'LOGOUT', payload: '/'})
  t.deepEquals(actual, expected, 'logging out works')
  t.end()
})

test('test saving current adventure id', (t) => {

  const state = {
    currentAdventure: null
  }

  freeze(state)

  const expected = {
    currentAdventure: 123
  }


  const actual = reducer(state, {type: 'SAVE_CURRENT_ADVENTURE_ID', payload: 123 })
  t.deepEquals(actual, expected, 'logging out works')
  t.end()
})

test('test stopping current adventure', (t) => {

  const state = {
    location: {
        lat: 1234,
        long: 1234,
        showInfo: false
      },
    markers: [{
      lat: 1204,
      long: 1734,
      showInfo: false
    }],
    route: '/mymap',
    currentAdventure: 123
  }

  freeze(state)

  const expected = {
    location: {
      lat: 1234,
      long: 1234,
      showInfo: false
    },
    markers: [
      {
        lat: 1204,
        long: 1734,
        showInfo: false
      },
      {
        lat: 1234,
        long: 1234,
        showInfo: false
      }
    ],
    route: '/myAdventures',
    currentAdventure: null
  }



  const actual = reducer(state, {type: 'STOP_ADVENTURE'})
  t.deepEquals(actual, expected, 'stopping the adventure works')
  t.end()
})
