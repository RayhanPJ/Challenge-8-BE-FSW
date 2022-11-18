/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

/** Destruct environment variable to get database configuration */
const {
    PGUSER = "postgres",
    PGPASSWORD = "ARKrMINpPxDBVJxDTh7p",
    PGHOST = "containers-us-west-128.railway.app",
    DATABSE_URL = "postgresql://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{ PGPORT }}/${{ PGDATABASE }}",
    PGDATABSE = "railway",
    PGPORT = "5581",
    DB_NAME = "challenge_6"

} = process.env;

module.exports = {
    development: {
        username: PGUSER,
        password: PGPASSWORD,
        database: DB_NAME,
        host: PGHOST,
        port: PGPORT,
        pgdatabase : PGDATABSE,
        databaseurl : DATABSE_URL,
        dialect: "postgres",
    },
    test: {
        username: PGUSER,
        password: PGPASSWORD,
        database: DB_NAME,
        host: PGHOST,
        port: PGPORT,
        pgdatabase : PGDATABSE,
        databaseurl : DATABSE_URL,
        dialect: "postgres",
    },
    production: {
        username: PGUSER,
        password: PGPASSWORD,
        database: DB_NAME,
        host: PGHOST,
        port: PGPORT,
        pgdatabase : PGDATABSE,
        databaseurl : DATABSE_URL,
        dialect: "postgres",
    },
};