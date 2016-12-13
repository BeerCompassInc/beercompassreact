import React, { Component } from 'react'

export default class extends Component {

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {


    const directionsDisplay = new google.maps.DirectionsRenderer()
    const directionsService = new google.maps.DirectionsService()

    var chicago = new google.maps.LatLng(37.334818, -121.884886);
        var mapOptions = {
            zoom: 7,
            center: chicago
        };

    var point1 = new google.maps.LatLng(-41.296478, 174.773951)

    this.map = new google.maps.Map(this.refs.map , mapOptions)
    console.log('This map ', this.refs.map);
    directionsDisplay.setMap(this.map)

    let _this = this

    const start = new google.maps.LatLng(-41.2969048, 174.77381219999998)
    const end = new google.maps.LatLng(-41.295036, 174.774760)
    const waypts = [
      {location: point1, stopover: true}]

        directionsService.route({
          origin: start,
          destination: end,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'WALKING'
        }, function(res, status) {
          console.log("Im in the res")
          console.log('im the res ', res);
            if(status === 'OK') {
              directionsDisplay.setDirections(res)
            }
          })
  }
  render() {
    return(
      <div id='map' ref='map' style={{width: '100vw', height: '89vh'}}></div>
    )
  }
}
