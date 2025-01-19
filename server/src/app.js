import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './database/db.js';
import authRoutes from './routes/auth.route.js';
import categoryRoutes from './routes/category.route.js';
import cookieParser from 'cookie-parser';
import passport from './config/passport.config.js';
import session from 'express-session';

const app = express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(express.static('public'))

app.use(session
	(
		{
			secret: process.env.ACCESS_TOKEN_SECRET,
			resave: false,
			saveUninitialized: false
		}
	)
)

app.use(express.static('public'))
app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}))

connectDb();

app.use(authRoutes)
app.use(categoryRoutes)

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Not found',
  });
});

// Handle 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});