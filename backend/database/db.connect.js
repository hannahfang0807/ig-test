const mysql = require('mysql2')

const connection = {
  host: 'localhost',
  user: 'hannah',
  password: 'hannah',
  database: 'interstellargame',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}

// The pool does not create all connections upfront but creates them on demand until the connection limit is reached
const pool = mysql.createPool(connection)

// promise
const promisePool = pool.promise()

module.exports = {
  pool,
  promisePool,
}

// module.exports = pool.promise()
