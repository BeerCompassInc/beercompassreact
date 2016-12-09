import React from 'react'

module.exports = ({state , dispatch}) => {
  const { title, route, showMenu } = state
  const toggleMenu = () => dispatch({type: 'SHOW_MENU'})
  const customClass = showMenu ? 'showMenu' : 'hideMenu'
  const checkIfLoggedIn = () => route == '/' ? <div></div> : renderMenuButton()
  const checkRouteForLogo = route == '/mymap' ? 'hideLogo' : 'showLogo'
  return(
    <div className='header'>
      {checkIfLoggedIn()}
      <div className='logo'>
        <img className={checkRouteForLogo} src="https://cloud.githubusercontent.com/assets/20106637/21035471/34ff658c-be24-11e6-9874-bb9852786797.png"/>
      </div>
      <h1 className="mainTitle">Beer Compass</h1>
      <div className={customClass}>
        <ul>
          <li onClick={() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Home</li>
          <li onClick={() => { dispatch({type: 'CHANGE_ROUTE', payload: '/play'}) }} >Play</li>
          <li onClick={() => { dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'}) }} >My Map</li>
          <li onClick={() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Logout</li>
        </ul>
      </div>
    </div>
  )
  function renderMenuButton () {
    return <svg onClick={toggleMenu} className='menuButton' viewBox='0 0 7 6'>
      <rect x='1' y='4.5' width='5' height='0.7' rx='0.25' ry='0.25'/>
      <rect x='1' y='1.2' width='5' height='0.7' rx='0.25' ry='0.25'/>
      <rect x='1' y='2.9' width='5' height='0.7' rx='0.25' ry='0.25'/>
    </svg>
  }
}
