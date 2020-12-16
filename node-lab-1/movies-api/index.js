import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from './authenticate';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import './db';
import {loadUsers} from './seedData';
import {loadGenres} from './seedData';
import {loadMovies} from './seedData';
import usersRouter from './api/users';
import genreRouter from './api/genres';

dotenv.config();

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
}

if (process.env.SEED_DB) {
  loadGenres();
}

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

const port = process.env.PORT;



//configure body-parser
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize())
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genreRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
