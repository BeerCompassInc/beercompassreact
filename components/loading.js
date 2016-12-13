import React from 'react'
import Header from './header'
import Logo from './logo'

module.exports = ({ state, dispatch }) => {
  return (
    <div className='loading'>
      <Header state={state} dispatch={dispatch} />
      <Logo />
      <div className='containerWithLogo'>
        <h2 className="mainTitle">Drink Responsibly</h2>
        <img className='beerGuys' src='https://cloud.githubusercontent.com/assets/13898345/21078169/1f528acc-bfcb-11e6-8977-de6fa5b1c198.gif' />
      </div>
    </div>
  )
}
