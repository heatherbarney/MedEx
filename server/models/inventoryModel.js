const { Pool } = require("pg");
require('dotenv').config();

const PG_URI = process.env.DB_URL;
console.log(PG_URI);

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
