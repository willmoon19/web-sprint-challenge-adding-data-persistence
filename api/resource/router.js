// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')


router.post('/', (req, res, next) => {
   console.log('hello')
})

router.get('/:id', (req, res, next) => {
   Resources.getById(req.params.id)
      .then(resource => {
         console.log('got here')
         res.status(200).json(resource)
      })
      .catch(next)
})



module.exports = router