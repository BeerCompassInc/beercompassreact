import React from 'react'
import Header from './header'


module.exports = ({state, dispatch}) => {

  const { places } = state


  return(
    <div>
      <Header state={state} dispatch={dispatch} />
      {places.map((place, i) => {
        return (
          <li key={i}>{place.lat}</li>
        )
      })}
    </div>
  )
}
