// /* global google */
// import React, { Component} from "react";
//
// import {
//   withGoogleMap,
//   GoogleMap,
//   DirectionsRenderer,
// } from "../../../lib";
//
// const DirectionsExampleGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     defaultZoom={7}
//     defaultCenter={props.center}
//   >
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// ));
//
// /*
//  * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
//  */
// export default class DirectionsExample extends Component {
//
//   state = {
//     origin: new google.maps.LatLng(41.8507300, -87.6512600),
//     destination: new google.maps.LatLng(41.8525800, -87.6514100),
//     directions: null,
//   }
//
//   componentDidMount() {
//     const DirectionsService = new google.maps.DirectionsService();
//
//     DirectionsService.route({
//       origin: this.state.origin,
//       destination: this.state.destination,
//       travelMode: google.maps.TravelMode.DRIVING,
//     }, (result, status) => {
//       if (status === google.maps.DirectionsStatus.OK) {
//         this.setState({
//           directions: result,
//         });
//       } else {
//         console.error(`error fetching directions ${result}`);
//       }
//     });
//   }
//
//   render() {
//     return (
//       <DirectionsExampleGoogleMap
//         containerElement={
//           <div style={{ height: `100%` }} />
//         }
//         mapElement={
//           <div style={{ height: `100%` }} />
//         }
//         center={this.state.origin}
//         directions={this.state.directions}
//       />
//     );
//   }
// }


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

    var point1 = new google.maps.LatLng(37.334818, -121.884886)

    this.map = new google.maps.Map(this.refs.map , mapOptions)
    console.log('This map ', this.refs.map);
    directionsDisplay.setMap(this.map)

    let _this = this

    const start = new google.maps.LatLng(37.334818, -121.884886)
    const end = new google.maps.LatLng(37.441883, -122.143019)
    const waypts = [
      {location: point1, stopover: true}]




        directionsService.route({
          origin: start,
          destination: end,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
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
