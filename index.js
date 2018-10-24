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

  //urlObject[0].alternatives.push(hostname)
  //console.log(urlObject)
  let options = {
    threshold: 0.3,
    keys: ['domain', 'alternatives']
  };
  let fuse = new Fuse(urlObject, options)
  
  let result = fuse.search(domain)

  window.location.replace(`https://${result[0].domain}`) 
  console.log(result)
})


let urlObject = [{
  'domain': 'facebook.com',
  'alternatives': [
    "facebook.se",
    "facebook.org",
    "facebook.net",
    "facebook.co.uk",
    "ckafcobemo.o",
    "fo.kcacemoob",
    "fomaccbek.oo",
    "aoofkccoem.b",
    "e.mokcoobcfa",
    "koob.omeccaf",
    "bfcaoceomok.",
    "bkfeooa.mcco",
    "omf.aokccebo",
    "cofbacko.ome",
    "coc.ebmokoaf",
    "kfomcaoocb.e",
    "eoo.afbcockm",
    ],
  },
  { 
    'domain': 'twitter.com',
    'alternatives':
    'twiter.cmo'
  },
]



