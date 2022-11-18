/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

/** Destruct environment variable to get database configuration */
const {
    PGUSER = "postgres",
    PGPASSWORD = "ARKrMINpPxDBVJxDTh7p",
    PGHOST = "containers-us-west-128.railway.app",  
    PGPORT = "5581",
    DB_NAME = "railway"

} = process.env;

module.exports = {
    development: {
        username: PGUSER,
        password: PGPASSWORD,
        database: DB_NAME,
        host: PGHOST,
        port: PGPORT,
        dialect: "postgres",
    },
    test: {
        username: PGUSER,
        password: PGPASSWORD,
        database: DB_NAME,
        host: PGHOST,
        port: PGPORT,
        dialect: "postgres",
    },
    production: {
        username: PGUSER,
        password: PGPASSWORD,
        database: DB_NAME,
        host: PGHOST,
        port: PGPORT,
        dialect: "postgres",
    },
};