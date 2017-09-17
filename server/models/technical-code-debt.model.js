import mongoose from 'mongoose';

/**
 * Technical Code Debt Schema
 */
const TechnicalCodeDebtSchema = new mongoose.Schema({
  filestate: String,
  filehash: String,
  repository: String,
  reference_name: String,
  debts: [String],
  reference_type: String,
  commit_date: Date,
  filename: String,
  contributors: [{ name: String, email: String }],
  indicators: {
    FEATURE_ENVY: String,
    DUPLICATED_CODE: String,
    AUTOMATIC_STATIC_ANALYSIS_ISSUES: String,
    MULTITHREAD_CORRECTNESS: String    
  },
  commit: String,
  technical_debt: Number
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
  }
};

/**
 * @typedef TechnicalCodeDebt
 */
export default mongoose.model('TechnicalCodeDebt', TechnicalCodeDebtSchema, 'technical_code_debt');