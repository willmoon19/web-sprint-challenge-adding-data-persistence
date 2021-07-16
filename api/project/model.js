// build your `Project` model here
const db = require('../../data/dbConfig')


const get = async () => {
   const project = await db('projects')
   
   const projectBody = project.map(data => {
      return {
         project_id: data.project_id,
         project_name: data.project_name,
         project_description: data.project_description,
         project_completed: !!data.project_completed,
      }
   })
   return projectBody
}

const getById = async (id) => {
   const proj = await db('projects')
      .where('project_id', id)
   const newProj = proj.map(data => {
      if(data.project_completed === 0) {
         return {...data, project_completed: false}
      } else {
         return {...data, project_completed: true}
      }
   })
return newProj
}

const addProj = async (proj) => {
   const [id] = await db('projects').insert(proj)
   return getById(id)
}


module.exports = {
   get,
   addProj
}