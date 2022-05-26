const request = require('postman-request')
const weatherstack_access_key = process.env.WEATHERSTACK_ACCESS_KEY

const forecast = (latitude, longitude, callback) => {
  const api = 'http://api.weatherstack.com/'
  const url = `${api}current?query=${latitude},${longitude}&access_key=${weatherstack_access_key}&units=f`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect', undefined)
    } else if (body.error) {
      callback(body.error, undefined)
    } else {
      callback(undefined, {
        // url,
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        // location: body.location.name,
        description: body.current.weather_descriptions[0],
      })
    }
  })
}

module.exports = forecast
