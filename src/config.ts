import * as dotenv from 'dotenv' 

dotenv.config();

const config = {
    PORT : process.env.PORT,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    URL: process.env.OPENLDBWSURL
};

export default config;
    