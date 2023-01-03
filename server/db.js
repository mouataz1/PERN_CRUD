const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "toor",
    host: "localhost",
    port: 5433,
    database: "crud_api"
});

module.exports = pool;