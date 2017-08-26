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

export default { list };
