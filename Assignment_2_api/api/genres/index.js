import express from 'express';
import Genre from './genreModel';
import {
  getGenres
} from '../tmdb-api';

const router = express.Router(); // eslint-disable-line

// Get all genres
router.get('/', (req, res, next) => {
    getGenres()
    .then(genres =>  res.status(200).json(genres)).catch(next);
});


export default router;