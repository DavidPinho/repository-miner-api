import express from 'express';
import validate from 'express-validation';
import referenceCtrl from '../controllers/reference.controller';

const router = express.Router();

router.route('/')
  /** GET /api/references - Get list of references */
  .get(referenceCtrl.list)

router.route('/repository/:repositoryId')
    /** GET /api/references/repository/:id - Get list of references filtered by repositoryId */
  .get(referenceCtrl.listByRepository)

export default router;
