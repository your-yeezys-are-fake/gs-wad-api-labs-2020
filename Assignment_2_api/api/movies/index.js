import express from 'express';
import {
  getMovies, getMovie, getMovieReviews, getMovieCredits, getUpcomingMovies, getNowPlayingMovies, getTrendingMovies, getPopularMovies
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res, next) => {
  getMovies()
  .then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/upcoming', (req, res, next) => {
  getUpcomingMovies()
  .then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/now_playing', (req, res, next) => {
  getNowPlayingMovies()
  .then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/trending', (req, res, next) => {
  getTrendingMovies()
  .then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/popular', (req, res, next) => {
  getPopularMovies()
  .then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovie(id)
  .then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieCredits(id)
  .then(credits => res.status(200).send(credits))
  .catch((error) => next(error));
  
});

router.post('/:id/review', async (req, res, next) =>{
  const newReview = req.body.id;
  const movie = await movieModel.findByMovieDBId(newReview);
  await movie.id.push(review);
  await movie.save(); 
  res.status(201).json(user); 
})

export default router;