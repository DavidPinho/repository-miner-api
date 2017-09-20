import mongoose from 'mongoose';

/**
 * Technical Code Debt Schema
 */
const TechnicalCodeDebtSchema = new mongoose.Schema({
  filestate: String,
  filehash: Number,
  repository: String,
  reference_name: String,
  debts: [{ name: String, value: Number }],
  reference_type: String,
  commit_date: String,
  filename: String,
  contributors: [{ name: String, email: String, colaborator: Boolean }],
  indicators: {
    FEATURE_ENVY: String,
    DUPLICATED_CODE: Number,
    AUTOMATIC_STATIC_ANALYSIS_ISSUES: String,
    MULTITHREAD_CORRECTNESS: String    
  },
  commit: String,
  technical_debt: Boolean
});

/**
 * Methods
 */
TechnicalCodeDebtSchema.method({
});

/**
 * Statics
 */
TechnicalCodeDebtSchema.statics = {
  /**
   * List repositories sorted by name.
   */
  list() {
    return this.find()
      .sort({ reference_name: 1 })
      .exec();
  },

  /**
   * Update debt value searching by file _id and debt name.
   */
  updateDebtValue(id, debtName, debtValue) {
    return this.findOneAndUpdate({_id: mongoose.Types.ObjectId(id), debts: {$elemMatch: {name: debtName}}}, {$set:{'debts.$.value': debtValue}}, {new: true})
      .exec();
  },

  /**
   * Confirm all technical debt for a given reference. (Set TD value to 1)
  */
  confirmDebtByReference(referenceName, debtName) {
    return this.update({reference_name: referenceName, debts: {$elemMatch: {value: {$in: [-1, 0]}, name: debtName}}}, {$set: {'debts.$.value': 1}}, {multi: true})
      .exec();
  }
};

/**
 * @typedef TechnicalCodeDebt
 */
export default mongoose.model('TechnicalCodeDebt', TechnicalCodeDebtSchema, 'rm_technical_code_debt');