// build your `Resource` model here
const db = require('../../data/dbConfig')


const getById = async (id) => {
   const resource = await db('resources').where('resource_id', id)
   return resource
}



module.exports = {
   getById,
}
