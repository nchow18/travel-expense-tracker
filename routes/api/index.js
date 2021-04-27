const router = require('express').Router();
const expenseRoutes = require('./expense-routes');


// add prefix of `/expense` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;