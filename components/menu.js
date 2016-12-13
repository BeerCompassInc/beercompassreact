import React from 'react'

module.exports = ({ state, dispatch }) => {
  const { title, route, showMenu, currentUser } = state
  const toggleMenu = () => dispatch({type: 'SHOW_MENU'})
  const toggleMenuClass = showMenu ? 'showMenu' : 'hideMenu'
  const renderMenuButtonIfLoggedIn = currentUser.username === undefined ? <span/> : renderMenuButton()
  return (
    <div className='menu'>
      {renderMenuButtonIfLoggedIn}
      <h1>{title}</h1>
      <div className={toggleMenuClass}>
        <ul>
          <li onClick={() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Home</li>
          <li onClick={() => { dispatch({type: 'CHANGE_ROUTE', payload: '/play'}) }} >Play</li>
          <li onClick={() => { dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'}) }} >My Map</li>
          <li onClick={() => { dispatch({type: 'LOGOUT', payload: '/'}) }} >Logout</li>
          <li onClick={() => { dispatch({type: 'CHANGE_ROUTE', payload: '/myAdventures'}) }} >My Adventures</li>
          <li onClick={() => { dispatch({type: 'STOP_ADVENTURE'}) }} className='stopButton' >Stop</li>
        </ul>
      </div>
    </div>
  )
  function renderMenuButton () {
    return <svg onClick={toggleMenu} className='menuButton' viewBox='0 0 7 6'>
      <rect x='1' y='4.5' width='5' height='0.7' rx='0.25' ry='0.25' />
      <rect x='1' y='1.2' width='5' height='0.7' rx='0.25' ry='0.25' />
      <rect x='1' y='2.9' width='5' height='0.7' rx='0.25' ry='0.25' />
    </svg>
  }
}
