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
   * List repositories sorted by name.
   */
  updateDebtValue(id, debtName, debtValue) {
    return this.findOneAndUpdate({_id: mongoose.Types.ObjectId(id), debts: {$elemMatch: {name: debtName}}}, {$set:{'debts.$.value': debtValue}}, {new: true})
      .exec();
  }
};

/**
 * @typedef TechnicalCodeDebt
 */
export default mongoose.model('TechnicalCodeDebt', TechnicalCodeDebtSchema, 'rm_technical_code_debt');