const router = require('express').Router();

const {
    getAllExpense,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense
  } = require('../../controllers/expense-controller');

// Set up GET all and POST at /api/expenses
router
  .route('/')
  .get(getAllExpense)
  .post(createExpense);

// Set up GET one, PUT, and DELETE at /api/expenses/:id
router
  .route('/:id')
  .get(getExpenseById)
  .put(updateExpense)
  .delete(deleteExpense);

module.exports = router;