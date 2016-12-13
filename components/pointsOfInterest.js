import React, { Component } from 'react'
import Menu from './menu'
import PointsOfInterest from '../services/pointsOfInterest'

export default class extends Component {
  constructor(props) {
    super()
  }
  render() {
    return(
      <div className='mapDiv'>
        <PointsOfInterest state={this.props.state} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}
