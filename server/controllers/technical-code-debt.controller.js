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

/**
 * Set debt value to -1 searching by file _id and debt name.
 * @returns {TechnicalCodeDebt}
 */
function cancelDebt(req, res, next) {
  var id = req.params.fileId;
  var debtName = req.params.debtName;  
  TechnicalCodeDebt.updateDebtValue(id, debtName, -1)
    .then(technicalCodeDebt => res.json(technicalCodeDebt))
    .catch(e => next(e));
}  

/**
 * Confirm all technical debt for a given reference. (Set TD value to 1)
 */
function confirmDebtByReference(req, res, next) {
  var referenceName = req.params.referenceName; 
  var debtName = req.params.debtName;    
  TechnicalCodeDebt.confirmDebtByReference(referenceName, debtName)
    .then(result => res.json(result))
    .catch(e => next(e));
}  

export default { list, cancelDebt, confirmDebtByReference };
