import React, { Component } from 'react'

import mapStyles from './mapStyles'

export default class extends Component {
  constructor (props) {
    super()
    this.markers = []
  }
  componentDidUpdate () {
    this.clearMarkers(this.markers)
    this.renderMarkers(this.props.state.pointsOfInterest)
  }
  componentDidMount () {
    this.renderMap()
  }
  render() {
    return(
      <div>
        <div ref='map' style={{height: '83vh'}}></div>
        <div>
          <button className='pointsOfInterest' onClick={() => this.props.dispatch({type: 'CHANGE_POI', payload: {interest: 'pubs', iconImage: 'https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/Beer-512.png'}})}>Pubs</button>
          <button className='pointsOfInterest' onClick={() => this.props.dispatch({type: 'CHANGE_POI', payload: {interest: 'burgers', iconImage: 'http://www.freeiconspng.com/uploads/hamburgers-icon-15.png'}})}>Burgers</button>
          <button className='pointsOfInterest' onClick={() => this.props.dispatch({type: 'CHANGE_POI', payload: {interest: 'liquor store', iconImage: 'http://www.urbanliquor.ca/wp-content/uploads/2015/06/WineIcon1.png'}})}>Liquor</button>
        </div>
      </div>
    )
  }
  renderMap () {
    const { props, refs } = this
    const { location, pointsOfInterest } = props.state
    var mapOptions = {
        zoom: 15,
        center: location,
        options: { streetViewControl: false, mapTypeControl: false },
        styles: mapStyles()
    }
    this.googleMap = new google.maps.Map(refs.map , mapOptions)
    this.renderMarkers(pointsOfInterest)
  }
  renderMarkers ({interest, iconImage}) {
    const { googleMap, props, markers } = this
    const { location } = props.state
    const _this = this
    const infowindow = new google.maps.InfoWindow()
    const service = new google.maps.places.PlacesService(googleMap)
    service.textSearch({
      location,
      radius: 500,
      query: interest
    }, callback)

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i])
        }
      }
    }
    const icon = {
      url: iconImage,
      scaledSize: new google.maps.Size(40, 40)
    }
    function createMarker(place) {
      var marker = new google.maps.Marker({
        map: googleMap,
        position: place.geometry.location,
        icon
      })
      google.maps.event.addListener(marker, 'click', function() {
        const info = `
          ${place.name}<br>
          ${place.formatted_address}
          `
        infowindow.setContent(info)
        infowindow.open(googleMap, this)
      })
      _this.markers.push(marker)
    }
  }
  clearMarkers (markers) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null)
    }
  }
}
