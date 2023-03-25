const router = require('express').Router()
const places = require('../models/places.js')
//router.get('/', (req, res) => {
//res.send('GET /places')
//})
router.get('/', (req, res) => {
res.render('places/index', {places})
})

router.post('/', (req, res) => {
   
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  
router.get('/new', (req, res) => {
    res.render('places/new')
})
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show',{place: places[id], id})
    }
  })
  
  
  
  
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id')
})
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id] })
    }
  })
  
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
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