const { Pool } = require("pg");

// old database from Lynda:
// const PG_URI =
//   "postgres://sowqmvmc:C8VcOF5uXm7v7Utsy-wL7WEor3YPR-Tq@fanny.db.elephantsql.com/sowqmvmc"

// old database from Heather:
// postgres://rocfqfgu:0E_896SmK-YxM-PPLgz6PZXWNxNTdjKc@fanny.db.elephantsql.com/rocfqfgu

// new database to be used once ready:
const PG_URI = "postgres://rocfqfgu:0E_896SmK-YxM-PPLgz6PZXWNxNTdjKc@fanny.db.elephantsql.com/rocfqfgu"


// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
})

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text)
    return pool.query(text, params, callback)
  },
}
