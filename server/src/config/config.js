import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
  PORT: process.env.PORT || 8000,
  MONGO_URL: process.env.DB_URI || 'mongodb://localhost:27017/mydatabase',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'secret',
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY || 'secret',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'secret',
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY || 'secret',
};

export default config;