module.exports = {

  development: {
    client: 'pg',
    connection:
      'postgresql://localhost/movies_project'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};