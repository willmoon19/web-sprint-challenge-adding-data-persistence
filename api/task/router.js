// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')


router.post('/', (req, res, next) => {
   Tasks.addTask(req.body)
      .then(task => {
         res.json(task)
      })
      .catch(next)
})

router.get('/', (req, res, next) => {
   Tasks.get()
      .then(task => {
         res.status(200).json(task)
      })
      .catch(next)
})


module.exports = router
