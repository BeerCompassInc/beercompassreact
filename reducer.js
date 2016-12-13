import clone from 'clone'

module.exports = (state, { type, payload }) => {
  const newState = clone(state)

  switch (type) {
    case 'INIT':
      return newState
    case 'CHANGE_ROUTE':
      newState.route = payload
      newState.showMenu = false
      return newState
    case 'SHOW_MENU':
      newState.showMenu = !newState.showMenu
      return newState
    case 'UPDATE_LOGIN_DETAILS':
      newState.loginDetails[payload.change] = payload.value
      return newState
    case 'NEW_USER_DETAILS':
      newState.newUserDetails[payload.change] = payload.value
      return newState
    case 'ADD_NEW_MARKER':
      newState.location = payload
      newState.markers.push(payload)
      return newState
    case 'ADD_TIME_TO_MARKER':
      newState.location = payload
      const timeMarker = findMarker(newState, payload)
      timeMarker.time.push(timeMarker.time[timeMarker.time.length - 1]++)
      const size = timeMarker.time.map((time) => 3 / time)
      let beerSize = size.reduce((a, b) => a + b)
      beerSize += 10
      timeMarker.beerSize = beerSize
      return newState
    case 'GET_ADVENTURES':
      newState.myadventures = payload
      newState.route = '/myAdventures'
      return newState
    case 'TOGGLE_MARKER_DISPLAY':
      const toggleMarker = findMarker(newState, payload)
      toggleMarker.showInfo = !toggleMarker.showInfo
      return newState
    case 'LOGIN_SUCCESS':
      newState.currentUser = payload.user
      newState.loginDetails = {}
      newState.route = '/play'
      return newState
    case 'LOGOUT':
      newState.currentUser = {}
      newState.myadventures = []
      newState.route = payload
      newState.showMenu = !newState.showMenu
      return newState
    case 'SAVE_CURRENT_ADVENTURE_ID':
      newState.currentAdventure = payload
      return newState
    case 'STOP_ADVENTURE':
      newState.markers = []
      newState.route = '/myAdventures'
      newState.markers.push(newState.location)
      newState.currentAdventure = null
      return newState
    case 'CHANGE_ADVENTURE_TO_RENDER':
      newState.adventureToRender = payload
      newState.route = '/adventureMap'
    default:
      return newState
  }
}

function findMarker (newState, payload) {
  return newState.markers.find((marker) => payload.placeId === marker.placeId)
}
