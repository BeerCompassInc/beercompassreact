import React from 'react'
import Header from './header'

module.exports = ({ state, dispatch }) => {
  const { myadventures } = state
  console.log(state.adventureToRender);
  return (
    <div>
      <Header state={state} dispatch={dispatch} />
      {renderAdventures()}
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
