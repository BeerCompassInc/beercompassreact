import React, { Component } from 'react'
import Header from './header'
import Adventure from '../services/trackAdventureService'

module.exports = ({state, dispatch}) =>
    <div style={{width: '100vw', height: '89vh'}}>
      <Adventure state={state}/>
    </div>
