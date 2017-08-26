import express from 'express';
import validate from 'express-validation';
import referenceCtrl from '../controllers/reference.controller';

const router = express.Router();

router.route('/')
  /** GET /api/references - Get list of references */
  .get(referenceCtrl.list)

export default router;
