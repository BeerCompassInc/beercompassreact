import React from 'react'
import Menu from './menu'
import Logo from './logo'

module.exports = ({ state, dispatch }) => {
  const { myadventures } = state
  return (
    <div>
      <Menu state={state} dispatch={dispatch} />
      <Logo />
      <div className='containerWithLogo myAdventuresDiv'>
        {renderAdventures()}
      </div>
    </div>
  )
  function renderAdventures () {
    const adventureIds = Object.keys(myadventures)
    return adventureIds.map((id) =>
      <button className='buttons'
        onClick={() => dispatch({type:'CHANGE_ADVENTURE_TO_RENDER', payload: id}) }
        key={id}
          >Adventure {id}
      </button>
    )
  }
}
