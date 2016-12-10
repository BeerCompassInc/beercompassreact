module.exports = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_ROUTE':
      return { ...state, lastRoute: state.route, route: payload, showMenu: false }
    case 'SHOW_MENU':
      return { ...state, showMenu: !state.showMenu }
    case 'UPDATE_LOGIN_DETAILS':
      state.loginDetails[payload.change] = payload.value
      return { ...state }
    case 'NEW_USER_DETAILS':
      state.newUserDetails[payload.change] = payload.value
      return { ...state }
    case 'UPDATE_CURRENT_POS':
      state.location = payload
      state.markers.push(payload)
      return { ...state }
    case 'ADD_ADVENTURES':
      state.places = payload
      return { ...state }
    default:
      return { ...state }
  }
}
