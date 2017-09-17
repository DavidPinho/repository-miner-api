import TechnicalCodeDebt from '../models/technical-code-debt.model';

/**
 * Get list of types with info about the indicators and code debts.
 * @returns {TechnicalCodeDebt[]}
 */
function list(req, res, next) {
  TechnicalCodeDebt.list()
    .then(technicalCodeDebt => res.json(technicalCodeDebt))
    .catch(e => next(e));
}

export default { list };
