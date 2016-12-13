import React from 'react'
import Header from './header'
import Logo from './logo'

module.exports = ({ state, dispatch }) => {
  const { myadventures } = state
  return (
    <div>
      <Header state={state} dispatch={dispatch} />
      <Logo />
      <div className='containerWithLogo'>
        {renderAdventures()}
      </div>
    </div>
  )
  function renderAdventures () {
    const adventureIds = Object.keys(myadventures)
    return adventureIds.map((id) =>
      <button
        onClick={() => dispatch({type:'CHANGE_ADVENTURE_TO_RENDER', payload: id}) }
        key={id}
          >Adventure {id}
      </button>
    )
  }
}
