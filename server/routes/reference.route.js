import express from 'express';
import referenceCtrl from '../controllers/reference.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/references - Get list of references */
  .get(referenceCtrl.list);

router.route('/repository/:repositoryId')
    /** GET /api/references/repository/:id - Get list of references filtered by repositoryId */
  .get(referenceCtrl.listByRepository);

export default router;
