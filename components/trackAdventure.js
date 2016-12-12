import React, { Component } from 'react'
import Header from './header'
import Adventure from '../services/trackAdventureService'

export default class trackAdventure extends Component {
  render() {
    return(
      <div style={{width: '100vw', height: '89vh'}}>
        <Adventure />
      </div>
    )
  }
}
