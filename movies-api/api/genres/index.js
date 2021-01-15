import express from 'express';
import { getGenres } from '../moviesApi';

const router = express.Router();

router.get('/', (req, res,next) => {
  getGenres().then(genres => res.status(200).send(genres));
});

export default router;