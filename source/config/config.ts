import dotenv from 'dotenv';
dotenv.config();

const MONGO_OPTIONS = {
 useUnifiedTopology: true,
 useNewUrlParser: true,
 socketTimeoutMS: 30000,
 keepAlive: true,
 poolSize: 50,
 autoIndex: false
};

const SECRET_KEY = process.env.SECRET_KEY;
const AUTH = {
    ENCRYPTION_KEY : process.env.ENCRYPTION_KEY || "@zxcasdqwe@s123",
    ENCRYPTION_ALGORITHM : process.env.ENCRYPTION_ALGORITHM || "aes-256-ctr",
    SECRET_KEY : process.env.SECRET_KEY || "@qweasd@zxc321$",
    STATIC_JWT : process.env.STATIC_JWT || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJiOWVhZjU3YmRiNjAwMTA5NjEzNjYiLCJpYXQiOjE2MTQ4ODA0MTl9.D3EVqPxWoL3BN6sAqRmMGhbJj1oPDzpYHESUqpSeBHo",
    UNAUTHORIZE_JWT : process.env.UNAUTHORIZE_JWT || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJiOWVhZjU3YmRiNjAwMTA5NjEzNjciLCJpYXQiOjE2MTQ4ODA3NDd9.xAHCJT-G5dmY4BObm-6kHdcxZq3xUjjMnkrW_iT0yFE",
    ID : process.env.ID || "5ebb9eaf57bdb60010961366",
    API_KEY : process.env.API_KEY || "1db98eda0fbacab7b868bc384634508e"
}

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'localhost';
const MONGO_URL = `mongodb+srv://admin:FaIoWFUdu8SlYdO4@my-db.6knb1.mongodb.net/my-db?retryWrites=true&w=majority`

const MONGO = {
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: MONGO_URL
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'https://test-indego.herokuapp.com';
const SERVER_PORT = process.env.PORT || 4000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER,
    auth: AUTH,
    dbtesturl:process.env.MONGO_ATLAS
};

export default config;
