import React, { Component } from 'react'
import Menu from './menu'
import PointsOfInterest from '../services/pointsOfInterest'

module.exports = ({state, dispatch}) =>
    <div className='mapDiv'>
      <Menu state={state} dispatch={dispatch} />
      <PointsOfInterest state={state}/>
    </div>
