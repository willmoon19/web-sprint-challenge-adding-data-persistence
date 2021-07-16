// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')



router.post('/', (req, res, next) => {
   console.log('hello')
})
router.get('/:id', (req, res, next) => {
   Projects.getById(req.params.id)
      .then(project => {
         res.status(200).json(project)
      })
      .catch(next)
})


module.exports = router