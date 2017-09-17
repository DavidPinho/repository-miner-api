import express from 'express';
import technicalCodeDebtCtrl from '../controllers/technical-code-debt.controller';

const router = express.Router(); // eslint-disable-line new-cap
router.route('/')
  /** GET /api/technical-code-debt - Get list of types with info about the indicators and code debts */
  .get(technicalCodeDebtCtrl.list);

export default router;
