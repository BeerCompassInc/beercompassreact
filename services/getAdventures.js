import request from 'superagent'

module.exports = (dispatch) => {
  dispatch({type: 'CHANGE_ROUTE', payload: '/loading'})
  request
    .get('http://192.168.1.22:3000/api/v1/adventures/')
    .withCredentials()
    .end((err, res) => {
      console.log(res);
      const places = res.body
    const adventureIdFinder = places.map((place) => place.adventure_id)
    const numberOfAdventures = Math.max(...adventureIdFinder)

    const myadventures = {}

    for (let i = 1; i <= numberOfAdventures; i++) {
     myadventures[i] = []
     const theseAdventures = places.filter((place) => place.adventure_id === i)
     theseAdventures.forEach(({ lat, lng }) => myadventures[i].push({lat: Number.parseFloat(lat), lng: Number.parseFloat(lng), renderedYet: false, showInfo: false}))
    }
      if (!err) dispatch({type: 'GET_ADVENTURES', payload: myadventures})
    })
}
