
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie_list').insert([
        {
          title: "Jurassic Park", 
          director: "Steven Spielberg", 
          year: 1993,
          my_rating: 4.5,
          poster_url: "https://drive.google.com/file/d/16kONZ8QRApmN7JwuIg_6DJfE3L5SE-JI/view?usp=sharing"
        }, 
        {
          title: "Bridesmaids", 
          director: "Paul Feig", 
          year: "2011",
          my_rating: 4.6,
          poster_url: "https://drive.google.com/file/d/1V8El1qyoi54XmHZyA_bTmXYpifcD7uns/view?usp=sharing"
        }, 
        {
          title: "Phantom of the Opera", 
          director: "Joel Schumacher", 
          year: "2005",
          my_rating: 4.7,
          poster_url: "https://drive.google.com/file/d/1p6uFEQSQw1MTHPkGsjak4_ji1SvNht8W/view?usp=sharing"
        }

      ]);
    });
};
