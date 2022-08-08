const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT : process.env.PORT,
    TOKEN_SECRET: process.env.TOKEN_SECRET
};

export default config;