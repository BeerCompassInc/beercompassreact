import request from 'superagent'

module.exports = (dispatch) => {
  dispatch({type: 'CHANGE_ROUTE', payload: '/loading'})
  request
    .get('https://beercompass-server.herokuapp.com/api/v1/adventures')
    .withCredentials()
    .end((err, res) => {
    const places = res.body
    const adventureIdFinder = places.map((place) => place.adventure_id)
    const numberOfAdventures = Math.max(...adventureIdFinder)

    const myadventures = {}

    for (let i = 1; i <= numberOfAdventures; i++) {
     myadventures[i] = []
     const theseAdventures = places.filter((place) => place.adventure_id === i)
     theseAdventures.forEach(({ lat, lng, time }) => myadventures[i].push({lat: Number.parseFloat(lat), lng: Number.parseFloat(lng), showInfo: false, beerSize: parseInt(time)}))
    }
      if (!err) dispatch({type: 'GET_ADVENTURES', payload: myadventures})
    })
}
