
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie_list').insert([
        {
          title: "Homeward Bound", 
          director: "Duwayne Dunham", 
          year: 1993,
          my_rating: 4.5,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/14571/p14571_v_v8_aa.jpg"
        }, 
        {
          title: "The Adventures of Milo and Otis", 
          director: "Masanori Hata", 
          year: "1989",
          my_rating: 4.6,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/11814/p11814_v_v8_aa.jpg"
        }, 
        {
          title: "101 Dalmatians", 
          director: "Stephen Herek", 
          year: "1996",
          my_rating: 4.7,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/18759/p18759_v_v8_ab.jpg"
        },
        {
          title: "Best in Show", 
          director: "Christopher Guest", 
          year: "2000",
          my_rating: 4.2,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/26264/p26264_v_v8_ab.jpg"
        },
        {
          title: "Beethoven", 
          director: "Stephen Herek", 
          year: "1992",
          my_rating: 3.8,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/13889/p13889_v_v8_af.jpg"
        },
        {
          title: "Marley & Me", 
          director: "David Frankel", 
          year: "2008",
          my_rating: 4.0,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/176014/p176014_v_v8_aa.jpg"
        },
        {
          title: "All Dogs Go to Heaven", 
          director: "Don Bluth", 
          year: "1989",
          my_rating: 4.1,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/11978/p11978_v_v8_aa.jpg"
        },
        {
          title: "Isle of Dogs", 
          director: "Wes Anderson", 
          year: "2018",
          my_rating: 4.8,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/14551155/p14551155_v_v8_ab.jpg"
        },
        {
          title: "Baltos", 
          director: "Simon Wells", 
          year: "1995",
          my_rating: 4.3,
          poster_url: "http://www.gstatic.com/tv/thumb/v22vodart/17535/p17535_v_v8_aa.jpg"
        }

      ]);
    });
};
