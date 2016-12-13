import React from 'react'
import getAdventures from '../services/getAdventures'
import { storeAdventure } from '../services/saveAdventure'

module.exports = ({ state, dispatch }) => {
  const { title, route, showMenu, currentUser, myadventures, currentAdventure } = state
  const toggleMenu = () => dispatch({type: 'SHOW_MENU'})
  const toggleMenuClass = showMenu ? 'showMenu' : 'hideMenu'
  const startStopButton = route === '/mymap' ? renderStopButton() : route === '/play' ? <span/> : renderHomeButton()
  const showMapButton = (route === '/mymap' || currentAdventure === null) ? <span/> : renderShowMapButton()
  const showMyAdventuresButton = myadventures[1] === undefined ? <span/> : renderMyAdventuresButton()
  const renderMenuButtonIfLoggedIn = currentUser.username === undefined ? <span/> : renderMenuButton()
  return (
    <div className='header'>
      {renderMenuButtonIfLoggedIn}
      <h1>{title}</h1>
      <div className={toggleMenuClass}>
        <ul>
          {startStopButton}
          {showMapButton}
          {showMyAdventuresButton}
          <li onClick={() => dispatch({type: 'LOGOUT', payload: '/'})} >Logout</li>
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
  function renderShowMapButton () {
    return <li onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'})} >Current Adventure</li>
  }
  function renderStopButton () {
    return <li onClick={() => {
        storeAdventure(state, dispatch)
        dispatch({type: 'CHANGE_ROUTE', payload: '/myAdventures'})
      }
    } className='stopButton' >Stop Adventure</li>
  }
  function renderHomeButton () {
    return <li onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/play'})} >Home</li>
  }
  function renderMyAdventuresButton () {
    return <li onClick={() => {
        getAdventures(dispatch)
        dispatch({type: 'CHANGE_ROUTE', payload: '/myAdventures'})
      }
    } >My Adventures</li>
  }
}
