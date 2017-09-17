import Reference from '../models/reference.model';

/**
 * Get Reference list.
 * @returns {Reference[]}
 */
function list(req, res, next) {
  Reference.list()
    .then(reference => res.json(reference))
    .catch(e => next(e));
}

/**
 * Get Reference list filtered by Repository.
 * @returns {Reference[]}
 */
function listByRepository(req, res, next) {
  Reference.listByRepository(req.params.repositoryId)
    .then(reference => res.json(reference))
    .catch(e => next(e));
}

/**
 * Get enhanced Reference list filtered by Repository.
 * @returns {Reference[]}
 */
function listEnhancedByRepository(req, res, next) {
  Reference.listEnhancedByRepository(req.params.repositoryId)
    .then(reference => res.json(reference))
    .catch(e => next(e));
}

export default { list, listByRepository, listEnhancedByRepository };
