import React, { Component } from 'react'

import mapStyles from './mapStyles'

export default class extends Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    this.renderMap()
  }
  render() {
    return(
      <div>
        <div id='poiMap' ref='map' style={{width: '100vw', height: '90vh'}}></div>
      </div>
    )
  }
  renderMap () {
    const { props, refs } = this
    const { location } = props.state
    var mapOptions = {
        zoom: 15,
        center: location,
        options: { streetViewControl: false, mapTypeControl: false },
        styles: mapStyles()
    }
    this.googleMap = new google.maps.Map(refs.map , mapOptions)
    this.renderMarkers('pubs', 'https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/Beer-512.png')
    this.renderMarkers('burgers', 'http://www.freeiconspng.com/uploads/hamburgers-icon-15.png')
    this.renderMarkers('kebebs', 'https://cdn1.iconfinder.com/data/icons/fast-foody/64/kebab-512.png')
  }
  renderMarkers (interest, iconImage) {
    const { googleMap, props } = this
    const { location } = props.state
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
    function createMarker(place, map) {
      var marker = new google.maps.Marker({
        map: googleMap,
        position: place.geometry.location,
        icon
      })
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name)
        infowindow.open(googleMap)
      })
    }
  }
}
