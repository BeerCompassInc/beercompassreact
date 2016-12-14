import clone from 'clone'

module.exports = (state, { type, payload }) => {
  const newState = clone(state)
  switch (type) {
    case 'CHANGE_ROUTE':
      return { ...state, route: payload, showMenu: false }
    case 'SHOW_MENU':
      return { ...state, showMenu: !state.showMenu }
    case 'UPDATE_LOGIN_DETAILS':
      const loginDetails = { ...state.loginDetails }
      loginDetails[payload.change] = payload.value
      return { ...state, loginDetails }
    case 'NEW_USER_DETAILS':
      const newUserDetails = { ...state.newUserDetails }
      newUserDetails[payload.change] = payload.value
      return { ...state, newUserDetails }
    case 'ADD_NEW_MARKER':
      var markers = [ ...state.markers ]
      markers.push(payload)
      return { ...state, location: payload, markers }
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
      return { ...state, myadventures: payload }
    case 'TOGGLE_MARKER_DISPLAY':
     const toggleMarker = findMarker(newState, payload)
     toggleMarker.showInfo = !toggleMarker.showInfo
     return newState
    case 'LOGIN_SUCCESS':
      return { ...state, currentUser: payload, loginDetails: {}, route: '/play' }
    case 'LOGOUT':
      return { ...state, currentUser: {}, myadventures: [], route: payload, showMenu: !state.showMenu }
    case 'SAVE_CURRENT_ADVENTURE_ID':
      return { ...state, currentAdventure: payload }
    case 'STOP_ADVENTURE':
      var markers = [ ...state.markers ]
      markers.push(state.location)
      return { ...state, markers: [], route: '/myAdventures', currentAdventure: null, markers }
    case 'CHANGE_ADVENTURE_TO_RENDER':
      return { ...state, adventureToRender: payload, route: '/adventureMap' }
    case 'CHANGE_POI':
      return { ...state, pointsOfInterest: payload }
    default:
      return { ...state }
  }
}

function findMarker (newState, payload) {
  return newState.markers.find((marker) => payload.placeId === marker.placeId)
}
