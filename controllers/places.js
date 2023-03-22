const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.send('GET /places', {places})
})
router.post('/', (req, res) => {
    res.send('POST /places')
})
router.get('/new', (req, res) => {
    res.send('GET /places/new')
})
router.get('/:id', (req, res) => {
    res.send('GET /places/:id')
})
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id')
})
router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit')
})
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id')
})
router.post('/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant')
})
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId')
})
router.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
module.exports = router


/*const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router*/