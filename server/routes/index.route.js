import express from 'express';
import userRoutes from './user.route';
import repositoryRoutes from './repository.route';
import referenceRoutes from './reference.route';
import authRoutes from './auth.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount repositories routes at /repositories
router.use('/repositories', repositoryRoutes);

// mount references routes at /references
router.use('/references', referenceRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

export default router;
