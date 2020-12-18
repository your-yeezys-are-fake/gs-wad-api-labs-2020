import express from 'express';
import Genre from './genreModel';

const router = express.Router(); // eslint-disable-line

// Get all genres
router.get('/', (req, res, next) => {
    Genre.find().then(genres =>  res.status(200).json(genres)).catch(next);
});

// register
router.post('/', (req, res ,next) => {
  Genre.create(req.body).then(genre => res.status(200).json({success:true,token:"FakeTokenForNow"})).catch(next);
});

// Update a genre
router.put('/:id',  (req, res,next) => {
    if (req.body._id) delete req.body._id;
     Genre.update({
      _id: req.params.id,
    }, req.body, {
      upsert: false,
    })
    .then(genre => res.json(200, genre)).catch(next);
});

export default router;