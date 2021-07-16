// build your `Resource` model here
const db = require('../../data/dbConfig')


const get = async () => {
   const resource = await db('resources')
   return resource
}

const getById = async (id) => {
   const rec = await db('resources')
      .where('resource_id', id)
   return rec
}

const addRec = async (rec) => {
   const [id] = await db('resources').insert(rec)
   return getById(id)
}



module.exports = {
   get,
   addRec
}
