const db = require('./database-connection')


module.exports = {
    listAll(){
        return db('movie_list')
    },
    getById(id) {
        return db('movie_list').where('id', id)
    }
  
}