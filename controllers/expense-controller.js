const { Expense } = require('../models');

const expenseController = {
    // get all expenses
    getAllExpense(req, res) {
      Expense.find({})
        .then(dbExpenseData => res.json(dbExpenseData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // createExpense
    createExpense({ body }, res) {
        Expense.create(body)
        .then(dbExpenseData => res.json(dbExpenseData))
        .catch(err => res.status(400).json(err));
    },

    // delete expense
    deleteExpense({ params }, res) {
        Expense.remove({})
        .then(dbExpenseData => {
            if (!dbExpenseData) {
            res.status(404).json({ message: 'No expense found with this id!' });
            return;
            }
            res.json(dbExpenseData);
        })
        .catch(err => res.status(400).json(err));
    }
}
  

module.exports = expenseController;