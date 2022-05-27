const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  messageOne.textContent = 'Loading...'

  fetch('/weather?address=' + search.value).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = `Location: ${
          data.location
        } (${data.latitude.toFixed(4)}, ${data.longitude.toFixed(4)})`
        // messageTwo.textContent = JSON.stringify(data.forecast)
        messageTwo.textContent =
          data.forecast.description +
          ' and ' +
          data.forecast.temperature +
          ' degrees.  The wind speed is ' +
          data.forecast.windspeed +
          ' mph, and the current humidity is ' +
          data.forecast.humidity +
          '%. It feels like ' +
          data.forecast.feelslike +
          ' degrees.'
      }
    })
  })
})
