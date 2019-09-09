
import express from 'express';

// controller
import UserController from './user/user.controller';
import CommunityController from './community/community.controller';

const router = express.Router();

router.use(new UserController().router);
router.use(new CommunityController().router);

export default router;