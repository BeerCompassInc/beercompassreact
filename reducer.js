import clone from 'clone'

module.exports = (state, { type, payload }) => {
  const newState = clone(state)

  switch (type) {
    case 'CHANGE_ROUTE':
      newState.lastRoute = newState.route
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
    case 'UPDATE_CURRENT_POS':
      newState.location = payload
      newState.markers.push(payload)
      return newState
    case 'ADD_ADVENTURES':
      newState.places = payload
      return newState
    case 'TOGGLE_MARKER_DISPLAY':
      var targetMarker = newState.markers.find((marker) => {
        return payload.placeId == marker.placeId
      })
      targetMarker.showInfo = !targetMarker.showInfo
      targetMarker.renderedYet = true
      return newState
    case 'LOGIN_SUCCESS':
      newState.currentUser = payload
      newState.route = '/play'
      return newState
    case 'SIGNUP_SUCCESS':
      state.route = '/login'
      return newState
    default:
      return newState
  }
}
