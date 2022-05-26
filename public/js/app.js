const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  messageOne.textContent = 'Loading...'

  fetch('http://nodejs:3000/weather?address=' + search.value).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error
        } else {
          messageOne.textContent = data.location
          // messageTwo.textContent = JSON.stringify(data.forecast)
          messageTwo.textContent =
            data.forecast.description +
            ' and ' +
            data.forecast.temperature +
            ' degrees.  It feels like ' +
            data.forecast.feelslike +
            ' degrees.'
        }
      })
    }
  )
})