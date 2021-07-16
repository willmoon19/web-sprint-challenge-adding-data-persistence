// build your `Project` model here
const db = require('../../data/dbConfig')


const getById = async (id) => {
   const project = await db('projects').where('projects_id', id)
   
   
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


module.exports = {
   getById,
}