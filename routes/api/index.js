const router = require('express').Router();
const expenseRoutes = require('./expense-routes');

// add prefix of `/expense` to routes created in `expense-routes.js`
router.use('/expenses', expenseRoutes);

module.exports = router;