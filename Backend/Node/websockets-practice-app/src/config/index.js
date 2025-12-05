const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/websockets-practice',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
};

module.exports = config;