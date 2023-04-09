const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "valkata_ip",
    database: "registration",
    password: "1",
    port: 54432
    });

module.exports = pool;


