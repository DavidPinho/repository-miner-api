import Repository from '../models/repository.model';

/**
 * Get repo list.
 * @returns {Repository[]}
 */
function list(req, res, next) {
  Repository.list()
    .then(repository => res.json(repository))
    .catch(e => next(e));
}

export default { list };
