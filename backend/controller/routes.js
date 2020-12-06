import express from 'express';
import * as user from './users';

const router = express.Router();

/* GET users listing */
router.get('/user', user.user);

// module.exports = router;
export default router;
