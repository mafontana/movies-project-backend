
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movie_list', (movie) => {
        movie.increments('id')
        movie.string('title')
        movie.string('director')
        movie.integer('year')
        movie.decimal('my_rating')
        movie.string('poster_url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movie_list')
};
