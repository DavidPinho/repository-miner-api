import mongoose from 'mongoose';

/**
 * Repository Schema
 */
const RepositorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  path: String,
  description: String,
  scm: String,
  contributors: [{ name: String, email: String }]
});

/**
 * Methods
 */
RepositorySchema.method({
});

/**
 * Statics
 */
RepositorySchema.statics = {
  /**
   * List repositories sorted by name.
   */
  list() {
    return this.find()
      .sort({ name: 1 })
      .exec();
  }
};

/**
 * @typedef Repository
 */
export default mongoose.model('Repository', RepositorySchema);
