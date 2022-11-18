/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

/** Destruct environment variable to get database configuration */
const {
    PGUSER = "postgres",
    PGPASSWORD = "qWS23Wf5rXlJzsFZYAi6",
    PGHOST = "containers-us-west-115.railway.app",  
    PGPORT = "6100",
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