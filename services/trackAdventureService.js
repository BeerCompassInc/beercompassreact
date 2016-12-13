import React, { Component } from 'react'
import request from 'superagent'

export default class extends Component {

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {

    // const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=bar&key=AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'
    // request
    //   .get(url)
    //   .set('Access-Control-Allow-Origin')
    //   .end((err, res) => {
    //     console.log('This is the res ', res.body);
    //   })


    var chicago = new google.maps.LatLng(-41.296798, 174.773789);
        var mapOptions = {
            zoom: 7,
            center: chicago
        };

    this.map = new google.maps.Map(this.refs.map , mapOptions)
    console.log('This map ', this.refs.map);

    let _this = this


    var infowindow = new google.maps.InfoWindow()
    var service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: chicago,
      radius: 500,
      type: ['pub']
    }, callback);

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: _this.map,
        position: place.geometry.location
      });
    }
      infowindow.setContent(place.name);
            infowindow.open(map, this)



}





    // var point1 = new google.maps.LatLng(-41.296478, 174.773951)
    // const directionsDisplay = new google.maps.DirectionsRenderer()
    // const directionsService = new google.maps.DirectionsService()
    // directionsDisplay.setMap(this.map)
    // const start = new google.maps.LatLng(-41.2969048, 174.77381219999998)
    // const end = new google.maps.LatLng(-41.295036, 174.774760)
    // const waypts = [
    //   {location: point1, stopover: true}]
    //
    //     directionsService.route({
    //       origin: start,
    //       destination: end,
    //       waypoints: waypts,
    //       optimizeWaypoints: true,
    //       travelMode: 'WALKING'
    //     }, function(res, status) {
    //       console.log("Im in the res")
    //       console.log('im the res ', res);
    //         if(status === 'OK') {
    //           directionsDisplay.setDirections(res)
    //         }
    //       })

  render() {
    return(
      <div id='map' ref='map' style={{width: '100vw', height: '89vh'}}></div>
    )
  }
}
