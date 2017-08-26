import mongoose from 'mongoose';
import APIError from '../helpers/APIError';

/**
 * Reference Schema
 */
const ReferenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  repository: {
    type: String,
    required: true
  },
  path: String,
  type: String,
  commits: [String]
});

/**
 * Methods
 */
ReferenceSchema.method({
});

/**
 * Statics
 */
ReferenceSchema.statics = {
  /**
   * List Reference sorted by name.
   */
  list() {
    return this.aggregate(
      [
        {
          "$project": {
            "name": 1,
            "repository": 1,
            "path": 1,
            "type": 1,
            "commits": 1,
            "commitsLength": { "$size": "$commits" }
          }
        },
        { "$sort": { "commitsLength": -1 } }
      ]
    )
    .exec();
  }
};

/**
 * @typedef Reference
 */
export default mongoose.model('Reference', ReferenceSchema);