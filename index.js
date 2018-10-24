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



let urlObject = [
  { 'facebook.com': ['https://facebook.com'] },
  { 'twitter.com': [] },
  { 'google.com': [] },
  { 'medium.com': [] },
  { 'reddit.com': [] },
  { 'stackoverflow.com': [] },
]


// Get a randomization of the input URL and save to the urlObject.
// *** TODO *** 
// FIX OVERWRTING IN OBJECT. NEEDS TO SAVE MULTIPLE INSTANCES.
submitURL.addEventListener('click', (e) => {
  e.preventDefault()
  const url = userPassedURL.value
  const domain = new URL(url).hostname

  const hostname = 
    domain.split('')
    .sort(() => 0.5 - Math.random())
    .join('')
    // urlObject.reduce((accum, item) => {
    //   accum = {
    //     ...accum,
    //     [item.domain]: [...(accum.hasOwnProperty(item.domain) ? accum[item.domain] : []), item.hostname],
    //   }
    //   return accum;
    // }, {})
    

  urlObject[1][domain].push(hostname)
  console.log(urlObject)
})

