const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ExpenseSchema = new Schema(
  {
    expenseName: {
      type: String,
      required: true,
      trim: true
    },
    expenseAmount: {
      type: Number,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of expenses on retrieval
ExpenseSchema.virtual('expenseCount').get(function() {
  return this.expenseAmount.reduce((total, expenseAmount) => total + expenseAmount.length + 1, 0);
});

  // create the Expense model using the PizzaSchema
const Expense = model('Expense', ExpenseSchema);

// export the Expense model
module.exports = Expense;