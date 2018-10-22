const userPassedURL = document.querySelector('#userPassedURL')
const submitURL = document.querySelector('#submitURL')

const set = (id, text) => {
  document
    .getElementById(id.replace('#', ''))
    .innerHTML = text
  }

/* submitURL.addEventListener('click', (e) => {
  e.preventDefault()
  const url = userPassedURL.value

  const a = new URL(url)

  set('protocol', a.protocol)
  set('domain', a.hostname)
  set('path', a.pathname)
  set('search', a.search)
}) */


// Get a randomization of the input URL and save to the urlObject.
// *** TODO *** 
// FIX OVERWRTING IN OBJECT. NEEDS TO SAVE MULTIPLE INSTANCES.
submitURL.addEventListener('click', (e) => {
  e.preventDefault()
  const url = userPassedURL.value
  const domain = new URL(url)
  const hostname = 
    domain.hostname.split('')
    .sort(() => 0.5 - Math.random())
    .join('')

  Object.defineProperties(urlObject, {
    domain: {
      value: hostname
    },
  })
  console.log(urlObject)
})


let urlObject = {
  facebook: 
    [
      "f"
    ] 
}