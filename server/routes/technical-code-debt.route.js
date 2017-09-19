import express from 'express';
import technicalCodeDebtCtrl from '../controllers/technical-code-debt.controller';

const router = express.Router(); // eslint-disable-line new-cap
router.route('/')
  /** GET /api/technical-code-debt - Get list of types with info about the indicators and code debts */
  .get(technicalCodeDebtCtrl.list);

router.route('/cancel-debt/:fileId/:debtName')
  /** GET /api/technical-code-debt/cancel-debt/:fileId/:debtName - Set debt value to -1 */
  .get(technicalCodeDebtCtrl.cancelDebt);  

export default router;
