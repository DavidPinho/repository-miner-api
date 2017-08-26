import express from 'express';
import repositoryCtrl from '../controllers/repository.controller';

const router = express.Router(); // eslint-disable-line new-cap
router.route('/')
  /** GET /api/repositories - Get list of repos */
  .get(repositoryCtrl.list);

export default router;
