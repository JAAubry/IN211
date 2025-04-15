import express from 'express';
import { appDataSource } from '../datasource.js';
import Movie from '../entities/movie.js';

const router = express.Router();

router.get('/', function (req, res) {
    appDataSource
    .getRepository(Movie)
    .find({})
    .then(function (movies) {
      res.json({ movies });
    });
});

router.post('/new', function (req, res) {
    const movieRepository = appDataSource.getRepository(Movie);
    const newMovie = movieRepository.create({
    titre: req.body.titre,
    date: req.body.date,
    });

    movieRepository
    .insert(newMovie)
    .then(function (newDocument) {
        res.status(201).json(newDocument);
      })
      .catch(function (error) {
        console.error(error);
      });
});

export default router;