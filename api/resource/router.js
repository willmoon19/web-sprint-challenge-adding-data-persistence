// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')


router.post('/', (req, res, next) => {
   Resources.addRec(req.body)
      .then(rec => {
         res.json(rec[0])
      })
      .catch(next)
})

router.get('/', (req, res, next) => {
   Resources.get()
      .then(resource => {
         console.log('got here')
         res.status(200).json(resource)
      })
      .catch(next)
})



module.exports = router