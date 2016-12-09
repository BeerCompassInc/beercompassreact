import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']
GoogleMapsLoader.REGION = 'GB'

var center = {lat: 40.7128, lng: 74.0059}

module.exports = (el) => {
  GoogleMapsLoader.load((google) => {
    new google.maps.Map(el, {
      center,
      // location: '275 cuba st wellington nz',
      zoom: 4
    })
  })
}
