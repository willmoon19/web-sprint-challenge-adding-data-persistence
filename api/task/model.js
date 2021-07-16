// build your `Task` model here
const db = require('../../data/dbConfig')


const getById = async (id) => {
   const task = await db('tasks as t')
      .leftJoin('projects as p', 'p.project_id', 't.project_id')
      .select(
         't.task_id',
         't.task_description',
         't.task_notes',
         't.task_completed',
         'p.project_name',
         'p.project_description'
         )
      .where('t.task_id', id)

      const taskBody = task.map(data => {
         return {
            task_id: data.task_id,
            task_description: data.task_description,
            task_notes: data.task_notes,
            task_completed: !!data.task_completed,
            project_name: data.project_name,
            project_description: data.project_description
         }
      })
   return taskBody
}



module.exports = {
   getById,
}