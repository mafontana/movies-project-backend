const db = require('./database-connection')


module.exports = {
    listAll(){
        return db('movie_list')
    },
    getById(id) {
        return db('movie_list').where('id', id)
    },
    createMovie(newMovie) {
        return db('movie_list').insert(newMovie).returning('*')
    },
    deleteMovie(id){
        return db('movie_list')
            .where('id', id)
            .delete()
    },
    updateMovie(id, movie) {
        return db('movie_list').where('id', id).update(movie)
    }
  
}