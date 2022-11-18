/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

/** Destruct environment variable to get database configuration */
const {
    DB_USERNAME = "postgres",
        DB_PASSWORD = "12345",
        DB_HOST = "127.0.0.1",
        DB_NAME = "challenge_6",
} = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: {DB_NAME},
        host: DB_HOST,
        dialect: "postgres",
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: {DB_NAME},
        host: DB_HOST,
        dialect: "postgres",
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: {DB_NAME},
        host: DB_HOST,
        dialect: "postgres",
    },
};