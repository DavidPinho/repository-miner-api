import mongoose from 'mongoose';

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
          $project: {
            name: 1,
            repository: 1,
            path: 1,
            type: 1,
            commits: 1,
            commitsLength: { $size: '$commits' }
          }
        },
        { $sort: { commitsLength: -1 } }
      ]
    )
      .exec();
  },

  /**
   * List References filtered by repository id.
   */
  listByRepository(repositoryId) {
    return this.aggregate(
      [
        {
          $match: {
            repository: repositoryId
          }
        },
        {
          $project: {
            name: 1,
            repository: 1,
            path: 1,
            type: 1,
            commitsLength: { $size: '$commits' }
          }
        },
        { $sort: { commitsLength: -1 } }
      ]
    )
      .exec();
  },

  /**
   * List References with some extra fields filtered by repository id.
   */
  listEnhancedByRepository(repositoryId) {
    return this.aggregate(
      [
        {
          $match: {
            repository: repositoryId
          }
        },
        {
          $lookup:
            {
              from: "technical_code_debt",
              localField: "name",
              foreignField: "reference_name",
              as: "files"
            }
       },
       {
        $project: {
          name: 1,
          repository: 1,
          path: 1,
          type: 1,
          files: 1,
          commitsLength: { $size: '$commits' }
        },
      },   
      { $sort: { commitsLength: -1 } }
      ]
    )
      .exec();
  }
};

/**
 * @typedef Reference
 */
export default mongoose.model('Reference', ReferenceSchema);
