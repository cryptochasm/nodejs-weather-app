const request = require('postman-request')
const mapbox_token = process.env.MAPBOX_TOKEN

const geocode = (address, callback) => {
  const mapbox_api = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
  const url = `${mapbox_api}${address}.json?access_token=${mapbox_token}&limit=1`
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect', undefined)
    } else if (body.features.length == 0) {
      callback('Unable to find location', undefined)
    } else {
      latitude = body.features[0].center[1]
      longitude = body.features[0].center[0]
      callback(undefined, {
        location: body.features[0].place_name,
        latitude,
        longitude,
      })
    }
  })
}

module.exports = geocode
