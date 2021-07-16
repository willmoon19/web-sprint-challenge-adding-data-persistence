// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')



router.post('/', (req, res, next) => {
   Projects.addProj(req.body)
      .then(proj => {
         res.json(proj[0])
      })
      .catch(next)
})
router.get('/', (req, res, next) => {
   Projects.get()
      .then(project => {
         res.status(200).json(project)
      })
      .catch(next)
})


module.exports = router