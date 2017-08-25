import express from 'express';
import validate from 'express-validation';
import repositoryCtrl from '../controllers/repository.controller';

const router = express.Router();

router.route('/')
  /** GET /api/repositories - Get list of repos */
  .get(repositoryCtrl.list)

export default router;
