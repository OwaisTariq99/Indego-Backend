import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const AUTH = {
    ENCRYPTION_KEY : "@zxcasdqwe@s123",
    ENCRYPTION_ALGORITHM : "aes-256-ctr",
    SECRET_KEY : "@qweasd@zxc321$",
    STATIC_JWT : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJiOWVhZjU3YmRiNjAwMTA5NjEzNjYiLCJpYXQiOjE2MTQ4ODA0MTl9.D3EVqPxWoL3BN6sAqRmMGhbJj1oPDzpYHESUqpSeBHo",
    UNAUTHORIZE_JWT : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJiOWVhZjU3YmRiNjAwMTA5NjEzNjciLCJpYXQiOjE2MTQ4ODA3NDd9.xAHCJT-G5dmY4BObm-6kHdcxZq3xUjjMnkrW_iT0yFE",
    ID : "5ebb9eaf57bdb60010961366",
    API_KEY : "1db98eda0fbacab7b868bc384634508e"
}

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'localhost';
// const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'supersecretpassword1';
// const MONGO_HOST = process.env.MONGO_URL || `ds343895.mlab.com:43895/mongobongo`;
const DB_NAME = process.env.DB_NAME || `indego-db`;

const MONGO = {
    // host: MONGO_HOST,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: `mongodb://${MONGO_USERNAME}/${DB_NAME}`
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 4000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER,
    auth: AUTH
};

export default config;
